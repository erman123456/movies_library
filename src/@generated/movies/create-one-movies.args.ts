import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoviesCreateInput } from './movies-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneMoviesArgs {

    @Field(() => MoviesCreateInput, {nullable:false})
    @Type(() => MoviesCreateInput)
    data!: MoviesCreateInput;
}
