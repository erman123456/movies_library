import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoviesWhereUniqueInput } from './movies-where-unique.input';
import { Type } from 'class-transformer';
import { MoviesUpdateWithoutActorInput } from './movies-update-without-actor.input';
import { MoviesCreateWithoutActorInput } from './movies-create-without-actor.input';

@InputType()
export class MoviesUpsertWithWhereUniqueWithoutActorInput {

    @Field(() => MoviesWhereUniqueInput, {nullable:false})
    @Type(() => MoviesWhereUniqueInput)
    where!: MoviesWhereUniqueInput;

    @Field(() => MoviesUpdateWithoutActorInput, {nullable:false})
    @Type(() => MoviesUpdateWithoutActorInput)
    update!: MoviesUpdateWithoutActorInput;

    @Field(() => MoviesCreateWithoutActorInput, {nullable:false})
    @Type(() => MoviesCreateWithoutActorInput)
    create!: MoviesCreateWithoutActorInput;
}
