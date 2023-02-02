// /test/customer.e2e-spec.ts

import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request = require('supertest');
import { AppModule } from '../src/app.module';

describe('Account (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  const gql = '/graphql';

  describe('signUp', () => {
    it('should create a new account', () => {
      return request(app.getHttpServer())
        .post(gql)
        .send({
          query:
            'mutation{\n' +
            '  signUp(signUpInput:{\n' +
            '    email: "erman@gmail.com",\n' +
            '    password: "12345"\n' +
            '  }){\n' +
            '    access_token\n' +
            '  }\n' +
            '}',
        })
        .expect(200)
        .expect((res) => {
          expect(res.body.data.createCustomer).toEqual({
            email: 'erman@gmail.com',
            password: '12345',
          });
        });
    });
  });
});
