document.addEventListener('DOMContentLoaded',()=>{
    const products = JSON.parse(localStorage.getItem("products"));
        const container = document.querySelector(".container");
        console.log(products)
  const itemId = window.itemId;
  const product = products.find((product) => product.id == itemId);
  if (product) {
    const productHTML = `
    <div class="product-container">
    <div class="image">
      <img src="${product.img[0]}" alt="${product.name}">
    </div>
    <div class="info">
      <h2>${product.name}</h2>
      <p>$${product.price}</p>
      <div class="stock-status ${product.qty > 0 ? 'in-stock' : 'out-of-stock'}">
        ${product.qty > 0 ? 'In Stock' : 'Out of Stock'}
      </div>
      <div class="description-toggle">
        <div class="description-header">
          <h3>Description</h3>
          <span class="toggle-icon">&gt;</span>
        </div>
        <div class="description-content">
          <p>${product.description}</p>
          <hr class="line">
        </div>
      </div>
      <div class="sizeitem">
        <p>Select a size</p>
        <div class="sizeavailable">
          ${product.size
            .map(
              (size) => `
            <button ${size.available ? "" : "class='notavailable'"}>${
                size.available ? size.name : `<strike>${size.name}</strike>`
              }</button>
          `
            )
            .join("")}
        </div>
      </div>
         ${product.qty>0? ` <div class="quantityitem">
          <p>Select quantity</p>
         <div class="quantity-container">
          <input type="number" min="1" max="${product.qty}" value="1" class="quantity-input">
          <span class="quantity-info">qty available: ${product.qty}</span>
        </div>
      </div> 
      <div class="add">
      <button class="addtobag">Add To Bag</button>
      </div>`:`<div class="qty-check">Sorry No Qty Available </div>
      <div class="add">
      <button class="addtobag notavailable"><strike>Add To Bag</strike></button>
      </div>`}
  
    </div>
    </div>
    <div class="recommended-products">
      <h3>Recommended for You</h3>
      <div class="scroll-container" id="recommended-products-container">
      </div>
    </div>
  `;
  
  
  
  
  
    container.innerHTML = productHTML;
    const descriptionToggle = document.querySelector(".description-toggle");
    const toggleIcon = descriptionToggle.querySelector(".toggle-icon");
    
    descriptionToggle.addEventListener("click", () => {
      descriptionToggle.classList.toggle("active");
    });
    const updateRecommendedProducts = (recommendedIds) => {
      const recommendedProductsContainer = document.getElementById("recommended-products-container");
      const recommendedProducts = products.filter(p => recommendedIds.includes(p.id));
  
      recommendedProductsContainer.innerHTML = recommendedProducts
      .map(
        (recProduct) => `
      <div class="recommended-product" data-id="${recProduct.id}">
        <div class="info-button" title="More Info"> <a href="itemdetails.html?id=${recProduct.id}">&#8505;</a></div>
        <img src="${recProduct.img[0]}" alt="${recProduct.name}">
        <h4>${recProduct.name}</h4>
      </div>
    `
      )
      .join("");
  
    };
    updateRecommendedProducts(product.recommanded);
    const sizeButtons = document.querySelectorAll(".sizeavailable button");
    sizeButtons.forEach((button) => {
      button.addEventListener("click", function () {
        sizeButtons.forEach((btn) => btn.classList.remove("selected"));
        if (!button.classList.contains("notavailable")) {
          button.classList.add("selected");
        }
      });
    });
    document.querySelector(".addtobag").addEventListener("click", () => {
      const selectedSizeButton = document.querySelector(
        ".sizeavailable button.selected"
      );
      if (!selectedSizeButton) {
        alert("Please select a size.");
        return;
      }
      else if(product.qty<1){
        alert("no qty available")
      }
  
      const selectedSize = selectedSizeButton.textContent;
      const quantityInput = document.querySelector(".quantity-input");
      const selectedQuantity = parseInt(quantityInput.value, 10);
  
      if (selectedQuantity < 1 || selectedQuantity > product.qty) {
        alert(`Please select a quantity between 1 and ${product.qty}.`);
        return;
      }
  
      const itemToSave = {
        product_id:product.id,
        /*category:product.category,
        name: product.name,
        src: product.img[0],
        price: product.price,
        size: selectedSize,*/
        quantity: selectedQuantity
      }
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const existingItemIndex = cart.findIndex(item => item.product_id === itemToSave.product_id);
  
  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity += itemToSave.quantity;
  } else {
    cart.push(itemToSave);
  }
      localStorage.setItem("cart", JSON.stringify(cart));
  alert("the item is added successfuly go to the bag to see it")
    });
  } else {
    container.innerHTML = "Product not found";
  }
  
  });
  
  
  