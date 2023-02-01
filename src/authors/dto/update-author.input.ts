import { CreateAuthorInput } from './create-author.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, MaxLength } from "@nestjs/class-validator";

@InputType()
export class UpdateAuthorInput extends PartialType(CreateAuthorInput) {
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
