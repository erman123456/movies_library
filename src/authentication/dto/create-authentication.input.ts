import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAuthenticationInput {
  @Field(() => String, { description: 'email of the user', nullable: false })
  email: string;
  @Field(() => String, { description: 'password of the user' })
  password: string;
}
