import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActorsCreateManyInput } from './actors-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyActorsArgs {

    @Field(() => [ActorsCreateManyInput], {nullable:false})
    @Type(() => ActorsCreateManyInput)
    data!: Array<ActorsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
