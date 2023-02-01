import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActorsUpdateManyMutationInput } from './actors-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ActorsWhereInput } from './actors-where.input';

@ArgsType()
export class UpdateManyActorsArgs {

    @Field(() => ActorsUpdateManyMutationInput, {nullable:false})
    @Type(() => ActorsUpdateManyMutationInput)
    data!: ActorsUpdateManyMutationInput;

    @Field(() => ActorsWhereInput, {nullable:true})
    @Type(() => ActorsWhereInput)
    where?: ActorsWhereInput;
}
