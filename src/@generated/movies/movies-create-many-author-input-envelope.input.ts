import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoviesCreateManyAuthorInput } from './movies-create-many-author.input';
import { Type } from 'class-transformer';

@InputType()
export class MoviesCreateManyAuthorInputEnvelope {

    @Field(() => [MoviesCreateManyAuthorInput], {nullable:false})
    @Type(() => MoviesCreateManyAuthorInput)
    data!: Array<MoviesCreateManyAuthorInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
