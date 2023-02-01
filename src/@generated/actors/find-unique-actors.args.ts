import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActorsWhereUniqueInput } from './actors-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueActorsArgs {

    @Field(() => ActorsWhereUniqueInput, {nullable:false})
    @Type(() => ActorsWhereUniqueInput)
    where!: ActorsWhereUniqueInput;
}
