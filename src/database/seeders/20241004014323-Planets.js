'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Nomes das galáxias para as quais queremos adicionar planetas
    const galaxyNames = ['Andrômeda', 'Sombrero', 'Olho Negro'];

    // Buscar os IDs das galáxias correspondentes aos nomes fornecidos
    const starSystems = await queryInterface.sequelize.query(
        `SELECT id, name FROM "StarSystems" WHERE name IN (:names);`,
        {
          replacements: { names: galaxyNames },
          type: queryInterface.sequelize.QueryTypes.SELECT,
        }
    );

    // Verificar se todas as galáxias foram encontradas
    if (starSystems.length !== galaxyNames.length) {
      throw new Error('Nem todas as galáxias foram encontradas no banco de dados.');
    }

    // Construir o array de planetas a serem inseridos
    const planets = [];

    starSystems.forEach((starSystem) => {
      const starSystemId = starSystem.id;
      const galaxyName = starSystem.name;

      // Definir planetas e descrições específicas para cada galáxia
      let planetData = [];

      if (galaxyName === 'Andrômeda') {
        planetData = [
          {
            name: 'Zenith',
            description: 'Zenith é um planeta exuberante coberto por florestas fluorescentes e criaturas bioluminescentes. Suas noites são iluminadas por plantas que brilham, criando um espetáculo de cores.',
          },
          {
            name: 'Aquila',
            description: 'Aquila é conhecido por suas montanhas flutuantes e cachoeiras que caem no vazio. A gravidade peculiar do planeta permite paisagens que desafiam a lógica.',
          },
          {
            name: 'Nimbus',
            description: 'Nimbus é um planeta gasoso com tempestades eternas. Suas nuvens tempestuosas são ricas em minerais preciosos suspensos na atmosfera.',
          },
        ];
      } else if (galaxyName === 'Sombrero') {
        planetData = [
          {
            name: 'Echo',
            description: 'Echo é um planeta desértico com ruínas de uma antiga civilização. Suas cavernas ecoam sons misteriosos que intrigam exploradores.',
          },
          {
            name: 'Lunaire',
            description: 'Lunaire possui um terreno coberto por cristais que refletem a luz das estrelas, fazendo o planeta brilhar no escuro do espaço.',
          },
          {
            name: 'Thalos',
            description: 'Thalos é um planeta aquático com oceanos profundos e criaturas marinhas gigantescas. Suas águas abrigam cidades submersas feitas de coral.',
          },
        ];
      } else if (galaxyName === 'Olho Negro') {
        planetData = [
          {
            name: 'Umbra',
            description: 'Umbra é perpetuamente envolto em sombras devido à sua órbita única. As formas de vida evoluíram sem luz, resultando em ecossistemas fascinantes.',
          },
          {
            name: 'Pyros',
            description: 'Pyros é um planeta vulcânico com atividade geotérmica intensa. Seus rios de lava criam paisagens deslumbrantes e perigosas.',
          },
          {
            name: 'Zephyr',
            description: 'Zephyr é conhecido por seus ventos constantes que esculpiram formações rochosas impressionantes. É um destino para aventureiros e amantes de esportes aéreos.',
          },
        ];
      }

      // Adicionar cada planeta ao array principal
      planetData.forEach((planet) => {
        planets.push({
          name: planet.name,
          description: planet.description,
          starSystemId: starSystemId,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      });
    });

    // Inserir os planetas na tabela 'Planets'
    await queryInterface.bulkInsert('Planets', planets, {});
  },

  async down(queryInterface, Sequelize) {
    // Nomes dos planetas para serem removidos
    const planetNames = [
      'Zenith', 'Aquila', 'Nimbus',
      'Echo', 'Lunaire', 'Thalos',
      'Umbra', 'Pyros', 'Zephyr',
    ];

    // Deletar os planetas que correspondem aos nomes fornecidos
    await queryInterface.bulkDelete(
        'Planets',
        {
          name: { [Sequelize.Op.in]: planetNames },
        },
        {}
    );
  },
};
