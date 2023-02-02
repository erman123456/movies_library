import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoviesCreateManyInput } from './movies-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyMoviesArgs {

    @Field(() => [MoviesCreateManyInput], {nullable:false})
    @Type(() => MoviesCreateManyInput)
    data!: Array<MoviesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
