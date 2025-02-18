

// sticky navigation bar

window.onscroll = function () { myFunction() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    }
    else {
        navbar.classList.remove("sticky");
    }
}


//for close and open cart

function openNav() {
    document.getElementById("cart_section_main").style.display = "block";

    document.getElementById("cart_section_main").style.transition = "1s";
    document.getElementById("cart_section_main").style.width = "300px";
    document.getElementById("cart_section_main").style.minWidth = "300px";
    document.getElementById("div_shop_content").style.padding = "0";
}

function closeNav() {
    document.getElementById("cart_section_main").style.display = "none";

    document.getElementById("div_shop_content").style.paddingRight = "250px";

    document.getElementById("cart_section_main").style.transition = "1s";
}



function addToCart(btn) {
    var itemCard = btn.closest('.card');
    var itemName = itemCard.querySelector('.card_header').innerText;
    var itemPrice = parseFloat(itemCard.querySelector('.price').innerText.replace('$', ''));
    var itemQuantity = parseInt(itemCard.querySelector('.select_quentity').value);

    var cartContainer = document.getElementById('cart_container');
    var cartItem = document.createElement('div');
    cartItem.classList.add('cart_item');

    cartItem.innerHTML = `
            <div class="cart_item_container">
    
                <div style="display:flex; flex-direction: row; align-items: center; flex-wrap: wrap; justify-content: space-around; background-color: #f1fafc; border-radius: 6px; border: none; padding: 2px; margin: 5px; border: 2px solid #0e86d4;">
    
                    <div class="cart_item_img">
                        <img src="img/pack.png" alt="item" style="width: 70px; height: 70px;">
                    </div>
    
                    <div class="cart_item_details">
                        <p style="width:100px; font-size:13px;">${itemName}</p>
                        <p style="width:100px; font-size:13px;">Price: $${itemPrice.toFixed(2)}</p>
                        <p style="width:100px; font-size:13px;">Quantity: 
                            <input type="number" class="input_quantity" value="${itemQuantity}" min="1" onchange="updateQuantity(this)" style="width:25px; padding:2px;">
                        </p>
                    </div>
    
                    <div class="cart_item_controls">
                        
                            <img src="img/recycle-bin.png" alt="remove" style="width: 15px; height: 15px; border-radius: 50%; border: 1px solid black; padding:2px;"class="btn_remove" onclick="removeFromCart(this)"  title="Remove">
                        
                    </div>
                </div>
    
            </div>
        `;


    cartContainer.appendChild(cartItem);

    updateTotal();
}

function removeFromCart(btn) {
    var cartItem = btn.closest('.cart_item');
    cartItem.remove();
    updateTotal();
}

function updateQuantity(input) {
    var newQuantity = parseInt(input.value);
    if (newQuantity < 1) {
        input.value = 1;
    }
    updateTotal();
}

function updateTotal() {
    var total = 0;
    var cartItems = document.querySelectorAll('.cart_item');
    cartItems.forEach(function (cartItem) {
        var priceText = cartItem.querySelector('.cart_item_details p:nth-child(2)').textContent;
        var price = parseFloat(priceText.replace(/[^0-9.-]+/g, "")); // Extract digits and dots from price text
        var quantity = parseInt(cartItem.querySelector('.input_quantity').value);
        console.log("Price:", price, "Quantity:", quantity); // Debugging
        total += price * quantity;
    });
    if (!isNaN(total)) {
        document.getElementById('total').value = total.toFixed(2);
    } else {
        document.getElementById('total').value = "0.00"; // Set total to zero if NaN
    }
}



function close_chekout() {
    document.getElementById("div_payment_main").style.display = "none";
    document.body.style.opacity = "1";
}

function open_checkout() {
    document.getElementById("div_payment_main").style.display = "block";
    document.getElementById("div_payment_main").style.opacity = "1";
    document.getElementById("cart_section_main").style.transition = "1s";
}


// for debugging purposes

function addHoverEffect(element) {
    console.log("Adding hover effect");
    var card = element.querySelector('.card');
    console.log(card);
    card.classList.add('hover');
}

function removeHoverEffect(element) {
    console.log("Removing hover effect");
    var card = element.querySelector('.card');
    console.log(card);
    card.classList.remove('hover');
}
