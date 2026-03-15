const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

const container = document.getElementById("wishlistGrid");

if(wishlist.length === 0){

container.innerHTML = `
<div class="empty-wishlist">
<h2>Your wishlist is empty</h2>
<p>Add glasses you like to your wishlist.</p>
<a href="shop.html" class="btn">Shop Now</a>
</div>
`;

}else{

wishlist.forEach(id => {

const product = products.find(p => p.id === id);

if(product){

const card = `
<div class="wishlist-card">

<img src="${product.images[0]}" alt="${product.name}">

<h3>${product.name}</h3>

<p>${product.price} FCFA</p>

<button onclick="removeFromWishlist('${product.id}')">
Remove
</button>

</div>
`;

container.innerHTML += card;

}

});

}

function removeFromWishlist(id){

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

wishlist = wishlist.filter(item => item !== id);

localStorage.setItem("wishlist", JSON.stringify(wishlist));

location.reload();

}