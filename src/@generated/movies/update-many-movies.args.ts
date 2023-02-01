import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoviesUpdateManyMutationInput } from './movies-update-many-mutation.input';
import { Type } from 'class-transformer';
import { MoviesWhereInput } from './movies-where.input';

@ArgsType()
export class UpdateManyMoviesArgs {

    @Field(() => MoviesUpdateManyMutationInput, {nullable:false})
    @Type(() => MoviesUpdateManyMutationInput)
    data!: MoviesUpdateManyMutationInput;

    @Field(() => MoviesWhereInput, {nullable:true})
    @Type(() => MoviesWhereInput)
    where?: MoviesWhereInput;
}
