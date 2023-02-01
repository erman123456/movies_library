import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoviesUpdateInput } from './movies-update.input';
import { Type } from 'class-transformer';
import { MoviesWhereUniqueInput } from './movies-where-unique.input';

@ArgsType()
export class UpdateOneMoviesArgs {

    @Field(() => MoviesUpdateInput, {nullable:false})
    @Type(() => MoviesUpdateInput)
    data!: MoviesUpdateInput;

    @Field(() => MoviesWhereUniqueInput, {nullable:false})
    @Type(() => MoviesWhereUniqueInput)
    where!: MoviesWhereUniqueInput;
}
