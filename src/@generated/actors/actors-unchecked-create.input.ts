import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MoviesUncheckedCreateNestedManyWithoutActorInput } from '../movies/movies-unchecked-create-nested-many-without-actor.input';

@InputType()
export class ActorsUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    gender!: string;

    @Field(() => Int, {nullable:false})
    age!: number;

    @Field(() => MoviesUncheckedCreateNestedManyWithoutActorInput, {nullable:true})
    Movies?: MoviesUncheckedCreateNestedManyWithoutActorInput;
}
