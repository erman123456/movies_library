import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Movie {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  id: number;
  @Field()
  createdAt: Date;
  @Field()
  updatedAt: Date;
  @Field()
  title: string;
  @Field()
  description: string;
  @Field(() => Int)
  actorId: number;
  @Field(() => Int)
  authorId: number;
}
