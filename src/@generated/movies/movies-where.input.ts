import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { ActorsRelationFilter } from '../actors/actors-relation-filter.input';
import { AuthorsRelationFilter } from '../authors/authors-relation-filter.input';

@InputType()
export class MoviesWhereInput {

    @Field(() => [MoviesWhereInput], {nullable:true})
    AND?: Array<MoviesWhereInput>;

    @Field(() => [MoviesWhereInput], {nullable:true})
    OR?: Array<MoviesWhereInput>;

    @Field(() => [MoviesWhereInput], {nullable:true})
    NOT?: Array<MoviesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    actorId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    authorId?: IntNullableFilter;

    @Field(() => ActorsRelationFilter, {nullable:true})
    actor?: ActorsRelationFilter;

    @Field(() => AuthorsRelationFilter, {nullable:true})
    author?: AuthorsRelationFilter;
}
