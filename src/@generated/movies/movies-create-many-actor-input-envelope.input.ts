import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoviesCreateManyActorInput } from './movies-create-many-actor.input';
import { Type } from 'class-transformer';

@InputType()
export class MoviesCreateManyActorInputEnvelope {

    @Field(() => [MoviesCreateManyActorInput], {nullable:false})
    @Type(() => MoviesCreateManyActorInput)
    data!: Array<MoviesCreateManyActorInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
