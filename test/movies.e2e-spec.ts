import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request = require('supertest');
import { AppModule } from '../src/app.module';

describe('Movies (e2e)', () => {
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

  describe('Movies', () => {
    it('Get movies', () => {
      return request(app.getHttpServer())
        .post(gql)
        .send({
          query:
            '{\n' +
            '  movies {\n' +
            '    id\n' +
            '    title,\n' +
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
    it('Create a new movie', () => {
      return request(app.getHttpServer())
        .post(gql)
        .send({
          query:
            'mutation{\n' +
            '  createMovie(createMovieInput: {\n' +
            '    title: "Avatar",\n' +
            '    description: "Set more than a decade after the events of the first film, “Avatar: The Way of Water” begins to tell the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",\n' +
            '    actorId: 1,\n' +
            '    authorId: 1\n' +
            '  }){\n' +
            '  title\n' +
            '  }\n' +
            '}',
        })
        .expect(200)
        .expect((res) => {
          if (res.body.errors) {
            expect(res.body.errors[0].message).toEqual('Unauthorized');
          } else {
            expect(res.body.data.title).toEqual('Avatar');
          }
        });
    });
    it('Update a movie', () => {
      return request(app.getHttpServer())
        .post(gql)
        .send({
          query:
            'mutation{\n' +
            '  updateMovie(updateMovieInput: {\n' +
            '    id: ' +
            1 +
            ',\n' +
            '    title: "Avatar1",\n' +
            '    description: "Set more than a decade after the events of the first film, “Avatar: The Way of Water” begins to tell the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",\n' +
            '    actorId: 1,\n' +
            '    authorId: 1\n' +
            '  }){\n' +
            '  title\n' +
            '  }\n' +
            '}',
        })
        .expect(200)
        .expect((res) => {
          if (res.body.errors) {
            expect(res.body.errors[0].message).toEqual('Unauthorized');
          } else {
            expect(res.body.data.title).toEqual('Avatar1');
          }
        });
    });
    it('Delete a movie', () => {
      return request(app.getHttpServer())
        .post(gql)
        .send({
          query:
            'mutation {\n' +
            ' removeMovie(id: 1){\n' +
            '    id,\n' +
            '    title\n' +
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
