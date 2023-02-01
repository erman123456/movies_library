import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoviesWhereUniqueInput } from './movies-where-unique.input';
import { Type } from 'class-transformer';
import { MoviesUpdateWithoutAuthorInput } from './movies-update-without-author.input';
import { MoviesCreateWithoutAuthorInput } from './movies-create-without-author.input';

@InputType()
export class MoviesUpsertWithWhereUniqueWithoutAuthorInput {

    @Field(() => MoviesWhereUniqueInput, {nullable:false})
    @Type(() => MoviesWhereUniqueInput)
    where!: MoviesWhereUniqueInput;

    @Field(() => MoviesUpdateWithoutAuthorInput, {nullable:false})
    @Type(() => MoviesUpdateWithoutAuthorInput)
    update!: MoviesUpdateWithoutAuthorInput;

    @Field(() => MoviesCreateWithoutAuthorInput, {nullable:false})
    @Type(() => MoviesCreateWithoutAuthorInput)
    create!: MoviesCreateWithoutAuthorInput;
}
