import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateAuthenticationInput } from './dto/create-authentication.input';
import { UpdateAuthenticationInput } from './dto/update-authentication.input';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../config/prisma/prisma.service';

import * as jwt from 'jsonwebtoken';
import * as argon from 'argon2';

@Injectable()
export class AuthenticationService {
  constructor(
    private config: ConfigService,

    private prismaService: PrismaService,
  ) {}

  async signIn(createAuthenticationInput: CreateAuthenticationInput) {
    // find the user by email
    const user = await this.prismaService.accounts.findUnique({
      where: {
        email: createAuthenticationInput.email,
      },
    });
    // if user does not exist throw exception
    if (!user) throw new ForbiddenException('Credentials incorrect');
    //compare password
    const pwMatches = await argon.verify(
      user.password,
      createAuthenticationInput.password,
    );
    //if password incorrect throw exception
    if (!pwMatches) throw new ForbiddenException('Credentials incorrect');
    // send back the user
    return this.signToken(user);
  }

  async signUp(createAuthenticationInput: CreateAuthenticationInput) {
    // find the user by email
    const user = await this.prismaService.accounts.findUnique({
      where: {
        email: createAuthenticationInput.email,
      },
    });
    // if user does not exist throw exception
    if (user) throw new ForbiddenException('Email has been register');
    //compare password
    const hash = await argon.hash(createAuthenticationInput.password);
    await this.prismaService.accounts.create({
      data: {
        email: createAuthenticationInput.email,
        password: hash,
      },
    });

    return this.signToken(createAuthenticationInput);
  }

  findAll() {
    return this.prismaService.accounts.findMany();
  }

  findOne(email: string) {
    return this.prismaService.accounts.findFirst({
      where: {
        email: email,
      },
    });
  }

  update(id: number, updateAuthenticationInput: UpdateAuthenticationInput) {
    return this.prismaService.accounts.update({
      where: {
        id: id,
      },
      data: {
        ...updateAuthenticationInput,
      },
    });
  }

  remove(id: number) {
    return this.prismaService.accounts.delete({
      where: {
        id: id,
      },
    });
  }

  async signToken(
    createAuthenticationInput: CreateAuthenticationInput,
  ): Promise<{ access_token: string }> {
    const { email } = createAuthenticationInput;
    const payload = {
      email,
    };
    const token: string = jwt.sign(payload, process.env.JWT_SECRET);
    return {
      access_token: token,
    };
  }
}
