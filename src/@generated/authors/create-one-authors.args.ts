import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthorsCreateInput } from './authors-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAuthorsArgs {

    @Field(() => AuthorsCreateInput, {nullable:false})
    @Type(() => AuthorsCreateInput)
    data!: AuthorsCreateInput;
}
