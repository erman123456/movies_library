import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AuthorsCount {

    @Field(() => Int, {nullable:false})
    Movies?: number;
}
