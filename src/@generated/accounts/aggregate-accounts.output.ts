import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AccountsCountAggregate } from './accounts-count-aggregate.output';
import { AccountsAvgAggregate } from './accounts-avg-aggregate.output';
import { AccountsSumAggregate } from './accounts-sum-aggregate.output';
import { AccountsMinAggregate } from './accounts-min-aggregate.output';
import { AccountsMaxAggregate } from './accounts-max-aggregate.output';

@ObjectType()
export class AggregateAccounts {

    @Field(() => AccountsCountAggregate, {nullable:true})
    _count?: AccountsCountAggregate;

    @Field(() => AccountsAvgAggregate, {nullable:true})
    _avg?: AccountsAvgAggregate;

    @Field(() => AccountsSumAggregate, {nullable:true})
    _sum?: AccountsSumAggregate;

    @Field(() => AccountsMinAggregate, {nullable:true})
    _min?: AccountsMinAggregate;

    @Field(() => AccountsMaxAggregate, {nullable:true})
    _max?: AccountsMaxAggregate;
}
