import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoviesCreateWithoutAuthorInput } from './movies-create-without-author.input';
import { Type } from 'class-transformer';
import { MoviesCreateOrConnectWithoutAuthorInput } from './movies-create-or-connect-without-author.input';
import { MoviesUpsertWithWhereUniqueWithoutAuthorInput } from './movies-upsert-with-where-unique-without-author.input';
import { MoviesCreateManyAuthorInputEnvelope } from './movies-create-many-author-input-envelope.input';
import { MoviesWhereUniqueInput } from './movies-where-unique.input';
import { MoviesUpdateWithWhereUniqueWithoutAuthorInput } from './movies-update-with-where-unique-without-author.input';
import { MoviesUpdateManyWithWhereWithoutAuthorInput } from './movies-update-many-with-where-without-author.input';
import { MoviesScalarWhereInput } from './movies-scalar-where.input';

@InputType()
export class MoviesUpdateManyWithoutAuthorNestedInput {

    @Field(() => [MoviesCreateWithoutAuthorInput], {nullable:true})
    @Type(() => MoviesCreateWithoutAuthorInput)
    create?: Array<MoviesCreateWithoutAuthorInput>;

    @Field(() => [MoviesCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => MoviesCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<MoviesCreateOrConnectWithoutAuthorInput>;

    @Field(() => [MoviesUpsertWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => MoviesUpsertWithWhereUniqueWithoutAuthorInput)
    upsert?: Array<MoviesUpsertWithWhereUniqueWithoutAuthorInput>;

    @Field(() => MoviesCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => MoviesCreateManyAuthorInputEnvelope)
    createMany?: MoviesCreateManyAuthorInputEnvelope;

    @Field(() => [MoviesWhereUniqueInput], {nullable:true})
    @Type(() => MoviesWhereUniqueInput)
    set?: Array<MoviesWhereUniqueInput>;

    @Field(() => [MoviesWhereUniqueInput], {nullable:true})
    @Type(() => MoviesWhereUniqueInput)
    disconnect?: Array<MoviesWhereUniqueInput>;

    @Field(() => [MoviesWhereUniqueInput], {nullable:true})
    @Type(() => MoviesWhereUniqueInput)
    delete?: Array<MoviesWhereUniqueInput>;

    @Field(() => [MoviesWhereUniqueInput], {nullable:true})
    @Type(() => MoviesWhereUniqueInput)
    connect?: Array<MoviesWhereUniqueInput>;

    @Field(() => [MoviesUpdateWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => MoviesUpdateWithWhereUniqueWithoutAuthorInput)
    update?: Array<MoviesUpdateWithWhereUniqueWithoutAuthorInput>;

    @Field(() => [MoviesUpdateManyWithWhereWithoutAuthorInput], {nullable:true})
    @Type(() => MoviesUpdateManyWithWhereWithoutAuthorInput)
    updateMany?: Array<MoviesUpdateManyWithWhereWithoutAuthorInput>;

    @Field(() => [MoviesScalarWhereInput], {nullable:true})
    @Type(() => MoviesScalarWhereInput)
    deleteMany?: Array<MoviesScalarWhereInput>;
}
