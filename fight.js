let playerPokemon_json = Cookies.get(`playerSelection`);
let playerPokemon = JSON.parse(playerPokemon_json);

let foePokemon_json = Cookies.get(`foeSelection`);
let foePokemon = JSON.parse(foePokemon_json);

let battleGrounds = document.getElementById(`battleGrounds`)
battleGrounds.insertAdjacentHTML(`afterbegin`,

`<div>
<h3>${playerPokemon[`name`]}</h3>
<img src="${playerPokemon[`image_url`]}"
<button>${playerPokemon[`attack`]}
</div>`

);
