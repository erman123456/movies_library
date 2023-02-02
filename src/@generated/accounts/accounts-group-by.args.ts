import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AccountsWhereInput } from './accounts-where.input';
import { Type } from 'class-transformer';
import { AccountsOrderByWithAggregationInput } from './accounts-order-by-with-aggregation.input';
import { AccountsScalarFieldEnum } from './accounts-scalar-field.enum';
import { AccountsScalarWhereWithAggregatesInput } from './accounts-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { AccountsCountAggregateInput } from './accounts-count-aggregate.input';
import { AccountsAvgAggregateInput } from './accounts-avg-aggregate.input';
import { AccountsSumAggregateInput } from './accounts-sum-aggregate.input';
import { AccountsMinAggregateInput } from './accounts-min-aggregate.input';
import { AccountsMaxAggregateInput } from './accounts-max-aggregate.input';

@ArgsType()
export class AccountsGroupByArgs {

    @Field(() => AccountsWhereInput, {nullable:true})
    @Type(() => AccountsWhereInput)
    where?: AccountsWhereInput;

    @Field(() => [AccountsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AccountsOrderByWithAggregationInput>;

    @Field(() => [AccountsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof AccountsScalarFieldEnum>;

    @Field(() => AccountsScalarWhereWithAggregatesInput, {nullable:true})
    having?: AccountsScalarWhereWithAggregatesInput;

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
