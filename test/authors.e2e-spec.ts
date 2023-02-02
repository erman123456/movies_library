import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request = require('supertest');
import { AppModule } from '../src/app.module';

describe('Authors (e2e)', () => {
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

  describe('Authors', () => {
    it('Get authors', () => {
      return request(app.getHttpServer())
        .post(gql)
        .send({
          query:
            '{\n' +
            '  authors {\n' +
            '    name,\n' +
            '    id\n' +
            '  }\n' +
            '}',
        })
        .expect(200)
        .expect((res) => {
          if (res.body.errors) {
            expect(res.body.errors[0].message).toEqual('Unauthorized');
          }
        });
    });
    it('Create a new author', () => {
      return request(app.getHttpServer())
        .post(gql)
        .send({
          query:
            'mutation {\n' +
            ' createAuthor(createAuthorInput: {\n' +
            '    name: "Erman",\n' +
            '    gender: "Male",\n' +
            '    age: 26,\n' +
            '}){\n' +
            '    name\n' +
            '  }\n' +
            '}',
        })
        .expect(200)
        .expect((res) => {
          if (res.body.errors) {
            expect(res.body.errors[0].message).toEqual('Unauthorized');
          } else {
            expect(res.body.data.name).toEqual('Erman');
          }
        });
    });
    it('Update a author', () => {
      return request(app.getHttpServer())
        .post(gql)
        .send({
          query:
            'mutation {\n' +
            ' updateAuthor(updateAuthorInput: {\n' +
            '    id: ' +
            1 +
            ',\n' +
            '    name: "Erman1",\n' +
            '    gender: "Female",\n' +
            '    age: 26,\n' +
            '}){\n' +
            '    name\n' +
            '  }\n' +
            '}',
        })
        .expect(200)
        .expect((res) => {
          if (res.body.errors) {
            expect(res.body.errors[0].message).toEqual('Unauthorized');
          } else {
            expect(res.body.data.name).toEqual('Erman1');
          }
        });
    });
    it('Delete a author', () => {
      return request(app.getHttpServer())
        .post(gql)
        .send({
          query:
            'mutation {\n' +
            ' removeActor(id: 1){\n' +
            '    id,\n' +
            '    name\n' +
            '  }\n' +
            '}',
        })
        .expect(200)
        .expect((res) => {
          if (res.body.errors) {
            expect(res.body.errors[0].message).toEqual('Unauthorized');
          }
        });
    });
  });
});
