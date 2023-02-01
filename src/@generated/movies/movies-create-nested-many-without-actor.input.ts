import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoviesCreateWithoutActorInput } from './movies-create-without-actor.input';
import { Type } from 'class-transformer';
import { MoviesCreateOrConnectWithoutActorInput } from './movies-create-or-connect-without-actor.input';
import { MoviesWhereUniqueInput } from './movies-where-unique.input';

@InputType()
export class MoviesCreateNestedManyWithoutActorInput {

    @Field(() => [MoviesCreateWithoutActorInput], {nullable:true})
    @Type(() => MoviesCreateWithoutActorInput)
    create?: Array<MoviesCreateWithoutActorInput>;

    @Field(() => [MoviesCreateOrConnectWithoutActorInput], {nullable:true})
    @Type(() => MoviesCreateOrConnectWithoutActorInput)
    connectOrCreate?: Array<MoviesCreateOrConnectWithoutActorInput>;

    @Field(() => [MoviesWhereUniqueInput], {nullable:true})
    @Type(() => MoviesWhereUniqueInput)
    connect?: Array<MoviesWhereUniqueInput>;
}
