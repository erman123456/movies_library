import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AccountsWhereInput } from './accounts-where.input';
import { Type } from 'class-transformer';
import { AccountsOrderByWithRelationInput } from './accounts-order-by-with-relation.input';
import { AccountsWhereUniqueInput } from './accounts-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AccountsCountAggregateInput } from './accounts-count-aggregate.input';
import { AccountsAvgAggregateInput } from './accounts-avg-aggregate.input';
import { AccountsSumAggregateInput } from './accounts-sum-aggregate.input';
import { AccountsMinAggregateInput } from './accounts-min-aggregate.input';
import { AccountsMaxAggregateInput } from './accounts-max-aggregate.input';

@ArgsType()
export class AccountsAggregateArgs {

    @Field(() => AccountsWhereInput, {nullable:true})
    @Type(() => AccountsWhereInput)
    where?: AccountsWhereInput;

    @Field(() => [AccountsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AccountsOrderByWithRelationInput>;

    @Field(() => AccountsWhereUniqueInput, {nullable:true})
    cursor?: AccountsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AccountsCountAggregateInput, {nullable:true})
    _count?: AccountsCountAggregateInput;

    @Field(() => AccountsAvgAggregateInput, {nullable:true})
    _avg?: AccountsAvgAggregateInput;

    @Field(() => AccountsSumAggregateInput, {nullable:true})
    _sum?: AccountsSumAggregateInput;

    @Field(() => AccountsMinAggregateInput, {nullable:true})
    _min?: AccountsMinAggregateInput;

    @Field(() => AccountsMaxAggregateInput, {nullable:true})
    _max?: AccountsMaxAggregateInput;
}
