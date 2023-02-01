import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthorsWhereUniqueInput } from './authors-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneAuthorsArgs {

    @Field(() => AuthorsWhereUniqueInput, {nullable:false})
    @Type(() => AuthorsWhereUniqueInput)
    where!: AuthorsWhereUniqueInput;
}
