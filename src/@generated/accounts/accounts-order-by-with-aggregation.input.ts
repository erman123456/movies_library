import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AccountsCountOrderByAggregateInput } from './accounts-count-order-by-aggregate.input';
import { AccountsAvgOrderByAggregateInput } from './accounts-avg-order-by-aggregate.input';
import { AccountsMaxOrderByAggregateInput } from './accounts-max-order-by-aggregate.input';
import { AccountsMinOrderByAggregateInput } from './accounts-min-order-by-aggregate.input';
import { AccountsSumOrderByAggregateInput } from './accounts-sum-order-by-aggregate.input';

@InputType()
export class AccountsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @Field(() => AccountsCountOrderByAggregateInput, {nullable:true})
    _count?: AccountsCountOrderByAggregateInput;

    @Field(() => AccountsAvgOrderByAggregateInput, {nullable:true})
    _avg?: AccountsAvgOrderByAggregateInput;

    @Field(() => AccountsMaxOrderByAggregateInput, {nullable:true})
    _max?: AccountsMaxOrderByAggregateInput;

    @Field(() => AccountsMinOrderByAggregateInput, {nullable:true})
    _min?: AccountsMinOrderByAggregateInput;

    @Field(() => AccountsSumOrderByAggregateInput, {nullable:true})
    _sum?: AccountsSumOrderByAggregateInput;
}
