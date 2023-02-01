import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoviesWhereUniqueInput } from './movies-where-unique.input';
import { Type } from 'class-transformer';
import { MoviesCreateWithoutAuthorInput } from './movies-create-without-author.input';

@InputType()
export class MoviesCreateOrConnectWithoutAuthorInput {

    @Field(() => MoviesWhereUniqueInput, {nullable:false})
    @Type(() => MoviesWhereUniqueInput)
    where!: MoviesWhereUniqueInput;

    @Field(() => MoviesCreateWithoutAuthorInput, {nullable:false})
    @Type(() => MoviesCreateWithoutAuthorInput)
    create!: MoviesCreateWithoutAuthorInput;
}
