// const fetchPokemon = () => {
//
//   const promises = []
//   for(let poke = 1; poke <= 750; poke++) {
//       const url = `https://fizal.me/pokeapi/api/v2/id/${poke}.json`
//       promises.push(fetch(url).then((res) => res.json()))
//
//           .then(res => {
//             return res.json()
//     })
//
//       Promise.all(promises).then(results => {
//         const pokemon = results.map(result => {
//           name: data.name,
//           id: data.id,
//           image: data.sprites['front_default'],
//           type: data.types.map((type) => type.type.name).join(', ')
//         })
//       })
//       .then ((data) => {
//         console.log(data)
//
//         const pokemon = {
//           name: data.name,
//           id: data.id,
//           image: data.sprites['front_default'],
//           type: data.types.map((type) => type.type.name).join(', ')
//         }
//         })
//         console.log(pokemon)
//       })
// }
//
// const displayPokemon = (pokemon) => {
//   console.log(pokemon)
//   const html =
// }
//
// fetchPokemon()

// let list = document.getElementById('poke-list')
// id = prompt("Enter a pokemon's number")
//
// query = () => {
//   fetch(`https://fizal.me/pokeapi/api/v2/id/${id}.json`)
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data)
//
//     for (let i in data) {
//       let li = document.createElement('li')
//       li.innerText = `${id} ${data[i]['hp']} ${data[i]['']}`
//       list.appendChild(li)
//       }
//     })
//   }

// ------- second try; OLDER logic -------


// let list = document.getElementById('poke-list')
//
// id = prompt("Enter a pokemon's number")
//
// let li = document.createElement('li')
//
// li.innerText = `${id} ${data[i]['hp']} ${data[i]['stats[5].basestat.']}`
//
// list.appendChild(li)
//
//
// query = () => {
//   fetch(`https://fizal.me/pokeapi/api/v2/id/${id}.json`)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data)
//     })
// }

// ----------------------- END ---------------------------------

// ------------ michael quick js -----------


// class pokemon {
  //   constructor(abilities = []) {
    //
    //   }
    //
    //   addMoves(array) {
      //     if (array.length == 0) return 'no moes in array!'
      //     this.abilities = [...array]
      //   }
      //
      // let pokemon = new pokemon()


      /// -------- end -----------------------

let pokeArray = []



pokeAPI = async function pokeQuery() {

  let num = prompt("Insert A Pokémon’s Number")
  let req = await fetch(`https://fizal.me/pokeapi/api/v2/id/${num}.json`)
  let data = await req.json()

    pokemon = {

      name: data.name,
      pic: data.sprites.front_shiny,
      stats: {
          hp: data.stats[5].base_stat,
          atk: data.stats[4].base_stat,
          def: data.stats[3].base_stat
        },

      abl: data.abilities,

   }


  let makePoke =  () => {
    let create = document.createElement("div")
    document.body.appendChild(create)
    create.innerHTML= `<img src = "${pokemon.pic}" width="100px" height="100px">
     <p> <h3>${pokemon.name}</h3> <br>
     ${pokemon.stats.hp} Hp<br>
     ${pokemon.stats.def} Def <br>
     ${pokemon.stats.atk} Atk <br>`
     create.classname="generator"

  }
  console.log(data)
  pokeArray.push(pokemon)
  makePoke(num)
}




//
// class Pokemon {
//   constructor(num) {
//     pokemon = {
//      this.name= data.name,
//      this.pic= data.sprites.front_shiny,
//      this.stats= {
//          hp: data.stats[5].base_stat,
//          atk: data.stats[4].base_stat,
//          def: data.stats[3].base_stat
//        },

// let pokemon = new Pokemon(100);
