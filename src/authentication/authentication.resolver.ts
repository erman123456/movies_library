import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AuthenticationService } from './authentication.service';
import { Authentication } from './entities/authentication.entity';
import { CreateAuthenticationInput } from './dto/create-authentication.input';
import { UpdateAuthenticationInput } from './dto/update-authentication.input';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from './auth.gaurd';

@Resolver(() => Authentication)
export class AuthenticationResolver {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Mutation(() => Authentication)
  signUp(
    @Args('signUpInput')
    signUpInput: CreateAuthenticationInput,
  ) {
    return this.authenticationService.signIn(signUpInput);
  }

  @Mutation(() => Authentication)
  signIn(
    @Args('signInInput')
    signInInput: CreateAuthenticationInput,
  ) {
    return this.authenticationService.signUp(signInInput);
  }

  @UseGuards(AuthGuard)
  @Query(() => [Authentication], { name: 'account' })
  findAll() {
    return this.authenticationService.findAll();
  }

  @UseGuards(AuthGuard)
  @Query(() => Authentication, { name: 'authentication' })
  findOne(@Args('email', { type: () => String }) email: string) {
    return this.authenticationService.findOne(email);
  }

  @UseGuards(AuthGuard)
  @Mutation(() => Authentication)
  updateAuthentication(
    @Args('updateAuthenticationInput')
    updateAuthenticationInput: UpdateAuthenticationInput,
  ) {
    return this.authenticationService.update(
      updateAuthenticationInput.id,
      updateAuthenticationInput,
    );
  }

  @UseGuards(AuthGuard)
  @Mutation(() => Authentication)
  removeAuthentication(@Args('id', { type: () => Int }) id: number) {
    return this.authenticationService.remove(id);
  }
}
