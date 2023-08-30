let pokeNombreRef = document.getElementById("pokemon-nombre");
let buscadorBtn = document.getElementById("buscador-btn");
let result = document.getElementById("resultado");





//Se Obtiene info de la API

let getPokemon = () => {
    let pokemon = pokeNombreRef.value;
    let pokemonLower=pokemon.toLowerCase();
   
    //let pokeApi=`https://pokeapi.co/api/v2/pokemon/1`;
    let pokeApi=`https://pokeapi.co/api/v2/pokemon/${pokemonLower}`
    
   
    //Se valida que el input tenga valores.
    if (pokemon.length <= 0) {
        result.innerHTML = `<h3 class="msg">Por favor ingrese número/nombre del Pokemón </h3>`;
    }else {
        fetch(pokeApi)
            .then(res=>res.json())            
            .then(data=>{
                console.log(data)
                //Valida que tenga info
                if (Object.keys(data).length>0) {

                    const DatosPokemon={
                        img:data.sprites.other.home.front_default,
                        nombre:data.name,
                        vida:data.stats[0].base_stat,
                        experiencia:data.base_experiencie,
                        ataque:data.stats[1].base_stat,
                        defensa:data.stats[2].base_stat,
                        ataqueEsp:data.stats[3].base_stat,
                        tipo:data.types[0].type.name
                    }

                console.log(DatosPokemon)
                    result.innerHTML = `
                        <div class="info">
                            <img src=${DatosPokemon.img} class="poster">
                            <div>
                                <h2>${DatosPokemon.nombre}</h2>
                                <div class="rating">
                                    <img src="star-icon.svg">
                                    <h4>${DatosPokemon.vida}</h4>
                                </div>
                                <div class="details">
                                    <span>${DatosPokemon.ataque}</span>
                                    <span>${DatosPokemon.defensa}</span>
                                    <span>${DatosPokemon.ataqueEsp}</span>
                                </div>
                                <div class="genre">
                                    <div>${DatosPokemon.tipo.split(",").join("</div><div>")}</div>
                                </div>
                            </div>
                        </div>
                        <h3>Plot:</h3>
                        <p>${DatosPokemon.nombre}</p>
                        <h3>Cast:</h3>
                        <p>${DatosPokemon.nombre}</p>`;
                }                   
                else {
                    result.innerHTML = `<h3 class="msg">${DatosPokemon.nombre}</h3>`;
                }
            })        
                .catch(() => {
                    result.innerHTML = `<h3 class="msg">Ha ocurrido un Error :( </h3>`;
                });
            
           
    }



};//Fin getPokemon


buscadorBtn.addEventListener("click", getPokemon);
window.addEventListener("load", getPokemon);

