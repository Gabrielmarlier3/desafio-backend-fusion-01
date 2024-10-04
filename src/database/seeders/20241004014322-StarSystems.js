const { QueryInterface } = require('sequelize');

module.exports = {
  async up(queryInterface) {
    const starSystems = [
      {
        name: 'Andrômeda',
        description: 'A Galáxia de Andrômeda é a grande galáxia espiral mais próxima da Via Láctea, localizada a aproximadamente 2,537 milhões de anos-luz da Terra. É visível a olho nu em noites escuras e claras, e contém aproximadamente um trilhão de estrelas.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Sombrero',
        description: 'A Galáxia do Sombrero é famosa por seu núcleo brilhante e um grande bojo central cercado por um disco de poeira escuro que lhe confere a aparência de um chapéu mexicano visto de lado. Está localizada a cerca de 29 milhões de anos-luz da Terra.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Olho Negro',
        description: 'Também conhecida como M64, a Galáxia do Olho Negro é notável por sua banda escura de poeira que obscurece o núcleo, dando a impressão de um olho com um hematoma. É uma galáxia espiral situada a aproximadamente 17 milhões de anos-luz de distância.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert('StarSystems', starSystems, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('StarSystems', {
      name: ['Andrômeda', 'Sombrero', 'Olho Negro'],
    }, {});
  },
};