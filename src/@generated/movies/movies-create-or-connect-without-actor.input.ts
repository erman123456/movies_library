import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoviesWhereUniqueInput } from './movies-where-unique.input';
import { Type } from 'class-transformer';
import { MoviesCreateWithoutActorInput } from './movies-create-without-actor.input';

@InputType()
export class MoviesCreateOrConnectWithoutActorInput {

    @Field(() => MoviesWhereUniqueInput, {nullable:false})
    @Type(() => MoviesWhereUniqueInput)
    where!: MoviesWhereUniqueInput;

    @Field(() => MoviesCreateWithoutActorInput, {nullable:false})
    @Type(() => MoviesCreateWithoutActorInput)
    create!: MoviesCreateWithoutActorInput;
}
