import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActorsUpdateInput } from './actors-update.input';
import { Type } from 'class-transformer';
import { ActorsWhereUniqueInput } from './actors-where-unique.input';

@ArgsType()
export class UpdateOneActorsArgs {

    @Field(() => ActorsUpdateInput, {nullable:false})
    @Type(() => ActorsUpdateInput)
    data!: ActorsUpdateInput;

    @Field(() => ActorsWhereUniqueInput, {nullable:false})
    @Type(() => ActorsWhereUniqueInput)
    where!: ActorsWhereUniqueInput;
}
