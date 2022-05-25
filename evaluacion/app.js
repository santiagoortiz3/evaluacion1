const URL = "https:random.dog/woof.json"

const btn = document.getElementById("btn");
const mainCards = document.querySelector("main");
const imagen = document.querySelector('#image')


const generar = (caracteristicas)=>{
    const card = document.createElement('div');
    card.classList.add('card');
    
    const nombredeCard = document.createElement('p');
    nombredeCard.classList.add("randomTitle");
    
    const imgCard = document.createElement('img');
    imgCard.classList.add('img-card');
    imgCard.src = caracteristicas.image;
    imgCard.alt = caracteristicas.name;
    
    card.appendChild(imgCard);
    card.appendChild(nombredeCard);
    
    mainCards.appendChild(card);


}
btn.addEventListener("click",generar);





