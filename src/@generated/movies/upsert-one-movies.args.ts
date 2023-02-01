import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoviesWhereUniqueInput } from './movies-where-unique.input';
import { Type } from 'class-transformer';
import { MoviesCreateInput } from './movies-create.input';
import { MoviesUpdateInput } from './movies-update.input';

@ArgsType()
export class UpsertOneMoviesArgs {

    @Field(() => MoviesWhereUniqueInput, {nullable:false})
    @Type(() => MoviesWhereUniqueInput)
    where!: MoviesWhereUniqueInput;

    @Field(() => MoviesCreateInput, {nullable:false})
    @Type(() => MoviesCreateInput)
    create!: MoviesCreateInput;

    @Field(() => MoviesUpdateInput, {nullable:false})
    @Type(() => MoviesUpdateInput)
    update!: MoviesUpdateInput;
}
