import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActorsCreateWithoutMoviesInput } from './actors-create-without-movies.input';
import { Type } from 'class-transformer';
import { ActorsCreateOrConnectWithoutMoviesInput } from './actors-create-or-connect-without-movies.input';
import { ActorsWhereUniqueInput } from './actors-where-unique.input';

@InputType()
export class ActorsCreateNestedOneWithoutMoviesInput {

    @Field(() => ActorsCreateWithoutMoviesInput, {nullable:true})
    @Type(() => ActorsCreateWithoutMoviesInput)
    create?: ActorsCreateWithoutMoviesInput;

    @Field(() => ActorsCreateOrConnectWithoutMoviesInput, {nullable:true})
    @Type(() => ActorsCreateOrConnectWithoutMoviesInput)
    connectOrCreate?: ActorsCreateOrConnectWithoutMoviesInput;

    @Field(() => ActorsWhereUniqueInput, {nullable:true})
    @Type(() => ActorsWhereUniqueInput)
    connect?: ActorsWhereUniqueInput;
}
