import { CreateActorInput } from './create-actor.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, MaxLength } from '@nestjs/class-validator';

@InputType()
export class UpdateActorInput extends PartialType(CreateActorInput) {
  @Field(() => Int)
  id: number;

  @Field()
  @MaxLength(10)
  @IsNotEmpty()
  name: string;

  @Field()
  @MaxLength(10)
  @IsNotEmpty()
  gender: string;

  @Field(() => Int)
  age: number;

  @Field({ defaultValue: new Date() })
  updatedAt: Date;
}
