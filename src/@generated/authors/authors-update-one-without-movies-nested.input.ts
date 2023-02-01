import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorsCreateWithoutMoviesInput } from './authors-create-without-movies.input';
import { Type } from 'class-transformer';
import { AuthorsCreateOrConnectWithoutMoviesInput } from './authors-create-or-connect-without-movies.input';
import { AuthorsUpsertWithoutMoviesInput } from './authors-upsert-without-movies.input';
import { AuthorsWhereUniqueInput } from './authors-where-unique.input';
import { AuthorsUpdateWithoutMoviesInput } from './authors-update-without-movies.input';

@InputType()
export class AuthorsUpdateOneWithoutMoviesNestedInput {

    @Field(() => AuthorsCreateWithoutMoviesInput, {nullable:true})
    @Type(() => AuthorsCreateWithoutMoviesInput)
    create?: AuthorsCreateWithoutMoviesInput;

    @Field(() => AuthorsCreateOrConnectWithoutMoviesInput, {nullable:true})
    @Type(() => AuthorsCreateOrConnectWithoutMoviesInput)
    connectOrCreate?: AuthorsCreateOrConnectWithoutMoviesInput;

    @Field(() => AuthorsUpsertWithoutMoviesInput, {nullable:true})
    @Type(() => AuthorsUpsertWithoutMoviesInput)
    upsert?: AuthorsUpsertWithoutMoviesInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => AuthorsWhereUniqueInput, {nullable:true})
    @Type(() => AuthorsWhereUniqueInput)
    connect?: AuthorsWhereUniqueInput;

    @Field(() => AuthorsUpdateWithoutMoviesInput, {nullable:true})
    @Type(() => AuthorsUpdateWithoutMoviesInput)
    update?: AuthorsUpdateWithoutMoviesInput;
}
