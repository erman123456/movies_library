import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoviesWhereInput } from './movies-where.input';

@InputType()
export class MoviesListRelationFilter {

    @Field(() => MoviesWhereInput, {nullable:true})
    every?: MoviesWhereInput;

    @Field(() => MoviesWhereInput, {nullable:true})
    some?: MoviesWhereInput;

    @Field(() => MoviesWhereInput, {nullable:true})
    none?: MoviesWhereInput;
}
