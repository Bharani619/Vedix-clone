let combo = JSON.parse(localStorage.getItem("combo"))||[];
appendComboData(combo);

let combos_cart = localStorage.getItem("combos_cart");
if(!combos_cart) {

    combos_cart = [];
    localStorage.setItem("combos_cart",JSON.stringify(combos_cart));
    refreshCartCount(combos_cart)
}
else{
    combos_cart = JSON.parse(combos_cart);
    refreshCartCount(combos_cart)
}


function refreshCartCount(combos_cart) {
    let cartCount = document.getElementById("cart-count");
    cartCount.textContent = " Cart Count : " + combos_cart.length;
  }


function appendComboData(combo) {

    console.log(combo)

    document.querySelector("#product-container-f").innerHTML="";

combo.map((elem) => {

    let div = document.createElement("div");
    div.setAttribute("class","main-product-div")
    
    let div1 = document.createElement("div");
    div1.setAttribute("class","image-container-div")
    let div2 = document.createElement("div");
    div2.setAttribute("class","description-div");
    let div3 = document.createElement("div");
    div3.setAttribute("class","price-ratings-div");
    let div4 = document.createElement("div");
    div4.setAttribute("class","Cartbtn-div");
    let div5 = document.createElement("div");
    div5.setAttribute("class","Details-div");


    let Image = document.createElement("img");
    Image.src=elem.image
    Image.setAttribute("width","100%");
    Image.setAttribute("height","100%");

    div1.append(Image);
 
    let description = document.createElement("p");
    description.textContent=elem.title;

    div2.append(description)
 
    let ratings = document.createElement("p");
    ratings.innerHTML=`★★★★★`
    ratings.style.color="goldenRod"
 
    let Price = document.createElement("P");
    Price.textContent="Rs."+elem.price;

    div3.append(ratings,Price);

    let details = document.createElement("p");
    details.textContent="View Details"
    

    div5.append(details);
    
    let cartButton = document.createElement("button");
    cartButton.innerHTML="ADD TO CART"
    cartButton.setAttribute("class","btn-cart")
    cartButton.onclick= (e) =>{
        
        addTocart(elem);

    }
    div4.append(cartButton)

 
    div.append(div1,div2,div3,div5,div4);
    document.querySelector("#product-container-f").append(div);
});

function addTocart(elem) {

    // let combos_cart = JSON.parse(localStorage.getItem("combos_cart"))||[];

    combos_cart.push(elem);
    
    localStorage.setItem("combos_cart",JSON.stringify(combos_cart));
    refreshCartCount(combos_cart);
    window.location.href="product.html";

}
    // let count = 0;

//     for(let i=0; i<combos_cart.length; i++) {

//         if(elem.id==combos_cart[i].id) {
//             alert("already in the cart");
//             count=1;
//         }
//     }
//     if(count==0) {
       
//          combos_cart.push(elem);
//          localStorage.setItem("combos_cart",JSON.stringify(combos_cart));
//          alert("added to cart");
//          refreshCartCount(combos_cart);
//    }


//     let obj = {};
 
//     let combos_cart = JSON.parse(localStorage.getItem("combos_cart"));

//     if(combos_cart &&  !combos_cart[elem.id])  {

//         obj["id"]=elem[id]

          

//     }

    // function addTocart(elem) {

    //     console.log("clicked")
    //     let localStorageItems = JSON.parse(
    //       localStorage.getItem("combos_cart")
    //     );
    //     let obj = {};
    //     if (localStorageItems && !localStorageItems[elem.id]) {
    //       obj = { ...localStorageItems, [elem.id]:true };
    //     // obj={"clickked":true}
    //       localStorage.setItem("combos_cart", JSON.stringify(obj));
    //     }
    //     refreshCartCount(obj);
    //   }
      


        // if(combos_cart.length==0) {

        //     let combos_cart = JSON.parse(localStorage.getItem("combos_cart"))||[];

        //     combos_cart.push(elem);
            
        //     localStorage.setItem("combos_cart",JSON.stringify(combos_cart));
        //     refreshCartCount(combos_cart);
        // }
        // else {
        //     // console.log("jkjkj");  
        //     let combos_cart = JSON.parse(localStorage.getItem("combos_cart"))||[];
        //         for(let i=0; i<combos_cart.length; i++) {

                    
        //             if(combos_cart[i].id==elem.id) {
        //                 console.log("matched:",i);
        //                 break;
        //             }
                    
        //             console.log("unmatched:",i);
        //             combos_cart.push(elem);
        //             localStorage.setItem("combos_cart",JSON.stringify(combos_cart));
                
        //         };
                
        //         refreshCartCount(combos_cart);
        //     }
            
}

let cart_icon = document.querySelector(".cart-icon");
let cart = document.querySelector(".cart-sidebar");
let close_cart = document.querySelector(".close-cart");
let overallContainer = document.querySelector("#product-main-container");

cart_icon.onclick = () => {
overallContainer.setAttribute("class","activeOnblur")
cart.classList.add("active");
}

close_cart.onclick = () => {
    overallContainer.setAttribute("class","activeofblur")
    cart.classList.remove("active");
}


displaySidebarData(combos_cart);

 function displaySidebarData(combos_cart) {

    document.querySelector(".sub-cart-content").innerHTML="";

    combos_cart.map((elem,index) => {
           
            let div = document.createElement("div");
            div.setAttribute("class","main-Div-c")
        
            let upperDiv = document.createElement("div");
            upperDiv.setAttribute("class","upperDiv")
          
            let lowerDiv = document.createElement("div");
            lowerDiv.setAttribute("class","lowerDiv");
        
            let upperDiv_img = document.createElement("div");
            upperDiv_img.setAttribute("class","image-div-s")
            let upperDiv_content = document.createElement("div");
            let upperDiv_remove = document.createElement("div");
            upperDiv_remove.setAttribute("class","delete-div-s")
            
            let lowerDiv_quantity = document.createElement("div");
            let lowerDiv_price = document.createElement("div");
            let lowerDiv_Strikedprice = document.createElement("div");
         
            let Image = document.createElement("img");
            Image.src=elem.image;
            Image.setAttribute("width","100%");
        
            let description = document.createElement("p");
            description.textContent=elem.title;
        
            let remove = document.createElement("div");
            remove.innerHTML=`<i class="far fa-trash-alt"></i>`;
            remove.addEventListener("click",function() {
                deleteTask(combos_cart,index);
                });
        
            let quantity = document.createElement("input");
            quantity.setAttribute("type","number");
            quantity.setAttribute("class","input-div");
        
            let strikedprice = document.createElement("p");
            strikedprice.textContent="Rs."+elem.strickedPrice;
            strikedprice.style.textDecoration="line-through"
        
            let Price = document.createElement("p");
            Price.textContent="Rs."+elem.price;
            
        
           upperDiv_img.append(Image);
           upperDiv_content.append(description);
           upperDiv_remove.append(remove);
            
           upperDiv.append(upperDiv_img,upperDiv_content,upperDiv_remove);
           
           lowerDiv_quantity.append(quantity);
           lowerDiv_Strikedprice.append(strikedprice);
           lowerDiv_price.append(Price);
        
           lowerDiv.append(lowerDiv_quantity,lowerDiv_Strikedprice,lowerDiv_price);
        
           div.append(upperDiv,lowerDiv);
           document.querySelector(".sub-cart-content").append(div);
            
           })
  

 }


 function deleteTask(combos_cart,index) {    
    combos_cart.splice(index,1);
    localStorage.setItem("combos_cart",JSON.stringify(combos_cart));
    displaySidebarData(combos_cart);
    refreshCartCount(combos_cart);
    totalDisplay(total);
    window.location.href="#";
}

let total = combos_cart.reduce(function (acc, curr) {
    return acc + curr.price;
    
  }, 0);



function totalDisplay(total) {
    let totalDisplay = document.getElementById("totalDisplay");
    totalDisplay.textContent = "Rs."+ total; 
  }
  totalDisplay(total);
  displaySidebarData(combos_cart);






  #product-container-f{
    display: grid;
    grid-template-columns: repeat(5,250px);
    grid-gap:10px;
    justify-content: center;
    /* border: 1px solid; */
}
#product-container-f .main-product-div{
    /* border:1px solid red; */
    text-align: center;
    height: 450px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
}
.btn-cart{
    padding:10px;
    width:80%;
    border:0;
    background-color: lightcoral;
    color:white;
    
}
.image-container-div{
    height:200px;
}
.description-div{
    height:50px;
    /* border:1px solid red; */
}
.price-ratings-div{
    /* height:50px; */
    font-weight: bold;
}
.Details-div{
    color:lightcoral;    
}
.Details-div:hover{
    text-decoration: underline;
}
/* .Cartbtn-div{
    height:50px;
}  */
#product-combo-image{
    width:89.5%;
    margin: auto;
    margin-bottom:10px;
}
#product-combo-image img{
    width:100%;
}
#cart-page{
    border:1px solid red;
    /* margin-bottom:5%; */

}
.cart-sidebar{
    position:fixed;
    top:0;
    right:-100%;
    width:350px;
    height: 100%;
    padding:20px;
    background: white;
    box-shadow: -2px 0 4px hsl;
    transition:0.3s;
}

.cart-sidebar.active{
    right:0;
}
/* .sub-cart-content{
    display: flex;
    justify-content: space-between;
} */
.close-cart{
    position: absolute;
    top: 1rem;
    right: 0.8rem;
    cursor: pointer;
}
.upperDiv{
    display: flex;
    justify-content: space-evenly;
    border-bottom: 1px solid rgba(128, 128, 128, 0.315);
}
.lowerDiv{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.input-div{
    width:50px;
}
.image-div-s{
    width:30%;
}
.delete-div-s{
    margin-top:5%;
}
.main-Div-c{
    border:1px solid rgba(172, 172, 172, 0.678);
    border-radius: 5px;
    padding:5px;
    margin-bottom: 3%;
}
.cart-title-s{
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.cart-tag-s{
    text-decoration: none;
     color:black;
     font-size:25px;
}
.cart-tag-s button{
    padding:5px;
    width:80px;
    font-size: 15px;
    border:0;
    border-radius:5px;
}
.cart-tag-s button:hover{
    background-color: black;
    color:white;
    transition: 0.5s;

}
.inner-bottom-content-s{
    border-top: 1px solid red;
    margin-left:-1%;
    width:100%;
    background-color: white;
}
.inner-flex-s{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.inner-check-s{
    text-align: center;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    
}
.inner-check-s a{
    color:rgba(0, 0, 0, 0.918);
    
}
.sub-cart-content{
   height:500px;
   overflow-y: scroll;
}
.sub-cart-content::-webkit-scrollbar{
    display: none;
}
.inner-flex-s button{
    padding:10px;
    background-color: lightcoral;
    color:white;
    border:0;
}
.icon-next-s{
    margin-top:2%;
    margin-left:1%;
}
.activeOnblur{
    filter:blur(5px);
}
.activeofblur{
    filter:blur(0px);
}

