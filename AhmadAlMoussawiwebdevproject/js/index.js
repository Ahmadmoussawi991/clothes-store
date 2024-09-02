const typed = new Typed(".text", {
  strings: ["T-shirt", "Shoes", "Cap"],
  typeSpeed: 70,
  backSpeed: 80,
  backdelay: 1500,
  loop: true,
});
function saveProductsToLocalStorage() {
  localStorage.setItem("products", JSON.stringify(products));
}
function getProductsFromLocalStorage() {
  const storedProducts = localStorage.getItem("products");
  if (storedProducts) {
    products = JSON.parse(storedProducts);
  }
}
window.onload = function () {
  localStorage.removeItem('products')
  localStorage.setItem("products",JSON.stringify(products))
  getProductsFromLocalStorage();
  showproducts();
  showteam();
  showReview();
  showrateavg();
  getcartfromememory();
  addCartToHTML();

};

let products = [
  {
    recommanded:[2,3],
    id: 1,
    img: ["./images/RunningShoesd.png", "./images/RunningShoesd1.png"],
    name: "Running Shoes",
    description: "Suitable ",
    price: 49,
    type: "shoes",
    size: [
            { id: 1, name: 5, available: true },
            { id: 2, name: 6, available: true },
            { id: 3, name: 7, available: false },
            { id: 4, name: 8, available: true },
            { id: 5, name: 9, available: true },
            { id: 6, name: 10,available: true }
        ],
        qty:2
  },
  {recommanded:[2,3],
    id: 2,
    img: ["./images/RunningShoesf.png", "./images/RunningShoesf1.png"],
    name: "Running Shoes",
    description: "Suitable for all",
    price: 73,
    type: "shoes",
    size: [
      { id: 1, name: 5, available: true },
      { id: 2, name: 6, available: true },
      { id: 3, name: 7, available: false },
      { id: 4, name: 8, available: true },
      { id: 5, name: 9, available: true },
      { id: 6, name: 10,available: true }
  ],
  qty:10
    
  },
  {
    recommanded:[2,3],
    id: 3,
    img:["./images/RunningShoeso.png"],
    name: "Running Shoes",
    description: "Suitable for all consequences",
    price: 43,
    type: "shoes",
    size: [
      { id: 1, name: 5, available: true },
      { id: 2, name: 6, available: true },
      { id: 3, name: 7, available: false },
      { id: 4, name: 8, available: true },
      { id: 5, name: 9, available: true },
      { id: 6, name: 10,available: true }
  ],
  qty:9
  },
  {
    recommanded:[2,3],
    id: 4,
    img: ["./images/RedT-shirt.png", "./images/BlackPoloShirt.png"],
    name: "Polo T-shirt",
    description: "T-shirt",
    price: 34,
    type: "clothes",
    size: [
      { id: 1, name: 5, available: true },
      { id: 2, name: 6, available: true },
      { id: 3, name: 7, available: false },
      { id: 4, name: 8, available: true },
      { id: 5, name: 9, available: true },
      { id: 6, name: 10,available: true }
  ],
  qty:15
  },
  {
    recommanded:[2,3],
    id: 5,
    img: ["./images/adidascap.png"],
    name: "Adidas Cap",
    description: "protect yourself from  the sun",
    price: 8,
    type: "cap",
    size: [
      { id: 1, name: 5, available: true },
      { id: 2, name: 6, available: true },
      { id: 3, name: 7, available: false },
      { id: 4, name: 8, available: true },
      { id: 5, name: 9, available: true },
      { id: 6, name: 10,available: true }
  ],
  qty:3
  },
  {
    recommanded:[2,3],
    id: 6,
    img: [
      "./images/blackarmyboots.png",
      "./images/desertboots.png",
      "./images/greyboots.png",
    ],
    name: "Army  Boots",
    description: "Many army boots for all enviremnet",
    price: 90,
    type: "shoes",
    size: [
      { id: 1, name: 5, available: true },
      { id: 2, name: 6, available: true },
      { id: 3, name: 7, available: false },
      { id: 4, name: 8, available: true },
      { id: 5, name: 9, available: true },
      { id: 6, name: 10,available: true }
  ],
  qty:2
  },
  {
    recommanded:[2,3],
    id: 7,
    img: [
      "./images/womenbag.png",
      "./images/womenbag1.png",
      "./images/womenbag2.png",
    ],
    name: "women bag",
    description: "very good bag",
    price: 230,
    type: "bag",
    size: [
      { id: 1, name: 5, available: true },
      { id: 2, name: 6, available: true },
      { id: 3, name: 7, available: false },
      { id: 4, name: 8, available: true },
      { id: 5, name: 9, available: true },
      { id: 6, name: 10,available: true }
  ],
  qty:8
  },
  {
    recommanded:[2,3],
    id: 8,
  img: [
      "./images/menbelts.png",
      "./images/menbelts1.png",
    ],
    name: "men belts",
    description: "very good belts",
    price: 20,
    type: "belts",
    size: [
      { id: 1, name: 5, available: true },
      { id: 2, name: 6, available: true },
      { id: 3, name: 7, available: false },
      { id: 4, name: 8, available: true },
      { id: 5, name: 9, available: true },
      { id: 6, name: 10,available: true }
  ],
  qty:10
  },
  {recommanded:[2,3],
    id: 9,
  img: [
        "./images/TShirt.png",
        "./images/WhiteTshirt.png",
      ],
      name: "Tshirt new",
      description: "very good Tshirt",
      price: 60,
      type: "clothes",
      size: [
        { id: 1, name: 5, available: true },
        { id: 2, name: 6, available: true },
        { id: 3, name: 7, available: false },
        { id: 4, name: 8, available: true },
        { id: 5, name: 9, available: true },
        { id: 6, name: 10,available: true }
    ],
    qty:0
    },
    {
      recommanded:[2,3],
      id: 10,
      img: [
            "./images/CowboyHat.png",
            "./images/CowboyHat1.png",
          ],
          name: "hat new",
          description: "very good hat",
          price: 120,
          type: "cap",
          size: [
            { id: 1, name: 5, available: true },
            { id: 2, name: 6, available: true },
            { id: 3, name: 7, available: false },
            { id: 4, name: 8, available: true },
            { id: 5, name: 9, available: true },
            { id: 6, name: 10,available: true }
        ],
        qty:12
        },
        {recommanded:[2,3],
          id: 11,
          img: ["./images/MintGreenT-Shirt.png"],
              name: "green tshirt",
              description: "nice tshirt new",
              price: 180,
              type: "clothes",
              size: [
                { id: 1, name: 5, available: true },
                { id: 2, name: 6, available: true },
                { id: 3, name: 7, available: false },
                { id: 4, name: 8, available: true },
                { id: 5, name: 9, available: true },
                { id: 6, name: 10,available: true }
            ],
            qty:6
            },
];

let team = [
  {
    id: 1,
    name: 'Tom',
    description: "I'm a web developer and I love coding",
    image: './images/team1.jpg',
    skills: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 2,
    name: 'Sara',
    description: "I'm a designer with a passion for user experience",
    image:  './images/team.jpg',
    skills: ['Adobe XD', 'Figma', 'Sketch'],
  },
  {
    id: 3,
    name: 'Alex',
    description: "I'm a backend developer specializing in server-side logic",
    image:  './images/team2.jpg',
    skills: ['Node.js', 'Express', 'MongoDB'],
  }
];
let reviews=[
  {
    id:1,
    name: "John Doe",
    text:'Before getting the Ruck Snack, I struggled my whole life with pulverized snacks, endless crumbs, and other heartbreaking snack catastrophes. Now, I can stow my snacks with confidence and style!',
    rate:5
  },
  {
    id:2,
    name: "Emily Selman",
    text:'This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.',
    rate:4
  }
]
let ratingavg=[
  {
    id:1,
    name:'five-star',
    rateavg:43,
    rate:5
  },
  {
    id:2,
    name:'four-star',
    rateavg:18,
    rate:4
  },
  {
    id:3,
    name:'three-star',
    rateavg:22,
    rate:3
  },
  {
    id:4,
    name:'two-star',
    rateavg:38,
    rate:2
  },
  {
    id:5,
    name:'one-star',
    rateavg:15,
    rate:1
  }
]

let body = document.querySelector('body');
let cart = [];
let checkout=document.querySelector(".checkOut")
let closeCart = document.querySelector('.close');
let listCartHTML = document.querySelector('.listCart');
let iconCart = document.getElementById('cart');
let iconCartSpan = document.querySelector('.icon-cart span');

iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})
closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})
checkout.onclick=()=>{
  let total=0;
  cart.forEach((item)=>{
   
        let positionProduct = products.findIndex((value) => value.id == item.product_id);
        let product = products[positionProduct];
        total += product.price * item.quantity;
  })
    let totalpurchase=document.getElementById("totalpurchase")
    totalpurchase.innerHTML=`total purchase is ${total}$`

}
let timer; 


const removefromlocalstorage = () => {
    localStorage.removeItem('cart');
    cart = []; 
    addCartToHTML(); 
}

const startTimer = () => {
    clearInterval(timer);
    timer = setInterval(removefromlocalstorage, 30*60*1000);
}

const addToCart = (product_id) => {
  let positionproduct = cart.findIndex((value) => value.product_id == product_id);
  if(cart.length <= 0){
      cart = [{
          product_id: product_id,
          quantity: 1
      }];
  }else if(positionproduct < 0){
      cart.push({
          product_id: product_id,
          quantity: 1
      });
  }else{
      cart[positionproduct].quantity = cart[positionproduct].quantity + 1;
  }
  addCartToHTML();
  addCartToMemory();
  startTimer()
}
const addCartToMemory = () => {
  localStorage.setItem('cart', JSON.stringify(cart));
}
const getcartfromememory=()=>{
 let cartstorage= localStorage.getItem('cart')
 if(cartstorage){
 cart=JSON.parse(cartstorage)
 }
}



const addCartToHTML = () => {
  listCartHTML.innerHTML = '';
  let totalQuantity = 0;
  if(cart.length > 0){
      cart.forEach(item => {
          totalQuantity = totalQuantity +  item.quantity;
          let newItem = document.createElement('div');
          newItem.classList.add('item');
          newItem.dataset.id = item.product_id;

          let positionProduct = products.findIndex((value) => value.id == item.product_id);
          let info = products[positionProduct];
          listCartHTML.appendChild(newItem);
          newItem.innerHTML = `
          <div class="image">
                  <img src="${Array.isArray(info.img)?info.img[0]:info.img}">
              </div>
              <div class="name">
              ${info.name}
              </div>
              <div class="totalPrice">$${info.price * item.quantity}</div>
              <div class="quantity">
                  <span class="minus">-</span>
                  <span>${item.quantity}</span>
                  <span class="plus">+</span>
              </div>
          `;
      })
  }


  iconCartSpan.innerText = totalQuantity;
  if(totalQuantity>0){
    iconCartSpan.style.background="#040"
  }
  else{
    iconCartSpan.style.background = "#a00d02";
  }
}

listCartHTML.addEventListener('click', (event) => {
  let positionClick = event.target;
  if(positionClick.classList.contains('minus') || positionClick.classList.contains('plus')){
      let product_id = positionClick.parentElement.parentElement.dataset.id;
      let type = 'minus';
      if(positionClick.classList.contains('plus')){
          type = 'plus';
      }
      changeQuantityCart(product_id, type);
  }
})
const changeQuantityCart = (product_id, type) => {
  let positionItemInCart = cart.findIndex((value) => value.product_id == product_id);
  if(positionItemInCart >= 0){
      let info = cart[positionItemInCart];
      switch (type) {
          case 'plus':
              info.quantity =info.quantity + 1;
              break;
      
          default:
              let changeQuantity = info.quantity - 1;
              if (changeQuantity > 0) {
                 info.quantity = changeQuantity;
              }else{
                  cart.splice(positionItemInCart, 1);
              }
              break;
      }
  }
  addCartToHTML();
  addCartToMemory();
  startTimer()
}

let typeofdisplay=false
function writeReview() {
  let ratingbox=document.querySelector('.ratingbox')
  if(!typeofdisplay){
  ratingbox.style.display='block'
  typeofdisplay=true
  return
  }
  let nameofuser =document.getElementById("title_review").value
  let rating = document.getElementById("ratingvalue" ).value;
  let reviewText = document.getElementById('userReview').value;
  if ( nameofuser !== "" && rating !== "" && reviewText !== "") {
    const parsedRating = parseInt(rating, 10);

    if (!isNaN(parsedRating) && parsedRating >= 1 && parsedRating <= 5) {
      const newReview = {
        id: reviews.length + 1,
        name: nameofuser,
        text: reviewText,
        rate: parsedRating,
      };
      reviews.push(newReview);
      ratingbox.style.display='none'
      typeofdisplay=false
      showReview();
      clearreview()
    } else {
      alert("Please enter a valid rating between 1 and 5.");
    }
  } else {
    alert("Please make sure all fields are filled out.");
  }

 
}
function clearreview(){
  document.getElementById("title_review").value = '';
  document.getElementById("ratingvalue").value = '';
  document.getElementById('userReview').value = '';
}

document.getElementById('writeReviewBtn').addEventListener('click', writeReview);

function showrateavg(){
  let ratecontainer = document.querySelector('.showrating');
  ratingavg.forEach((rating) => {
    let ratebox = document.createElement("div");
    ratebox.classList.add("rate");
    ratebox.innerHTML=`
    <span>${rating.rate}  <i class="fa-solid fa-star fa-xl" style="color: #FFD43B;"></i> </span>
      <div class="rating-progress-container">
        <div class="rating-progress ${rating.name}" style="width:${rating.rateavg}%">${rating.rateavg} %</div>
      </div>`;
    
  ratecontainer.appendChild(ratebox)
  });
}
function getStarsHTML(rating) {
  let starsHTML = '';
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      starsHTML += '<i class="fa-solid fa-star fa-2s" style="color: #FFD43B;"></i>';
    } else {
      starsHTML += '<i class="fa-solid fa-star fa-2s" style="color: rgb(196, 196, 196);"></i>';
    }
  }
  return starsHTML;
}

function showReview() {
  let reviewContainer = document.querySelector('.review-section');
  reviewContainer.innerHTML = "";
  reviews.forEach((review) => {
    let reviewBox = document.createElement("div");
    reviewBox.classList.add("review");
    reviewBox.innerHTML = `
      <div class="titlereview">
        <img src="images/profile-user.png" alt="">
        <div class="headerreview">
          <h3>${review.name}</h3>
          <div>${getStarsHTML(review.rate)}</div>
        </div>
      </div>
      <p>${review.text}</p>
      <br>
      <hr>`;
    reviewContainer.appendChild(reviewBox);
  });
}

function showteam(){
  const teamcontainer =  document.getElementById("team");
 teamcontainer.innerHTML="";
 team.forEach((team)=>{
  const teambox = document.createElement("div");
    teambox.classList.add("box");
    teambox.innerHTML =`
    <img src="${team.image}" id="imageteam" alt="" />
    <h1>${team.name}</h1>
    <p class="title">${team.description}</p>
    <br>
    <p class="span">Skills : ${team.skills.join(", ")}</p>`;
    if(team.id==2){
      teambox.style.border='2px gold  solid';
    teambox.style.transform="scale(1,1.1)"
    }else{
      teambox.style.border='2px blue solid';
    }
   teamcontainer.appendChild(teambox)
 })
}


function showproducts() {
  const productContainer = document.getElementById("showsomeproduct");
  productContainer.innerHTML = "";

  products.forEach((product) => {
    const productBox = document.createElement("div");
    productBox.classList.add("box");
    productBox.innerHTML = `
        <h1>${product.name}</h1>
        <p class="title">${product.description}</p>
        <span class="span">$${product.price.toFixed(2)}</span>
        <img src="${
          Array.isArray(product.img) ? product.img[0] : product.img
        }" alt="${product.name}" class="imagespro" data-index="0">
        <div class="buttons-container">
         <div class="infobutton" title="More Info"><a href="itemdetails.html?id=${product.id}">&#8505;</a></div>
          <button class="delete">Delete</button>
          <button class="update">Update</button>
        </div>
        <button class="addCart">Add To Cart</button>
      `;

    const deleteButton = productBox.querySelector(".delete");
    deleteButton.addEventListener("click", () => {
      products = products.filter((prod) => prod.id !== product.id);
      showproducts();
      saveProductsToLocalStorage();
      message.innerHTML = `Cloth of name ${product.name} has been deleted`;
      color();
    });

    const updateButton = productBox.querySelector(".update");
    updateButton.addEventListener("click", () => {
      updatedata(product.id);
      message.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    const addtocart=productBox.querySelector('.addCart')
    addtocart.addEventListener('click', () => {
          addToCart(product.id);
      
  })
    productContainer.appendChild(productBox);

    const productImage = productBox.querySelector("img");
    if (Array.isArray(product.img)) {
      let currentIndex = 0;
      productImage.src = product.img[currentIndex];
      productImage.alt = product.name;
      let slideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % product.img.length;
        productImage.src = product.img[currentIndex];
        productImage.setAttribute("data-index", currentIndex);
      }, 2000);
      productImage.addEventListener("mouseover", () => {
        clearInterval(slideInterval);
      });
      productImage.addEventListener("mouseout", () => {
        slideInterval = setInterval(() => {
          currentIndex = (currentIndex + 1) % product.img.length;
          productImage.src = product.img[currentIndex];
          productImage.setAttribute("data-index", currentIndex);
        }, 2000);
      });
    }
  });

  const btndelete = document.getElementById("deleteall");
  if (products.length > 0) {
    btndelete.innerHTML = `<button onclick="deleteAll()" class="btnform">Delete all (${products.length})</button>`;
  } else {
    btndelete.innerHTML = "";
  }
}
//old show products
/*User
function showproducts() {
  const productContainer = document.getElementById("showsomeproduct");
  productContainer.innerHTML = "";
  products.forEach((product) => {
    const productBox = document.createElement("div");
    productBox.classList.add("box");

    const productName = document.createElement("h1");
    productName.textContent = product.name;

    const productImage = document.createElement("img");
    if (Array.isArray(product.img)) {
      let currentIndex = 0;
      productImage.src = product.img[currentIndex];
      productImage.alt = product.name;
      productImage.classList.add("imagespro");
      productImage.setAttribute("data-index", currentIndex);

      const slideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % product.img.length;
        productImage.src = product.img[currentIndex];
        productImage.setAttribute("data-index", currentIndex);
      }, 2000);
    } else {
      productImage.src = product.img;
      productImage.alt = product.name;
      productImage.classList.add("imagespro");
    }
    const productDescription = document.createElement("p");
    productDescription.textContent = product.description;
    productDescription.classList.add("title");

    const productPrice = document.createElement("span");
    productPrice.textContent = `$${product.price.toFixed(2)}`;
    productPrice.classList.add("span");

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete");
    deleteButton.addEventListener("click", () => {
      products = products.filter((prod) => prod.id !== product.id);
      showproducts();
      message.innerHTML=`!clothe of name ${product.name} has ben deleted`
color()

    });

    const updateButton = document.createElement("button");
    updateButton.textContent = "Update";
    updateButton.classList.add("update");
    updateButton.addEventListener("click", () => {
        updatedata(product.id)
    });

    const buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("buttons-container");
    buttonsContainer.appendChild(deleteButton);
    buttonsContainer.appendChild(updateButton);

    productBox.appendChild(productName);
    productBox.appendChild(productDescription);
    productBox.appendChild(productPrice);
    productBox.appendChild(productImage);
    productBox.appendChild(buttonsContainer);

    productContainer.appendChild(productBox);
  });
  let btndelete=document.getElementById('deleteall')
if(products.length>0){
btndelete.innerHTML=`
<button onclick="deleteAll()" class="btnform">delete all (${products.length})</button>
`;
}
else{
    btndelete.innerHTML='';
}
} */
let typeoffilter
let title = document.getElementById("title");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let total = document.getElementById("total");
let count = document.getElementById("count");
let category = document.getElementById("category");
let submit = document.getElementById("submit");
let imageurl = document.getElementById("imageurl");
let desc = document.getElementById("descreption");
let message = document.getElementById("message");
let mood = "create";
let tmp;
function gettotal() {
  if (price.value != "") {
    let result = +price.value + +taxes.value + +ads.value - +discount.value;
    total.innerHTML = result;
    total.style.background = "#040";
  } else {
    total.innerHTML = "";
    total.style.background = "#a00d02";
  }
}
function generatenewidunique() {
  let newId;
  do {
    newId = Math.floor(Math.random() * 400);
  } while (products.some(product => product.id === newId));
  return newId;
}
function handleSubmit(event) {
  event.preventDefault();

  let newProduct = {
    id: generatenewidunique(),
    img: imageurl.value.split(","),
    name: title.value.toLowerCase(),
    description: desc.value,
    price: parseFloat(total.innerHTML),
    type: category.value,
  };
  if (
    title.value != "" &&
    price.value != "" &&
    category.value != "" &&
    count.value < 5 &&
    desc.value != ""
  ) {
    if (mood === "create") {
      if (count.value > 1) {
        for (let i = 0; i < count.value; i++) {
          let clonedProduct = { ...newProduct };//3melna clone 3ashin lid ma ykoun nafes lshi 
          clonedProduct.id = generatenewidunique();
          products.push(clonedProduct);
        }
        message.innerHTML = "!clothes has ben added";
        color();
      } else {
        products.push(newProduct);
        message.innerHTML = "!clothes has ben added";
        color();
      }
      cleardata();
      showproducts();
    } else {
      products[tmp] = newProduct;
      submit.innerHTML = "create";
      count.style.display = "block";
      mood = "create";
      message.innerHTML = "!clothe has ben updated";
      color();
      cleardata();
      showproducts();
      products[tmp] = newProduct;
    }
  } else {
    colorr();
  }
  saveProductsToLocalStorage();
}

document.getElementById("submit").addEventListener("click", handleSubmit);
console.log(products);
function cleardata() {
  title.value = "";
  price.value = "";
  taxes.value = "";
  ads.value = "";
  discount.value = "";
  total.innerHTML = "";
  count.value = "";
  category.selectedIndex="0"
  total.innerHTML = "";
  total.style.background = "#a00d02";
  imageurl.value = "";
  desc.value = "";
}
let scr = document.getElementById("scr");
scr.onclick = function () {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
window.onscroll = function () {
  if (scrollY > 250) {
    scr.style.display = "block";
  } else {
    scr.style.display = "none";
  }
};
function updatedata(productId) {
  title.focus();
  console.log("Updating product with id:", productId);
  const productIndex = products.findIndex(
    (product) => product.id === productId
  );
  if (productIndex !== -1) {
    title.value = products[productIndex].name;
    price.value = products[productIndex].price;
    gettotal();
    count.style.display = "none";
    category.value = products[productIndex].type;
    let allImageUrls = '';
    if (Array.isArray(products[productIndex].img)) {
      allImageUrls = products[productIndex].img.join(',');
    } else {
      allImageUrls = products[productIndex].img;
    }
    imageurl.value = allImageUrls;
    desc.value = products[productIndex].description;
    submit.innerHTML = "Update";
    mood = "update";
    tmp = productIndex;
    message.innerHTML = "!Update the information of product";
    message.style.background = "rgb(105, 105, 241)";
    message.style.display = "block";
  } else {
    console.log("Product with index", productIndex, "not found.");
  }
  saveProductsToLocalStorage();
}
function deleteAll() {
  products.splice(0);
  showproducts();
  message.innerHTML = "all clothes has ben deleted";
  color();
  message.scrollIntoView({ behavior: "smooth", block: "start" });
}
function color() {
  message.style.background = "rgb(105, 105, 241)";
  message.style.display = "block";
  setTimeout(function () {
    message.style.display = "none";
  }, 3000);
  message.scrollIntoView({ behavior: "smooth", block: "start" });
}
function colorr() {
  message.style.display = "block";
  message.style.background = "red";
  message.innerHTML = "!please enter all the feilds!";
  setTimeout(function () {
    message.style.display = "none";
  }, 3000);
  message.scrollIntoView({ behavior: "smooth", block: "start" });
}
let showallproducts = document.getElementById("showallproductbtn");
showallproducts.onclick = () => {
  showproducts();
};
function filterProducts(category) {
  const productContainer = document.getElementById("showsomeproduct");
  productContainer.innerHTML = "";

  const filteredProducts = products.filter(
    (product) => product.type === category
  );
  //old code before the doctor advice
 /* filteredProducts.forEach((product) => {
    const productBox = document.createElement("div");
    productBox.classList.add("box");

    productBox.innerHTML = `
            <h1>${product.name}</h1>
            <p class="title">${product.description}</p>
            <span class="span">$${product.price.toFixed(2)}</span>
            <img src="${
              Array.isArray(product.img) ? product.img[0] : product.img
            }" alt="${product.name}" class="imagespro" data-index="0">
            <div class="buttons-container">
                <button class="delete">Delete</button>
                <button class="update">Update</button>
            </div>
        `;

    const deleteButton = productBox.querySelector(".delete");
    deleteButton.addEventListener("click", () => {
      products = products.filter((prod) => prod.id !== product.id);
      showFilteredProducts(
        filteredProducts.filter((prod) => prod.id !== product.id)
      );
      message.innerHTML = `Cloth named ${product.name} has been deleted`;
      color();
    });

    const updateButton = productBox.querySelector(".update");
    updateButton.addEventListener("click", () => {
      updatedata(product.id);
    });

    productContainer.appendChild(productBox);

    const productImage = productBox.querySelector("img");
    if (Array.isArray(product.img)) {
      let currentIndex = 0;
      productImage.src = product.img[currentIndex];
      productImage.alt = product.name;
      productImage.classList.add("imagespro");
      productImage.setAttribute("data-index", currentIndex);

      const slideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % product.img.length;
        productImage.src = product.img[currentIndex];
        productImage.setAttribute("data-index", currentIndex);
      }, 2000);
    }
  });

  const btndelete = document.getElementById("deleteall");
  if (products.length > 0) {
    btndelete.innerHTML = `<button onclick="deleteAll()" class="btnform">Delete all (${products.length})</button>`;
  } else {
    btndelete.innerHTML = "";
  }
*/
  typeoffilter='categoryfilter'
  showFilteredProducts(filteredProducts)
}

let searchmood = "title";
function getsearchmood(id) {
  let search = document.getElementById("search");
  if (id == "searchtitle") {
    searchmood = "title";
    search.placeholder = "Search By Title";
  } else {
    searchmood = "category";
    search.placeholder = "Search By Category";
  }
  search.focus();
  search.value = "";
  event.preventDefault();
}
function searchdata(value) {
  const searchMode = searchmood === "title" ? "name" : "type";
  const filteredProducts = products.filter((product) =>
    product[searchMode].toLowerCase().includes(value.toLowerCase())
  );
   typeoffilter='search'
  showFilteredProducts(filteredProducts);
}

function showFilteredProducts(filteredProducts) {
  const productContainer = document.getElementById("showsomeproduct");
  productContainer.innerHTML = "";

  filteredProducts.forEach((product) => {
    const productBox = document.createElement("div");
    productBox.classList.add("box");

    productBox.innerHTML = `
            <h1>${product.name}</h1>
            <p class="title">${product.description}</p>
            <span class="span">$${product.price.toFixed(2)}</span>
            <img src="${
              Array.isArray(product.img) ? product.img[0] : product.img
            }" alt="${product.name}" class="imagespro" data-index="0">
            <div class="buttons-container">
                <button class="delete">Delete</button>
                <button class="update">Update</button>
            </div>
            <button class="addCart">Add To Cart</button>
        `;

    const deleteButton = productBox.querySelector(".delete");
    deleteButton.addEventListener("click", () => {
      products = products.filter((prod) => prod.id !== product.id);
      showFilteredProducts(products);
      saveProductsToLocalStorage()
      message.innerHTML = `Cloth named ${product.name} has been deleted`;
      color();
    });

    const updateButton = productBox.querySelector(".update");
    updateButton.addEventListener("click", () => {
      updatedata(product.id);
    });
    const addtocart=productBox.querySelector('.addCart')
    addtocart.addEventListener('click', () => {
          addToCart(product.id);
      
  })
    productContainer.appendChild(productBox);

    const productImage = productBox.querySelector("img");
    if (Array.isArray(product.img)) {
      let currentIndex = 0;
      productImage.src = product.img[currentIndex];
      productImage.alt = product.name;
      productImage.classList.add("imagespro");
      productImage.setAttribute("data-index", currentIndex);

      const slideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % product.img.length;
        productImage.src = product.img[currentIndex];
        productImage.setAttribute("data-index", currentIndex);
      }, 2000);
    }
    
  });

  const btndelete = document.getElementById("deleteall");
  if (products.length > 0) {
    btndelete.innerHTML = `<button onclick="deleteAll()" class="btnform">Delete all (${products.length})</button>`;
  } else {
    btndelete.innerHTML = "";
  }
  if(typeoffilter==='categoryfilter'){
  showallproducts.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function find() {
  if (search.value !== "") {
    showallproducts.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
let conatctusfrom = document.querySelector(".conatctusfrom");
let contactbtn = document.getElementById("contactbtn");
contactbtn.onclick = function () {
  conatctusfrom.scrollIntoView({ behavior: "smooth", block: "start" });
};
let about = document.querySelector(".about");
let aboutbtn = document.getElementById("aboutbtn");
aboutbtn.onclick = function () {
  about.scrollIntoView({ behavior: "smooth", block: "start"  });
};
let homeshop=document.getElementById('homeshop')
homeshop.onclick=function(){
  showallproducts.scrollIntoView({ behavior: "smooth", block: "start"  });
}
/* function toggleNav() {
    var nav = document.querySelector('nav');
    if (nav.style.display === 'block') {
      nav.style.display = 'none';
    } else {
      nav.style.display = 'block';
    }
  }
*/
