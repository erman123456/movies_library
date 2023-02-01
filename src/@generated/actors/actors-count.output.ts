import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ActorsCount {

    @Field(() => Int, {nullable:false})
    Movies?: number;
}
