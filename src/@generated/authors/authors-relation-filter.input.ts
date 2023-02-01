import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorsWhereInput } from './authors-where.input';

@InputType()
export class AuthorsRelationFilter {

    @Field(() => AuthorsWhereInput, {nullable:true})
    is?: AuthorsWhereInput;

    @Field(() => AuthorsWhereInput, {nullable:true})
    isNot?: AuthorsWhereInput;
}
