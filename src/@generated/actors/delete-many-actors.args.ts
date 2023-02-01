import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActorsWhereInput } from './actors-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyActorsArgs {

    @Field(() => ActorsWhereInput, {nullable:true})
    @Type(() => ActorsWhereInput)
    where?: ActorsWhereInput;
}
