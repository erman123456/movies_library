import { CreateMovieInput } from './create-movie.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMovieInput extends PartialType(CreateMovieInput) {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  id: number;
  title: string;
  @Field()
  description: string;
  @Field(() => Int)
  actorId: number;
  @Field(() => Int)
  authorId: number;

  @Field({ defaultValue: new Date() })
  updatedAt: Date;
}
