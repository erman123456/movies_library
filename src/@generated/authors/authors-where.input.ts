import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { MoviesListRelationFilter } from '../movies/movies-list-relation-filter.input';

@InputType()
export class AuthorsWhereInput {

    @Field(() => [AuthorsWhereInput], {nullable:true})
    AND?: Array<AuthorsWhereInput>;

    @Field(() => [AuthorsWhereInput], {nullable:true})
    OR?: Array<AuthorsWhereInput>;

    @Field(() => [AuthorsWhereInput], {nullable:true})
    NOT?: Array<AuthorsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    gender?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    age?: IntFilter;

    @Field(() => MoviesListRelationFilter, {nullable:true})
    Movies?: MoviesListRelationFilter;
}
