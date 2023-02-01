import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoviesWhereInput } from './movies-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyMoviesArgs {

    @Field(() => MoviesWhereInput, {nullable:true})
    @Type(() => MoviesWhereInput)
    where?: MoviesWhereInput;
}
