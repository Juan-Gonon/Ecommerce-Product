export class Product{
    constructor(img1, img2, img3, img4, img5, price){
        this.imgs = [img1, img2, img3, img4, img5];
        this.price = price;
        this.cantidad = 1;
    }

    get next(){
        this.cantidad++;
    }
    get prev(){
        if(this.cantidad>1){
            this.cantidad--;
        }
    }

    get precio(){
        return this.price;
    }
    get cantidadTotal(){
        return this.cantidad;
    }

    

    get total(){
        return this.price * this.cantidad;
    }
}