import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Actor {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  id: number;
  @Field()
  createdAt: Date;
  @Field()
  updatedAt: Date;
  @Field()
  name: string;
  @Field()
  gender: string;
  @Field(() => Int)
  age: number;
}
