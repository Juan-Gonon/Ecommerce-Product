import { Product } from "./class.js";
import { soursDOM } from "./index.js";


const product1 = new Product ('../asset/img/shoes1.png','../asset/img/shoes2.png', '../asset/img/shoes3.png', '../asset/img/shoes1.png','../asset/img/shoes2.png', 125.00);

const products = [product1];



export const createElement = ()=>{
    const price = document.getElementById("price");
    const cantidad = document.getElementById("cantidad");
    const content__img = document.querySelector(".content__img");

    

    products.forEach((element)=>{
        const img1 = element.imgs.find((element, i) => i == 0);
        const img = document.createElement("img");

    
        img.setAttribute("src", img1);
        content__img.appendChild(img);

        colorsProduct(element.imgs);
        price.textContent = `$ ${element.price}.00`;
        cantidad.textContent = element.cantidad;

    })


    soursDOM(products);
}

function colorsProduct(imgs){
    const contentImg = document.querySelector("#imgs");

    let options = imgs.slice(1);

    options.forEach((element)=>{
        const img = document.createElement("img");
        const div = document.createElement("div");

        div.classList.add("img");
        img.setAttribute("src", element);

        div.appendChild(img);
        contentImg.append(div);

    })

}


