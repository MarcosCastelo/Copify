export function loadLists() {
    return [
      { 
        title: 'Tarefas', 
        creatable: true,
        cards: [
          {
            id: 1,
            content: 'Estudar módulo 01 de NodeJS',
            labels: ['#7159c1'],
            user: 'https://api.adorable.io/avatars/285/face.png'
          },
          {
            id: 2,
            content: 'Criar README explicando como a aplicação funciona',
            labels: ['#D40000'],
            user: 'https://api.adorable.io/avatars/285/face.png'
          },
          {
            id: 3,
            content: 'Recriar a interface do Pipefy',
            labels: ['#7159c1'],
            user: 'https://api.adorable.io/avatars/285/face.png'
          },
          {
            id: 4,
            content: 'Estudar mais sobre o ReactJS e Javascript através de videoaulas',
            labels: ['#54e1f7'],
            user: 'https://api.adorable.io/avatars/285/head.png'
          },
          {
            id: 5,
            content: 'Gravar testes e deploy ReactJS',
            labels: ['#54e1f7'],
            user: 'https://api.adorable.io/avatars/285/head.png'
          },
        ]
      },
      { 
        title: 'Fazendo', 
        creatable: false,
        cards: [
          {
            id: 6,
            content: 'Recriando clone do Twitter',
            labels: [],
            user: 'https://api.adorable.io/avatars/285/happy.png'
          }
        ]
      },
      { 
        title: 'Pausado', 
        creatable: false,
        cards: [
          {
            id: 7,
            content: 'Gravar sobre Geolocalização e mapas com React Native',
            labels: ['#7159c1'],
            user: 'https://api.adorable.io/avatars/285/happy.png'
          },
          {
            id: 8,
            content: 'Gravar testes e deploy ReactJS',
            labels: ['#54e1f7'],
            user: 'https://api.adorable.io/avatars/285/happy.png'
          },
          {
            id: 9,
            content: 'Ajustes na biblioteca unform',
            labels: [],
          }
        ]
      },
      { 
        title: 'Concluído', 
        creatable: false,
        done: true,
        cards: [
          {
            id: 10,
            content: 'Estudar sobre deploy e CI com React Native',
            labels: [],
          },
          {
            id: 12,
            content: 'Estudar testes e deploy ReactJS',
            labels: ['#54e1f7'],
          },
          {
            id: 13,
            content: 'Estudar "Internacionalização de aplicações Node.js, ReactJS e React Native"',
            labels: ['#7159c1'],
          }
        ]
      },
    ];
  }