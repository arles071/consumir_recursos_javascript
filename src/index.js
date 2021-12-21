import "./styles.css";
/*
fetch("https://pokeapi.co/api/v2/pokemon")
  .then((res) => res.json())
  .then((data) => {
    console.log(data.results);
    data.results.forEach((element) => {
      console.log(element.name);
    });
  })
  .catch((error) => console.log(error));*/

//async y anwit
const obtenerPokemones = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await res.json();
    //const arrayPokemon = data.results.map(poke => poke.name)
    const arrayPokemon = data.results.filter(
      (poke) => poke.name !== "bulbasaur"
    );
    //const { name } = arrayPokemon[0];
    const li = arrayPokemon.map((item) => `<li>${item.name}</li>`);
    const app = document.getElementById("app");

    app.innerHTML = `<ul>${li}</ul>`;
    console.log(li);
  } catch (error) {
    //console.log(error);
  }
};
obtenerPokemones();
