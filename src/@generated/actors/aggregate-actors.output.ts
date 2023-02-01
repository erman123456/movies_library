import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ActorsCountAggregate } from './actors-count-aggregate.output';
import { ActorsAvgAggregate } from './actors-avg-aggregate.output';
import { ActorsSumAggregate } from './actors-sum-aggregate.output';
import { ActorsMinAggregate } from './actors-min-aggregate.output';
import { ActorsMaxAggregate } from './actors-max-aggregate.output';

@ObjectType()
export class AggregateActors {

    @Field(() => ActorsCountAggregate, {nullable:true})
    _count?: ActorsCountAggregate;

    @Field(() => ActorsAvgAggregate, {nullable:true})
    _avg?: ActorsAvgAggregate;

    @Field(() => ActorsSumAggregate, {nullable:true})
    _sum?: ActorsSumAggregate;

    @Field(() => ActorsMinAggregate, {nullable:true})
    _min?: ActorsMinAggregate;

    @Field(() => ActorsMaxAggregate, {nullable:true})
    _max?: ActorsMaxAggregate;
}
