import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoviesWhereUniqueInput } from './movies-where-unique.input';
import { Type } from 'class-transformer';
import { MoviesUpdateWithoutActorInput } from './movies-update-without-actor.input';

@InputType()
export class MoviesUpdateWithWhereUniqueWithoutActorInput {

    @Field(() => MoviesWhereUniqueInput, {nullable:false})
    @Type(() => MoviesWhereUniqueInput)
    where!: MoviesWhereUniqueInput;

    @Field(() => MoviesUpdateWithoutActorInput, {nullable:false})
    @Type(() => MoviesUpdateWithoutActorInput)
    data!: MoviesUpdateWithoutActorInput;
}
