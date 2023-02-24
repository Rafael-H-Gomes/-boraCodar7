// const lista = document.querySelector('.lista')

// const blocks = [
//   {
//     name: "block 1",
//     city: "São Paulo",
//     uf: "SP"
//   },
//   {
//     name: "block 2",
//     city: "Rio de Janeiro",
//     uf: "RJ"
//   }
// ]

// for(let block of blocks){
//   lista.innerHTML += `<li>nome: ${block.name}, cidade: ${block.city}, estado: ${block.uf}</li>`  
// }

const cards = document.querySelector('.cards')

const blocks = [
  {
    name: 'O Python do vovô não sobe mais',
    city: 'São Paulo',
    uf: 'SP',
    image: '../public/assets/image01.jpg',
  },
  {
    name: 'Todo mundo null',
    city: 'Florianópolis',
    uf: 'SC',
    image: '../public/assets/image02.jpg',
  },
  {
    name: 'Hoje dou exception',
    city: 'Curitiba',
    uf: 'PR',
    image: '../public/assets/image03.jpg',
  },
  {
    name: 'Manda Node',
    city: 'Salvador',
    uf: 'BA',
    image: '../public/assets/image04.jpg',
  },
  {
    name: 'Só no back-end',
    city: 'São Paulo',
    uf: 'SP',
    image: '../public/assets/image05.png',
  },
  {
    name: 'Esse anel não é de Ruby',
    city: 'São Paulo',
    uf: 'SP',
    image: '../public/assets/image06.jpg',
  },
  {
    name: 'Pimenta no C# dos outros é refresco',
    city: 'Rio de Janeiro',
    uf: 'RJ',
    image: '../public/assets/image07.jpg',
  },
  {
    name: 'EnCACHE aqui',
    city: 'Porto Alegre',
    uf: 'RS',
    image: '../public/assets/image08.jpg',
  },
  {
    name: 'Não valho nada mas JAVA li',
    city: 'São Paulo',
    uf: 'SP',
    image: '../public/assets/image09.jpg',
  }
]

for(let block of blocks) {
  cards.innerHTML += `
    <div class="card">
      <img src="${block.image}" alt="" />

      <div class="content">
        <h3>${block.name}</h3>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do
          amet sint.
        </p>

        <div class="location">
          <img src="../public/assets/arrowDown.svg" alt="">
          ${block.city} - ${block.uf}
        </div>
      </div>
    </div>
  `
}