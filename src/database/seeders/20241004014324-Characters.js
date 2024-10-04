'use strict';

const faker = require('@faker-js/faker').faker;

module.exports = {
  async up(queryInterface, Sequelize) {
    const { Op } = Sequelize;

    const planetNames = [
      'Zenith', 'Aquila', 'Nimbus',
      'Echo', 'Lunaire', 'Thalos',
      'Umbra', 'Pyros', 'Zephyr',
    ];

    // Fetch the IDs of the planets
    const planets = await queryInterface.sequelize.query(
        `SELECT id, name FROM "Planets" WHERE name IN (:names);`,
        {
          replacements: { names: planetNames },
          type: queryInterface.sequelize.QueryTypes.SELECT,
        }
    );

    if (planets.length !== planetNames.length) {
      throw new Error('Nem todos os planetas foram encontrados no banco de dados.');
    }


    const races = ['Humano', 'Twilek', 'Wookiee', 'Rodiano', 'Zabrak', 'Droid'];
    const affiliations = ['Jedi', 'Sith', 'Rebelde', 'Império Galáctico', 'Caçador de Recompensas', 'Contrabandista'];

    // Gerar personagens aleatórios
    const characters = [];
    const characterNames = [];

    for (let i = 0; i < 15; i++) {
      const randomPlanet = planets[Math.floor(Math.random() * planets.length)];
      const randomRace = races[Math.floor(Math.random() * races.length)];
      const randomAffiliation = affiliations[Math.floor(Math.random() * affiliations.length)];

      const firstName = faker.name.firstName();
      const lastName = faker.name.lastName();
      const name = `${firstName} ${lastName}`;

      characters.push({
        name: name,
        race: randomRace,
        affiliation: randomAffiliation,
        homeworldId: randomPlanet.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      characterNames.push(name);
    }

    await queryInterface.bulkInsert('Characters', characters, {});

    this.characterNames = characterNames;
  },

  async down(queryInterface, Sequelize) {
    const { Op } = Sequelize;

    // Remover os personagens inseridos usando os nomes armazenados
    await queryInterface.bulkDelete('Characters', {
      name: { [Op.in]: this.characterNames },
    }, {});
  },
};
