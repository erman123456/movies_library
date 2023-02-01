import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActorsCreateInput } from './actors-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneActorsArgs {

    @Field(() => ActorsCreateInput, {nullable:false})
    @Type(() => ActorsCreateInput)
    data!: ActorsCreateInput;
}
