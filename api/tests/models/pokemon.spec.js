const { Pokemon, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Pokemon model', () => {

  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));

  describe('Validators', () => {
    beforeEach(() => Pokemon.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Pokemon.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Pokemon.create({ Nombre: 'Pikachu' });
      });
    });
    describe("Stats", () => {

         it("Arroja un error si vida no es numero", (done) => {
         Pokemon.create({ Nombre: "Pikachu", Vida: "asd" })
         .then(() => done(new Error("Vida no es un numero")))
         .catch(() => done());
    });

    });

    it("Arroja un error si peso no es numero", (done) => {
      Pokemon.create({ name: "Pikachu", Peso: "asd" })
        .then(() => done(new Error("Peso no es un numero")))
        .catch(() => done());
    });


  });

   


});
