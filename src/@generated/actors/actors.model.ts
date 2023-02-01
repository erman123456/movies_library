import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Movies } from '../movies/movies.model';
import { ActorsCount } from './actors-count.output';

@ObjectType()
export class Actors {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    gender!: string;

    @Field(() => Int, {nullable:false})
    age!: number;

    @Field(() => [Movies], {nullable:true})
    Movies?: Array<Movies>;

    @Field(() => ActorsCount, {nullable:false})
    _count?: ActorsCount;
}
