import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoviesWhereInput } from './movies-where.input';
import { Type } from 'class-transformer';
import { MoviesOrderByWithRelationInput } from './movies-order-by-with-relation.input';
import { MoviesWhereUniqueInput } from './movies-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MoviesScalarFieldEnum } from './movies-scalar-field.enum';

@ArgsType()
export class FindFirstMoviesOrThrowArgs {

    @Field(() => MoviesWhereInput, {nullable:true})
    @Type(() => MoviesWhereInput)
    where?: MoviesWhereInput;

    @Field(() => [MoviesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MoviesOrderByWithRelationInput>;

    @Field(() => MoviesWhereUniqueInput, {nullable:true})
    cursor?: MoviesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MoviesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MoviesScalarFieldEnum>;
}
