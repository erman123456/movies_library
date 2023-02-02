
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
    it('Create a new account', () => {
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
          if (res.body.errors) {
            expect(res.body.errors[0].message).toEqual(
              'Email has been register',
            );
          }
        });
    });
  });

  describe('signIn', () => {
    it('Authorization', () => {
      return request(app.getHttpServer())
        .post(gql)
        .send({
          query:
            'mutation{\n' +
            '  signIn(signInInput:{\n' +
            '    email: "erman@gmail.com",\n' +
            '    password: "12345"\n' +
            '  }){\n' +
            '    access_token\n' +
            '  }\n' +
            '}',
        })
        .expect(200)
        .expect((res) => {
          console.log(res.body.errors);
          if (res.body.errors) {
            expect(res.body.errors[0].message).toEqual('Credentials incorrect');
          }
        });
    });
  });
});
