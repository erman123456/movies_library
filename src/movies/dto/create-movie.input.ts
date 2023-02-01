import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMovieInput {
  @Field()
  title: string;
  @Field()
  description: string;
  @Field(() => Int)
  actorId: number;
  @Field(() => Int)
  authorId: number;
}
