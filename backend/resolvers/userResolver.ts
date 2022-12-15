import { Arg, ID, Mutation, Query, Resolver } from "type-graphql";
import { User, UserInput, ChangeProfileInput, CreatePostInput, CreateCommentInput, VerificationInput, CheckVerificationInput } from "./resolversTypes";
import { Twilio } from "twilio";
import prisma from "../prismaConnect";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = new Twilio(accountSid, authToken);

@Resolver()
export class UserResolver{
    @Query(() => [User])
    async GetUsers() {
        let users = await prisma.user.findMany({
            include: {
                posts: {
                    include: {
                        comments: true
                    }
                },
                bio: true
            }
        }); 
        return users;
    }

    @Query(() => User)
    async GetUser(@Arg('input', () => UserInput) input: UserInput) {
        let user = await prisma.user.findFirst({
            where: {
                phone: input.phone
            },
            include: {
                posts: {
                    include: {
                        comments: true
                    }
                },
                bio: true
            }
        }); 
        return user;
    }

    @Mutation(() => Number)
    async ChangeProfile(@Arg('input', () => ChangeProfileInput) input: ChangeProfileInput) {
        await prisma.user.update({
            where: {
                id: input.id
            },
            data: {
                bio: {
                    create: {
                        avatar: input.avatar || null,
                        email: input.email || null,
                        name: input.name || null,
                        surname: input.surname || null,
                        username: input.surname || null
                    }
                }
            }
        })
        return 200;
    }

    @Mutation(() => Number)
    async CreatePost(@Arg('input', () => CreatePostInput) input: CreatePostInput) {
        await prisma.user.update({
            where: {
                id: input.id
            },
            data: {
                posts: {
                    create: {
                        name: input.name,
                        color: input.color,
                        description: input.description,
                        latitude: input.latitude,
                        longitude: input.longitude
                    }
                }
            }
        })
        return 200;
    }

    @Mutation(() => Number)
    async CreateComment(@Arg('input', () => CreateCommentInput) input: CreateCommentInput) {
        await prisma.post.update({
            where: {
                id: input.id
            },
            data: {
                comments: {
                    create: {
                        author_id: input.user_id,
                        description: input.description
                    }
                }
            }
        })
        return 200;
    }

    @Mutation(() => Number)
    async sendVerificationCode(@Arg('options', () => VerificationInput) options: VerificationInput){
        const verification = await client.verify.v2.services('VA0b640c7736c9fbe5538424aa694877e0')
            .verifications
            .create({to: `+${options.number}`, channel: 'sms'});
        if(verification.status == 'pending') return 200;
        else return 500;
    }

    @Mutation(() => Number)
    async chekVerificationCode(@Arg('options', () => CheckVerificationInput) options: CheckVerificationInput){
        const verification = await client.verify.v2.services('VA0b640c7736c9fbe5538424aa694877e0')
            .verificationChecks
            .create({to: `+${options.number}`, code: options.code});
        if(verification.status == 'approved') {
            let user = await prisma.user.findFirst({
                where: {
                    phone: options.number
                }
            });
            if(!user){
                await prisma.user.create({
                    data: {
                        phone: options.number,
                    }
                });
                console.log("created");
            }
            return 200;
        }
        else if (verification.status == 'pending') return 400;
        else return 500;
    }
}