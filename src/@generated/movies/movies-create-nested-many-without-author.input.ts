import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoviesCreateWithoutAuthorInput } from './movies-create-without-author.input';
import { Type } from 'class-transformer';
import { MoviesCreateOrConnectWithoutAuthorInput } from './movies-create-or-connect-without-author.input';
import { MoviesWhereUniqueInput } from './movies-where-unique.input';

@InputType()
export class MoviesCreateNestedManyWithoutAuthorInput {

    @Field(() => [MoviesCreateWithoutAuthorInput], {nullable:true})
    @Type(() => MoviesCreateWithoutAuthorInput)
    create?: Array<MoviesCreateWithoutAuthorInput>;

    @Field(() => [MoviesCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => MoviesCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<MoviesCreateOrConnectWithoutAuthorInput>;

    @Field(() => [MoviesWhereUniqueInput], {nullable:true})
    @Type(() => MoviesWhereUniqueInput)
    connect?: Array<MoviesWhereUniqueInput>;
}
