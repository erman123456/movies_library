import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Actors } from '../actors/actors.model';
import { Authors } from '../authors/authors.model';

@ObjectType()
export class Movies {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => Int, {nullable:true})
    actorId!: number | null;

    @Field(() => Int, {nullable:true})
    authorId!: number | null;

    @Field(() => Actors, {nullable:true})
    actor?: Actors | null;

    @Field(() => Authors, {nullable:true})
    author?: Authors | null;
}
