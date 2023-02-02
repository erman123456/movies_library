import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Authentication {
  @Field(() => String, { description: 'email of the user' })
  email: string;
  @Field(() => String, { description: 'password of the user' })
  password: string;
  @Field(() => String, { description: 'access token of the user' })
  access_token: string;
}
