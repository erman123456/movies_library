import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActorsWhereInput } from './actors-where.input';
import { Type } from 'class-transformer';
import { ActorsOrderByWithRelationInput } from './actors-order-by-with-relation.input';
import { ActorsWhereUniqueInput } from './actors-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ActorsScalarFieldEnum } from './actors-scalar-field.enum';

@ArgsType()
export class FindManyActorsArgs {

    @Field(() => ActorsWhereInput, {nullable:true})
    @Type(() => ActorsWhereInput)
    where?: ActorsWhereInput;

    @Field(() => [ActorsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ActorsOrderByWithRelationInput>;

    @Field(() => ActorsWhereUniqueInput, {nullable:true})
    cursor?: ActorsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ActorsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ActorsScalarFieldEnum>;
}
