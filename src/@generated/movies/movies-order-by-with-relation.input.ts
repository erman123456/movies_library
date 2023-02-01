import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ActorsOrderByWithRelationInput } from '../actors/actors-order-by-with-relation.input';
import { AuthorsOrderByWithRelationInput } from '../authors/authors-order-by-with-relation.input';

@InputType()
export class MoviesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    actorId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    authorId?: keyof typeof SortOrder;

    @Field(() => ActorsOrderByWithRelationInput, {nullable:true})
    actor?: ActorsOrderByWithRelationInput;

    @Field(() => AuthorsOrderByWithRelationInput, {nullable:true})
    author?: AuthorsOrderByWithRelationInput;
}
