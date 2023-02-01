import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MoviesCreateNestedManyWithoutAuthorInput } from '../movies/movies-create-nested-many-without-author.input';

@InputType()
export class AuthorsCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    gender!: string;

    @Field(() => Int, {nullable:false})
    age!: number;

    @Field(() => MoviesCreateNestedManyWithoutAuthorInput, {nullable:true})
    Movies?: MoviesCreateNestedManyWithoutAuthorInput;
}
