import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActorsWhereUniqueInput } from './actors-where-unique.input';
import { Type } from 'class-transformer';
import { ActorsCreateInput } from './actors-create.input';
import { ActorsUpdateInput } from './actors-update.input';

@ArgsType()
export class UpsertOneActorsArgs {

    @Field(() => ActorsWhereUniqueInput, {nullable:false})
    @Type(() => ActorsWhereUniqueInput)
    where!: ActorsWhereUniqueInput;

    @Field(() => ActorsCreateInput, {nullable:false})
    @Type(() => ActorsCreateInput)
    create!: ActorsCreateInput;

    @Field(() => ActorsUpdateInput, {nullable:false})
    @Type(() => ActorsUpdateInput)
    update!: ActorsUpdateInput;
}
