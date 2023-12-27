//Definir los textos para cada personaje
const textos = {
    personaje0: "Baby",
    personaje1: "Nick LUCIFER",
    personaje2: "Clair NOVAK",
    personaje3: "Castiel",
    personaje4: "Sam Winchester",
    personaje5: "Dean Winchester",
};

//Selecciona todos los personajes y el elemento de texto x si se marean :v 
const personaje = document.querySelectorAll('.personaje0,.personaje1,.personaje2,.personaje3,.personaje4,.personaje5');
const textoPersonaje = document.getElementById('texto-personaje');

personaje.forEach(personaje => {
    personaje.addEventListener('mouseover', () =>{
        //cambia el contenido del texto basado en el personaje
        textoPersonaje.textContent = textos[personaje.classList[0]];
        textoPersonaje.style.display = 'block'; //Muestra el texto
        textoPersonaje.style.color = 'red';
    });

    personaje.addEventListener('mouseout', () => {
        textoPersonaje.style.display = 'none'; //Oculta el texto cuando el mouse deja el personaje
    });
});  