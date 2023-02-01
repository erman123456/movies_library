import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActorsWhereUniqueInput } from './actors-where-unique.input';
import { Type } from 'class-transformer';
import { ActorsCreateWithoutMoviesInput } from './actors-create-without-movies.input';

@InputType()
export class ActorsCreateOrConnectWithoutMoviesInput {

    @Field(() => ActorsWhereUniqueInput, {nullable:false})
    @Type(() => ActorsWhereUniqueInput)
    where!: ActorsWhereUniqueInput;

    @Field(() => ActorsCreateWithoutMoviesInput, {nullable:false})
    @Type(() => ActorsCreateWithoutMoviesInput)
    create!: ActorsCreateWithoutMoviesInput;
}
