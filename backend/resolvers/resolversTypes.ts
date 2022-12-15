import { ObjectType, Field, ID, InputType } from "type-graphql";

@ObjectType()
export class User {
    @Field(() => ID)
    id: number;

    @Field()
    phone: string;

    @Field(() => Profile, { nullable: true })
    bio: Profile;

    @Field(() => [Post])
    posts: Post[];

    @Field()
    created_at: Date;

    @Field()
    updated_at: Date;
}

@ObjectType()
export class Profile {
    @Field(() => ID)
    id: number;

    @Field({ nullable: true })
    username: string;

    @Field({ nullable: true })
    email: string;

    @Field({ nullable: true })
    avatar: string;

    @Field({ nullable: true })
    name: string;

    @Field({ nullable: true })
    surname: string;
}

@ObjectType()
export class Post {
    @Field(() => ID)
    id: number;

    @Field(() => ID)
    author_id: number;

    @Field()
    name: string;

    @Field()
    color: string;

    @Field()
    description: string;

    @Field()
    latitude: number;

    @Field()
    longitude: number;

    @Field(() => [Comment])
    comments: Comment[];

    @Field()
    created_at: Date;

    @Field()
    updated_at: Date;
}


@ObjectType()
export class Comment {
    @Field(() => ID)
    id: number;

    @Field(() => ID)
    post_id: number;

    @Field(() => ID)
    author_id: number;

    @Field()
    description: string;

    @Field()
    created_at: Date;

    @Field()
    updated_at: Date;
}

@InputType()
export class UserInput{
    @Field()
    phone: string;
}

@InputType()
export class ChangeProfileInput{
    @Field()
    id: number;

    @Field({defaultValue: null, nullable: true})
    username?: string;

    @Field({defaultValue: null, nullable: true})
    email?: string;

    @Field({defaultValue: null, nullable: true})
    avatar?: string;

    @Field({defaultValue: null, nullable: true})
    name?: string;

    @Field({defaultValue: null, nullable: true})
    surname?: string;
}

@InputType()
export class CreatePostInput{
    @Field()
    id: number;

    @Field()
    name: string;

    @Field()
    color: string;

    @Field()
    description: string;

    @Field()
    latitude: number;

    @Field()
    longitude: number;
}

@InputType()
export class CreateCommentInput{
    @Field()
    id: number;

    @Field()
    user_id: number;

    @Field()
    description: string;
}

@InputType()
export class VerificationInput{
    @Field()
    number: string;
}

@InputType()
export class CheckVerificationInput{
    @Field()
    number: string;

    @Field()
    code: string;
}