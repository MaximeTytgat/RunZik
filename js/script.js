let button = document.querySelector('button');


// let panier = localStorage.getItem('card');
// console.log(panier[0]);

const cart = {
    listOfProduct: {},


    addProduct(name, price, quantity) {
        if (this.listOfProduct[name]) {
            this.listOfProduct[name].quantity += quantity
        } else {
            this.listOfProduct[name] = {
                price:price,
                quantity: quantity
            }
        }
    },

    getTotalPrice() {
        if (Object.keys(this.listOfProduct).length > 0) {
            let totalPrice = 0;
            for (const i in this.listOfProduct) {
                totalPrice += this.listOfProduct[i].price * this.listOfProduct[i].quantity
            }
            return totalPrice
        } else {
            return this.listOfProduct.price;
        };
    },

    getTotalQtt() {
        if (Object.keys(this.listOfProduct).length > 0) {
            let Qtt = 0;
            for (const i in this.listOfProduct) {
                Qtt += this.listOfProduct[i].quantity
            }
            return Qtt
        } else {
            return 0;
        };
    },
}



button.addEventListener('click', () => {
    cart.addProduct(button.dataset.name, button.dataset.price, 1);
    console.log(cart.getTotalQtt());
    console.log(cart.getTotalPrice());
});
