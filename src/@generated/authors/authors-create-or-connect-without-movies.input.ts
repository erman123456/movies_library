import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorsWhereUniqueInput } from './authors-where-unique.input';
import { Type } from 'class-transformer';
import { AuthorsCreateWithoutMoviesInput } from './authors-create-without-movies.input';

@InputType()
export class AuthorsCreateOrConnectWithoutMoviesInput {

    @Field(() => AuthorsWhereUniqueInput, {nullable:false})
    @Type(() => AuthorsWhereUniqueInput)
    where!: AuthorsWhereUniqueInput;

    @Field(() => AuthorsCreateWithoutMoviesInput, {nullable:false})
    @Type(() => AuthorsCreateWithoutMoviesInput)
    create!: AuthorsCreateWithoutMoviesInput;
}
