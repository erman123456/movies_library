import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoviesCreateWithoutActorInput } from './movies-create-without-actor.input';
import { Type } from 'class-transformer';
import { MoviesCreateOrConnectWithoutActorInput } from './movies-create-or-connect-without-actor.input';
import { MoviesUpsertWithWhereUniqueWithoutActorInput } from './movies-upsert-with-where-unique-without-actor.input';
import { MoviesWhereUniqueInput } from './movies-where-unique.input';
import { MoviesUpdateWithWhereUniqueWithoutActorInput } from './movies-update-with-where-unique-without-actor.input';
import { MoviesUpdateManyWithWhereWithoutActorInput } from './movies-update-many-with-where-without-actor.input';
import { MoviesScalarWhereInput } from './movies-scalar-where.input';

@InputType()
export class MoviesUncheckedUpdateManyWithoutActorNestedInput {

    @Field(() => [MoviesCreateWithoutActorInput], {nullable:true})
    @Type(() => MoviesCreateWithoutActorInput)
    create?: Array<MoviesCreateWithoutActorInput>;

    @Field(() => [MoviesCreateOrConnectWithoutActorInput], {nullable:true})
    @Type(() => MoviesCreateOrConnectWithoutActorInput)
    connectOrCreate?: Array<MoviesCreateOrConnectWithoutActorInput>;

    @Field(() => [MoviesUpsertWithWhereUniqueWithoutActorInput], {nullable:true})
    @Type(() => MoviesUpsertWithWhereUniqueWithoutActorInput)
    upsert?: Array<MoviesUpsertWithWhereUniqueWithoutActorInput>;

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

    @Field(() => [MoviesUpdateWithWhereUniqueWithoutActorInput], {nullable:true})
    @Type(() => MoviesUpdateWithWhereUniqueWithoutActorInput)
    update?: Array<MoviesUpdateWithWhereUniqueWithoutActorInput>;

    @Field(() => [MoviesUpdateManyWithWhereWithoutActorInput], {nullable:true})
    @Type(() => MoviesUpdateManyWithWhereWithoutActorInput)
    updateMany?: Array<MoviesUpdateManyWithWhereWithoutActorInput>;

    @Field(() => [MoviesScalarWhereInput], {nullable:true})
    @Type(() => MoviesScalarWhereInput)
    deleteMany?: Array<MoviesScalarWhereInput>;
}
