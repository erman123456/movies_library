import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorsCreateNestedOneWithoutMoviesInput } from '../authors/authors-create-nested-one-without-movies.input';

@InputType()
export class MoviesCreateWithoutActorInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => AuthorsCreateNestedOneWithoutMoviesInput, {nullable:true})
    author?: AuthorsCreateNestedOneWithoutMoviesInput;
}
