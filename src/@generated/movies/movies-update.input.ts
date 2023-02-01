import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { ActorsUpdateOneWithoutMoviesNestedInput } from '../actors/actors-update-one-without-movies-nested.input';
import { AuthorsUpdateOneWithoutMoviesNestedInput } from '../authors/authors-update-one-without-movies-nested.input';

@InputType()
export class MoviesUpdateInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => ActorsUpdateOneWithoutMoviesNestedInput, {nullable:true})
    actor?: ActorsUpdateOneWithoutMoviesNestedInput;

    @Field(() => AuthorsUpdateOneWithoutMoviesNestedInput, {nullable:true})
    author?: AuthorsUpdateOneWithoutMoviesNestedInput;
}
