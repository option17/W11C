function chooseBublasaur(details) {
    let bulbasaur_json = JSON.stringify(bulbasaur);
    cookies.set(`playerSelection`, bulbasaur_json);
    cookies.set(`playerHealth`, bulbasaur[`health`]);
    cookies.set(`playerSelection`, bulbasaur[`attack`]);
    
    let foe_json = JSON.stringify(meowth);
    cookies.set(`foeSelection`, foe_json);
    cookies.set(`foeHealth`,meowth[`health`]);
    location.href = `fight.html`;
}

function chooseMagikarp(details) {
    let magikarp_json = JSON.stringify(magikarp);
    cookies.set(`playerSelection`, magikarp_json);
    cookies.set(`playerHealth`, magikarp[`health`]);
    cookies.set(`playerSelection`, magikarp[`attack`]);
    
    let foe_json = JSON.stringify(meowth);
    cookies.set(`foeSelection`, foe_json);
    cookies.set(`foeHealth`,meowth[`health`]);
    location.href = `fight.html`;
}

function chooseMeowth(details) {
    let meowth_json = JSON.stringify(meowth);
    cookies.set(`playerSelection`, meowth_json);
    cookies.set(`playerHealth`, meowth[`health`]);
    cookies.set(`playerSelection`, meowth[`attack`]);
    
    let foe_json = JSON.stringify(meowth);
    cookies.set(`foeSelection`, foe_json);
    cookies.set(`foeHealth`,meowth[`health`]);
    location.href = `fight.html`;
}

function choosePalkia(details) {
    let palkia_json = JSON.stringify(palkia);
    cookies.set(`playerSelection`, palkia_json);
    cookies.set(`playerHealth`, palkia[`health`]);
    cookies.set(`playerSelection`, palkia[`attack`]);
    
    let foe_json = JSON.stringify(meowth);
    cookies.set(`foeSelection`, foe_json);
    cookies.set(`foeHealth`,meowth[`health`]);
    location.href = `fight.html`;
}

    



let bulbasaur = {
    name: `bulbasaur`,
    image_url: `<img src="https://c.tenor.com/mCfgYm2yNiIAAAAM/bulbasaur-pokemon.gif"`,
    health: 200,
    attack: `Vine Whip`
};

let magikarp = {
    name: `magikarp`,
    image_url: `<img src="https://c.tenor.com/PwnLxYiXYtwAAAAM/pokemon-magikarp.gif"`,
    health: 100,
    attack: `Splash`
};

let meowth = {
    name: `meowth`,
    image_url: `<img src="https://24.media.tumblr.com/4dc1072bdd110a27a9d0922d3a392c8e/tumblr_mrw6pugd3A1rfjowdo1_500.gif"`,
    health: 210,
    attack: `Scratch`
};

let palkia = {
    name: `palkia`,
    image_url: `<img src="https://i.pinimg.com/originals/53/c6/27/53c627b49a3878bbf3113410cca70737.gif"`,
    health: 300,
    attack: `Aura Sphere`
};

let bulbasaurButton = document.getElementById(`bulbasaurButton`);
bulbasaurButton.addEventListener(`click`, chooseBublasaur)

let magikarpButton = document.getElementById(`magikarpButton`);
magikarpButton.addEventListener(`click`, chooseMagikarp)

let meowthButton = document.getElementById(`meowthButton`);
meowthButton.addEventListener(`click`, chooseMeowth)

let palkiaButton = document.getElementById(`palkiaButton`);
palkiaButton.addEventListener(`click`, choosePalkia)