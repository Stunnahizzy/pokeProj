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


  let list = document.getElementById('poke-list')

  id = prompt("Enter a pokemon's number")

  let li = document.createElement('li')

  li.innerText = `${id} ${data[i]['hp']} ${data[i]['stats[5].basestat.']}`

  list.appendChild(li)


  query = () => {
    fetch(`https://fizal.me/pokeapi/api/v2/id/${id}.json`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
    })
  }
