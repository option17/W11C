function chooseBulbasaur(details) {
    let bulbasaur_json = JSON.stringify(bulbasaur);
    Cookies.set(`playerSelection`, bulbasaur_json);
    Cookies.set(`playerHealth`, bulbasaur[`health`]);
    Cookies.set(`playerAttack`, bulbasaur[`attack`]);
    
    let foe_json = JSON.stringify(meowth);
    Cookies.set(`foeSelection`, foe_json);
    Cookies.set(`foeHealth`,meowth[`health`]);
    location.href = `fight.html`;
}

function chooseMagikarp(details) {
    let magikarp_json = JSON.stringify(magikarp);
    Cookies.set(`playerSelection`, magikarp_json);
    Cookies.set(`playerHealth`, magikarp[`health`]);
    Cookies.set(`playerAttack`, magikarp[`attack`]);
    
    let foe_json = JSON.stringify(meowth);
    Cookies.set(`foeSelection`, foe_json);
    Cookies.set(`foeHealth`,meowth[`health`]);
    location.href = `fight.html`;
}

function chooseMeowth(details) {
    let meowth_json = JSON.stringify(meowth);
    Cookies.set(`playerSelection`, meowth_json);
    Cookies.set(`playerHealth`, meowth[`health`]);
    Cookies.set(`playerAttack`, meowth[`attack`]);
    
    let foe_json = JSON.stringify(meowth);
    Cookies.set(`foeSelection`, foe_json);
    Cookies.set(`foeHealth`,meowth[`health`]);
    location.href = `fight.html`;
}

function choosePalkia(details) {
    let palkia_json = JSON.stringify(palkia);
    Cookies.set(`playerSelection`, palkia_json);
    Cookies.set(`playerHealth`, palkia[`health`]);
    Cookies.set(`playerAttack`, palkia[`attack`]);
    
    let foe_json = JSON.stringify(meowth);
    Cookies.set(`foeSelection`, foe_json);
    Cookies.set(`foeHealth`,meowth[`health`]);
    location.href = `fight.html`;
}

    



let bulbasaur = {
    name: `bulbasaur`,
    image_url: `https://c.tenor.com/mCfgYm2yNiIAAAAM/bulbasaur-pokemon.gif`,
    health: 200,
    attack: `Vine Whip`
};

let magikarp = {
    name: `magikarp`,
    image_url: `https://c.tenor.com/PwnLxYiXYtwAAAAM/pokemon-magikarp.gif`,
    health: 100,
    attack: `Splash`
};

let meowth = {
    name: `meowth`,
    image_url: `https://24.media.tumblr.com/4dc1072bdd110a27a9d0922d3a392c8e/tumblr_mrw6pugd3A1rfjowdo1_500.gif`,
    health: 210,
    attack: `Scratch`
};

let palkia = {
    name: `palkia`,
    image_url: `https://i.pinimg.com/originals/53/c6/27/53c627b49a3878bbf3113410cca70737.gif`,
    health: 300,
    attack: `Aura Sphere`
};

let bulbasaurButton = document.getElementById(`bulbasaurButton`);
bulbasaurButton.addEventListener(`click`, chooseBulbasaur)

let magikarpButton = document.getElementById(`magikarpButton`);
magikarpButton.addEventListener(`click`, chooseMagikarp)

let meowthButton = document.getElementById(`meowthButton`);
meowthButton.addEventListener(`click`, chooseMeowth)

let palkiaButton = document.getElementById(`palkiaButton`);
palkiaButton.addEventListener(`click`, choosePalkia)