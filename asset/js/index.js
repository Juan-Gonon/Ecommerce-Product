
export const soursDOM = (elements)=>{
    
const toggle = document.querySelector("#toggle");
const navClose = document.querySelector("#close");
const nav = document.querySelector(".nav");
const main = document.querySelector("#main");

const list = nav.querySelectorAll("li");
const imgs = document.querySelectorAll(".content__imgs .img");

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const add__car = document.querySelector(".add__car");
const content__imgs = document.querySelectorAll(".content__imgs img");
const content__img  = document.querySelector(".content__img img");


const carrito = document.querySelector(".carrito");
const carrito__content = document.querySelector(".carrito__content");


toggle.onclick = ()=>{

    nav.classList.add("active");
    main.classList.add("active");
}


navClose.onclick = ()=>{
    nav.classList.remove("active");
    main.classList.remove("active");
}

function removeLink(){

    list.forEach((element)=>{
        element.classList.remove("active");
    })

    this.classList.add("active");
    nav.classList.remove("active");
    main.classList.remove("active");
}

function removeImg(){
    imgs.forEach((element)=>{
        element.classList.remove("active");
    })
    this.classList.add("active");
}

list.forEach((element)=>{
    element.addEventListener('click', removeLink)
})

imgs.forEach((element)=>{
    element.addEventListener('click', removeImg)
})


elements.forEach((element)=>{

    next.onclick = ()=>{
        element.next;
        cantidad.textContent = element.cantidad;

    }
    prev.onclick = ()=>{
        element.prev;
        cantidad.textContent = element.cantidad;
    }

    add__car.addEventListener('click', ()=>{
        const quantity = carrito.querySelector(".quantity");
        quantity.classList.add("active");
        quantity.textContent = element.cantidad;
        cardsCar(element)
        
    })

})


content__imgs.forEach((element)=>{
    element.addEventListener('click', ()=>{
        const src = element.getAttribute('src');

        content__img.setAttribute('src', src);
    })
})



carrito.onclick = ()=>{
    carrito__content.classList.toggle("active");
}

}

function cardsCar(element){
    const content__img  = document.querySelector(".content__img img");
    const src = content__img.getAttribute("src")
    const carrito__content = document.querySelector(".carrito__content-cards");
    const section = document.createElement("section");
    const carCard = document.createElement("div");
    const cardImg = document.createElement("div");
    const img = document.createElement("img");
    const cardText = document.createElement("div");
    const trash = document.createElement("div");
    const checkout = document.createElement("a");
   
    carrito__content.innerHTML = "";




    section.classList.add("cards__content");
    carCard.classList.add("car-Cards");
    cardImg.classList.add("card-img");
    img.setAttribute("src", src);
    cardText.classList.add("card-text");
    cardText.innerHTML = `<p>Fall Limited Edition Sneakers $ ${element.precio}.00 x ${element.cantidadTotal}: <span>$ ${element.total}.00</span></p>`;
    trash.classList.add("trash")
    trash.innerHTML = `<i class='bx bxs-trash'></i>`;
    checkout.classList.add("checkout");

    checkout.textContent = "Checkout";




    cardImg.appendChild(img);

    carCard.appendChild(cardImg);
    carCard.appendChild(cardText);
    carCard.appendChild(trash);

    section.appendChild(carCard);
    section.appendChild(checkout);

    carrito__content.append(section);



}