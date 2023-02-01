import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoviesScalarWhereInput } from './movies-scalar-where.input';
import { Type } from 'class-transformer';
import { MoviesUpdateManyMutationInput } from './movies-update-many-mutation.input';

@InputType()
export class MoviesUpdateManyWithWhereWithoutAuthorInput {

    @Field(() => MoviesScalarWhereInput, {nullable:false})
    @Type(() => MoviesScalarWhereInput)
    where!: MoviesScalarWhereInput;

    @Field(() => MoviesUpdateManyMutationInput, {nullable:false})
    @Type(() => MoviesUpdateManyMutationInput)
    data!: MoviesUpdateManyMutationInput;
}
