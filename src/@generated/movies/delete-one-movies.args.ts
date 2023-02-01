import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoviesWhereUniqueInput } from './movies-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneMoviesArgs {

    @Field(() => MoviesWhereUniqueInput, {nullable:false})
    @Type(() => MoviesWhereUniqueInput)
    where!: MoviesWhereUniqueInput;
}
