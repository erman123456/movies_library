import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActorsUpdateWithoutMoviesInput } from './actors-update-without-movies.input';
import { Type } from 'class-transformer';
import { ActorsCreateWithoutMoviesInput } from './actors-create-without-movies.input';

@InputType()
export class ActorsUpsertWithoutMoviesInput {

    @Field(() => ActorsUpdateWithoutMoviesInput, {nullable:false})
    @Type(() => ActorsUpdateWithoutMoviesInput)
    update!: ActorsUpdateWithoutMoviesInput;

    @Field(() => ActorsCreateWithoutMoviesInput, {nullable:false})
    @Type(() => ActorsCreateWithoutMoviesInput)
    create!: ActorsCreateWithoutMoviesInput;
}
