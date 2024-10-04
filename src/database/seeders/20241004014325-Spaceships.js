'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const spaceships = [
      {
        name: 'Millennium Falcon',
        model: 'YT-1300f light freighter',
        manufacturer: 'Corellian Engineering Corporation',
        passengerCapacity: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'X-Wing',
        model: 'T-65B X-wing starfighter',
        manufacturer: 'Incom Corporation',
        passengerCapacity: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'TIE Fighter',
        model: 'Twin Ion Engine/Ln Starfighter',
        manufacturer: 'Sienar Fleet Systems',
        passengerCapacity: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Star Destroyer',
        model: 'Imperial I-class Star Destroyer',
        manufacturer: 'Kuat Drive Yards',
        passengerCapacity: 47060,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Slave I',
        model: 'Firespray-31-class patrol and attack craft',
        manufacturer: 'Kuat Systems Engineering',
        passengerCapacity: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    // Inserir as espaçonaves na tabela 'Spaceships'
    await queryInterface.bulkInsert('Spaceships', spaceships, {});
  },

  async down(queryInterface, Sequelize) {
    // Nomes das espaçonaves a serem removidas
    const spaceshipNames = [
      'Millennium Falcon',
      'X-Wing',
      'TIE Fighter',
      'Star Destroyer',
      'Slave I',
    ];

    // Remover as espaçonaves com base nos nomes
    await queryInterface.bulkDelete(
        'Spaceships',
        {
          name: { [Sequelize.Op.in]: spaceshipNames },
        },
        {}
    );
  },
};
