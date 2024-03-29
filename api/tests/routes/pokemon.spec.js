/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Pokemon, conn } = require('../../src/db.js');

const agent = session(app);

const pokemon = {
  name: 'Pikachu',
};

describe('Pokemon routes', () => {

  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));

  beforeEach(() => Pokemon.sync({ force: true })
    .then(() => Pokemon.create(pokemon)));

  describe('GET /pokemons', () => {

  describe("GET /pokemons/:id", () => {
  it("Se espera una respuesta 200 si se envia un id", () =>
      agent.get("/pokemons/10").expect(200));
  });

  describe("GET /pokemons?name=xxx", () => {
    it("Si se recibe name devolver 200", () =>
      agent.get("/pokemons?name=pikachu").expect(200));
  });

  describe("GET /pokemons", () => {

     it('"Se espera una respuesta 200 con la lista de pokemones', () =>
      agent.get('/pokemons').expect(200)
    );
  });
   


  });


});
