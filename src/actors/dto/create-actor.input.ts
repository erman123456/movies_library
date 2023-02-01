import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, MaxLength, MinLength } from '@nestjs/class-validator';

@InputType()
export class CreateActorInput {
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
}
