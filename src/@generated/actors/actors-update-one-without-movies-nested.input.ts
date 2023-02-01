import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActorsCreateWithoutMoviesInput } from './actors-create-without-movies.input';
import { Type } from 'class-transformer';
import { ActorsCreateOrConnectWithoutMoviesInput } from './actors-create-or-connect-without-movies.input';
import { ActorsUpsertWithoutMoviesInput } from './actors-upsert-without-movies.input';
import { ActorsWhereUniqueInput } from './actors-where-unique.input';
import { ActorsUpdateWithoutMoviesInput } from './actors-update-without-movies.input';

@InputType()
export class ActorsUpdateOneWithoutMoviesNestedInput {

    @Field(() => ActorsCreateWithoutMoviesInput, {nullable:true})
    @Type(() => ActorsCreateWithoutMoviesInput)
    create?: ActorsCreateWithoutMoviesInput;

    @Field(() => ActorsCreateOrConnectWithoutMoviesInput, {nullable:true})
    @Type(() => ActorsCreateOrConnectWithoutMoviesInput)
    connectOrCreate?: ActorsCreateOrConnectWithoutMoviesInput;

    @Field(() => ActorsUpsertWithoutMoviesInput, {nullable:true})
    @Type(() => ActorsUpsertWithoutMoviesInput)
    upsert?: ActorsUpsertWithoutMoviesInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ActorsWhereUniqueInput, {nullable:true})
    @Type(() => ActorsWhereUniqueInput)
    connect?: ActorsWhereUniqueInput;

    @Field(() => ActorsUpdateWithoutMoviesInput, {nullable:true})
    @Type(() => ActorsUpdateWithoutMoviesInput)
    update?: ActorsUpdateWithoutMoviesInput;
}
