import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorsCreateWithoutMoviesInput } from './authors-create-without-movies.input';
import { Type } from 'class-transformer';
import { AuthorsCreateOrConnectWithoutMoviesInput } from './authors-create-or-connect-without-movies.input';
import { AuthorsWhereUniqueInput } from './authors-where-unique.input';

@InputType()
export class AuthorsCreateNestedOneWithoutMoviesInput {

    @Field(() => AuthorsCreateWithoutMoviesInput, {nullable:true})
    @Type(() => AuthorsCreateWithoutMoviesInput)
    create?: AuthorsCreateWithoutMoviesInput;

    @Field(() => AuthorsCreateOrConnectWithoutMoviesInput, {nullable:true})
    @Type(() => AuthorsCreateOrConnectWithoutMoviesInput)
    connectOrCreate?: AuthorsCreateOrConnectWithoutMoviesInput;

    @Field(() => AuthorsWhereUniqueInput, {nullable:true})
    @Type(() => AuthorsWhereUniqueInput)
    connect?: AuthorsWhereUniqueInput;
}
