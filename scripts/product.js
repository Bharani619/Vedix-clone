function searchfunction() {
    return `<div id='productlist'>All Products</div>
    <div><input id="searchbar" type="text" placeholder="Search Product Here..." required/>
    <i class="fa-solid fa-magnifying-glass"></i></div>
    <div id="filter">Filter Products</div>`
}


/*===================================Apppend Functionality=================================*/

function appendProduct(arr, parent) {

    arr.map((elem) => {
        let div = document.createElement("div");
        div.setAttribute("class", "main-product-div")

        let div1 = document.createElement("div");
        div1.setAttribute("class", "image-container-div")
        let div2 = document.createElement("div");
        div2.setAttribute("class", "description-div");
        let div3 = document.createElement("div");
        div3.setAttribute("class", "price-ratings-div");
        let div4 = document.createElement("div");
        div4.setAttribute("class", "Cartbtn-div");

        let Image = document.createElement("img");
        Image.src = elem.image
        Image.setAttribute("width", "100%");
        Image.setAttribute("height", "100%");
        div1.append(Image);

        let description = document.createElement("p");
        description.textContent = elem.title;
        div2.append(description)

        let ratings = document.createElement("h2");
        ratings.innerHTML = `★★★★★`
        ratings.style.color = "goldenRod"

        let div5 = document.createElement('div');
        div5.setAttribute('id', 'price');

        let price1 = document.createElement('p');
        price1.textContent = `${elem.strickedPrice} Rs.`;
        price1.style.textDecoration = 'line-through';

        let price2 = document.createElement('p');
        price2.textContent = `${elem.price} Rs.`;
        div5.append(price1, price2);
        div3.append(ratings, div5);

        let cartButton = document.createElement("button");
        cartButton.innerHTML = "ADD TO CART";
        cartButton.setAttribute("class", "btn-cart");
        cartButton.onclick = (e) => {
            addTocart(elem);
        }
        div4.append(cartButton);
        div.append(div1, div2, div3, div4);
        parent.append(div);

    });
}

export { searchfunction, appendProduct };