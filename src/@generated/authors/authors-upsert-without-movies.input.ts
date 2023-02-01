import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorsUpdateWithoutMoviesInput } from './authors-update-without-movies.input';
import { Type } from 'class-transformer';
import { AuthorsCreateWithoutMoviesInput } from './authors-create-without-movies.input';

@InputType()
export class AuthorsUpsertWithoutMoviesInput {

    @Field(() => AuthorsUpdateWithoutMoviesInput, {nullable:false})
    @Type(() => AuthorsUpdateWithoutMoviesInput)
    update!: AuthorsUpdateWithoutMoviesInput;

    @Field(() => AuthorsCreateWithoutMoviesInput, {nullable:false})
    @Type(() => AuthorsCreateWithoutMoviesInput)
    create!: AuthorsCreateWithoutMoviesInput;
}
