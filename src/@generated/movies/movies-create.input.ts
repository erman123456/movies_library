import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActorsCreateNestedOneWithoutMoviesInput } from '../actors/actors-create-nested-one-without-movies.input';
import { AuthorsCreateNestedOneWithoutMoviesInput } from '../authors/authors-create-nested-one-without-movies.input';

@InputType()
export class MoviesCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => ActorsCreateNestedOneWithoutMoviesInput, {nullable:true})
    actor?: ActorsCreateNestedOneWithoutMoviesInput;

    @Field(() => AuthorsCreateNestedOneWithoutMoviesInput, {nullable:true})
    author?: AuthorsCreateNestedOneWithoutMoviesInput;
}
