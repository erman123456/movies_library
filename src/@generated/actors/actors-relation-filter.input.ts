import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActorsWhereInput } from './actors-where.input';

@InputType()
export class ActorsRelationFilter {

    @Field(() => ActorsWhereInput, {nullable:true})
    is?: ActorsWhereInput;

    @Field(() => ActorsWhereInput, {nullable:true})
    isNot?: ActorsWhereInput;
}
