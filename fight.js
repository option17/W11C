function attackButton(details){
    foeHealth = foeHealth - 23
    Cookies.set(`foeHealth`, foeHealth);

    playerHealth = playerHealth -15;
    Cookies.set(`playerHealth`, playerHealth);

    let playerDisplay = document.getElementById(`displayHP1`);
    playerDisplay[`innerHTML`] = playerHealth;

    let foeDisplay = document.getElementById(`displayHP2`);
    foeDisplay[`innerHTML`] = foeHealth;
}

let playerPokemon_json = Cookies.get(`playerSelection`);
let playerPokemon = JSON.parse(playerPokemon_json);

let foePokemon_json = Cookies.get(`foeSelection`);
let foePokemon = JSON.parse(foePokemon_json);

let playerHealth = Cookies.get(`playerHealth`);
let foeHealth = Cookies.get(`foeHealth`);

let battleGrounds = document.getElementById(`battleGrounds`)

battleGrounds.insertAdjacentHTML(`afterbegin`,

`<div>
<h3>${foePokemon[`name`]}</h3>
<img src="${foePokemon[`image_url`]}">
<p id="displayHP2">${foeHealth}</p>
</div>`

);
battleGrounds.insertAdjacentHTML(`afterbegin`,

`<div>
<h3>${playerPokemon[`name`]}</h3>
<img src="${playerPokemon[`image_url`]}">
<button id="buttonOne">${playerPokemon[`attack`]}</button>
<p id="displayHP1">${playerHealth}</p>
</div>`

);

let buttonOne = document.getElementById(`buttonOne`);
buttonOne.addEventListener(`click`, attackButton)