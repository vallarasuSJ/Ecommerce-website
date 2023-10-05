//products details
let existingProducts = [
  {
    id: 1,
    title: "The Hurricane Wars (B&N Exclusive Edition)",
    price: 2200,
    description:
      "A remarkable debut fantasy inspired by Southeast Asian mythology,Hurricane Wars features an enemies-to-loversromance, incredible world-building and a unique magic system.It’s everything you love about Romantasy in one delectable package.",
    image:
      "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780063358942_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
  },
  {
    id: 2,
    title: "Starling House (B&N Exclusive Edition)",
    price: 1500,
    description:
      "A remarkable debut fantasy inspired by Southeast Asian mythology,Hurricane Wars features an enemies-to-loversromance, incredible world-building and a unique magic system.It’s everything you love about Romantasy in one delectable package.",
    image:
      "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781250323217_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
  },
  {
    id: 3,
    title: "A River of Golden Bones: Book One of the Golden Court",
    price: 1200,
    description:
      "A remarkable debut fantasy inspired by Southeast Asian mythology,Hurricane Wars features an enemies-to-loversromance, incredible world-building and a unique magic system.It’s everything you love about Romantasy in one delectable package.",
    image:
      "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780063291423_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
  },
  {
    id: 4,
    title: "The Serpent and the Wings of Night",
    price: 2180,
    description:
      "A remarkable debut fantasy inspired by Southeast Asian mythology,Hurricane Wars features an enemies-to-loversromance, incredible world-building and a unique magic system.It’s everything you love about Romantasy in one delectable package.",
    image:
      "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781250343178_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
  },
  {
    id: 5,
    title: "Yumi and the Nightmare Painter: A Cosmere Novel",
    price: 2500,
    description:
      "A remarkable debut fantasy inspired by Southeast Asian mythology,Hurricane Wars features an enemies-to-loversromance, incredible world-building and a unique magic system.It’s everything you love about Romantasy in one delectable package.",
    image:
      "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781250899699_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
  },
  {
    id: 6,
    title: "A Fire in the Flesh ",
    price: 1100,
    description:
      "A remarkable debut fantasy inspired by Southeast Asian mythology,Hurricane Wars features an enemies-to-loversromance, incredible world-building and a unique magic system.It’s everything you love about Romantasy in one delectable package.",
    image:
      "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781957568614_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
  },
  {
    id: 7,
    title: "Sword Catcher (B&N Exclusive Edition)",
    price: 3000,
    description:
      "A remarkable debut fantasy inspired by Southeast Asian mythology,Hurricane Wars features an enemies-to-loversromance, incredible world-building and a unique magic system.It’s everything you love about Romantasy in one delectable package.",
    image:
      "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780593600146_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
  },
  {
    id: 8,
    title: "A River of Golden Bones: Book One of the Golden Court",
    price: 1200,
    description:
      "A remarkable debut fantasy inspired by Southeast Asian mythology,Hurricane Wars features an enemies-to-loversromance, incredible world-building and a unique magic system.It’s everything you love about Romantasy in one delectable package.",
    image:
      "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780063291423_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
  },
];
// Default login users
let loginUsers = [
  {
    id: 1,
    email: "kv@admin.com",
    password: "kv",
  },
  {
    id: 2,
    email: "vallarasu@gmail.com",
    password: "vallarasu",
  },
  {
    id: 3,
    email: "kutty@gmail.com",
    password: "kutty",
  },
];

// if (!localStorage.getItem("users")) {
//     localStorage.setItem("users", JSON.stringify(loginUsers));
//   }
//  if(!localStorage.getItem("products")){
//     localStorage.setItem("products",JSON.stringify(existingProducts));
//  }

//load into localStorage
window.addEventListener("load", () => {
  if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify(loginUsers));
  }

  if (!localStorage.getItem("products")) {
    localStorage.setItem("products", JSON.stringify(existingProducts));
  }

  if (location.pathname === "/Ecommerce-website/admin.html") {
    loadProducts();
  }

  if (location.pathname === "/Ecommerce-website/index.html") {
    loadIndexProducts();
  }

  if (location.pathname === "/Ecommerce-website/carts.html") {
    loadCartProducts();
  }
  if (
    location.pathname === "/Ecommerce-website/carts.html" ||
    location.pathname === "/Ecommerce-website/index.html" ||
    location.pathname === "/Ecommerce-website/orders.html"
  ) {
    updateCarts();
  }

  if (location.pathname === "/Ecommerce-website/orders.html") {
    loadOrder();
  }

  if (location.pathname === "/Ecommerce-website/updateProduct.html") {
    updateproduct();
  }

  if (location.pathname === "/Ecommerce-website/adminOrders.html") {
    loadAdminOrder();
  }
});

//login
let loginHandler = () => {
  const emailRef = document.getElementById("email");
  const passwordRef = document.getElementById("password");
  const errorRef = document.getElementById("error");

  if (emailRef.value.length > 0 && passwordRef.value.length > 0) {
    let users = JSON.parse(localStorage.getItem("users"));
    const loginUser = users.find(
      (user) =>
        user.email === emailRef.value && user.password === passwordRef.value
    );

    const validEmailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRef.value.match(validEmailCheck)) {
      errorRef.innerText = "invalid email address";
    } else {
      if (loginUser) {
        if (emailRef.value == "kv@admin.com" && passwordRef.value == "kv") {
          location.replace("/Ecommerce-website/admin.html");
        } else {
          sessionStorage.setItem("userId", loginUser.id);
          location.replace("/Ecommerce-website/index.html");
        }
      }
      if (!loginUser) {
        errorRef.innerHTML = "Login credentials is incorrect!!";
      }
    }
  } else {
    errorRef.innerText = "Email or password is empty!!";
  }
};

//random number
let randomNum = (max = 1000) => {
  return Math.floor(Math.random() * max);
};

//register
const registerHandler = () => {
  const userRef = document.getElementById("username");
  const emailRef = document.getElementById("userEmail");
  const passwordRef = document.getElementById("userPassword");
  const confirmPasswordRef = document.getElementById("confirmPassword");
  const errorRef = document.getElementById("error");

  const validEmailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (
    userRef.value.length > 0 &&
    emailRef.value.length > 0 &&
    passwordRef.value.length > 0 &&
    confirmPasswordRef.value.length > 0
  ) {
    if (!emailRef.value.match(validEmailCheck)) {
      errorRef.innerText = "invalid email";
    } else {
      if (passwordRef.value === confirmPasswordRef.value) {
        let users = JSON.parse(localStorage.getItem("users"));

        users.push({
          id: randomNum(),
          email: emailRef.value,
          password: passwordRef.value,
        });

        localStorage.setItem("users", JSON.stringify(users));

        location.replace("/Ecommerce-website/login.html");
      } else {
        errorRef.innerText = "password doesn't match!!";
      }
    }
  } else {
    errorRef.innerText = "Fields are empty!!";
  }
};

//logoutHandler()
const logoutHandler = () => {
  location.replace("/Ecommerce-website/login.html");
};

//addProductHandler()
const addProductHandler = () => {
  location.replace("/Ecommerce-website/addProduct.html");
};

//addProduct
const add = () => {
  const nameref = document.getElementById("name");
  const priceref = document.getElementById("price");
  const imageref = document.getElementById("image");
  const descriptionref = document.getElementById("description");

  let products = JSON.parse(localStorage.getItem("products"));
  products.push({
    id: randomNum(),
    name: nameref.value,
    price: priceref.value,
    image: imageref.value,
    description: descriptionref.value,
  });

  localStorage.setItem("products", JSON.stringify(products));
  location.replace("/Ecommerce-website/admin.html");
};

//edit handler
const editHandler = (id) => {
  sessionStorage.setItem("productId", id);
};

//update Product
const updateproduct = () => {
  const nameref = document.getElementById("name");
  const priceref = document.getElementById("price");
  const imageref = document.getElementById("image");
  const descriptionref = document.getElementById("description");

  let products = JSON.parse(localStorage.getItem("products"));

  let productId = parseInt(sessionStorage.getItem("productId"));
  let findId = products.filter((c) => c.id === productId);
  nameref.value = findId[0].title;
  priceref.value = findId[0].price;
  imageref.value = findId[0].image;
  descriptionref.value = findId[0].description; 

  products = products.map((c)=>{    
    if(c.id===productId){
      return{
        ...c,
        title:nameref.value,
        price:priceref.value,
        image:imageref.value,
        description:descriptionref.value,
      };
    }
    else{
      return c;
    }
  })
  // console.log(products)
  localStorage.setItem("products", JSON.stringify(products)); 
};

const update = () => {
  const nameref = document.getElementById("name");
  const priceref = document.getElementById("price");
  const imageref = document.getElementById("image");
  const descriptionref = document.getElementById("description");

  let products = JSON.parse(localStorage.getItem("products"));
  let prodId=parseInt(sessionStorage.getItem("productId"));

  products = products.map((c)=>{    
    if(parseInt(c.id)===prodId){
      return{
        ...c,
        title:nameref.value,
        price:priceref.value,
        image:imageref.value,
        description:descriptionref.value,
      };
    }
    else{
      return c;
    }
  })
  // console.log(products)
  localStorage.setItem("products", JSON.stringify(products));  
  location.href="/Ecommerce-website/admin.html";
};

//loading products in admin page
const loadProducts = () => {
  const productRef = document.getElementById("productsTable");
  const products = JSON.parse(localStorage.getItem("products"));
  let tableBody = "";

  for (let product of products) {
    tableBody += `<tr><td><img src="${product.image}" alt="image" class="img-fluid img-thumbnail" style="width:200px;height:"50px;"/></td>
    <td>${product.title}</td>
    <td>${product.description}</td>
    <td>${product.price}</td>
    <td class="d-flex justify-content-center">
      <a href="/Ecommerce-website/updateProduct.html" onclick="editHandler(${product.id})" class="btn btn-primary "> 
      Edit</a>
      <button type="button" onclick="deleteHandler(${product.id})" class="btn btn-danger mx-3">
        Delete
      </button>
    </td>
  </tr>`;
  }
  productRef.innerHTML = tableBody;
};

//load products in  index page
const loadIndexProducts = () => {
  const indexTableRef = document.getElementById("indexTable");
  const products = JSON.parse(localStorage.getItem("products"));

  let table = "";

  for (let product of products) {
    table += `<div class="col-md-3 mt-2">
    <div class="card">
      <div class="card-body">
        <div class="card-img-actions">
          <img
            src="${product.image}"
            class="card-img-top"
            height="370"
            alt=""
          />
        </div>
      </div>
      <div class="card-body bg-light text-center">
        <div class="mb-2">
          <h6 class="font-weight-semibold mb-2">
            ${product.title}
          </h6>
          <p class="text-muted">
          ${product.description}
          </p>
        </div>

        <h3 class="mb-0 font-weight-semibold py-2">₹ ${product.price}</h3>
        <button
          type="button"
          onclick="addCart(${product.id})" 
          class="btn btn-outline-success pt-2" >Add to cart
        </button>
      </div>
    </div>
  </div>`;
  }

  indexTableRef.innerHTML = table;
};

//delete product
const deleteHandler = (id) => {
  const products = JSON.parse(localStorage.getItem("products"));
  const filterProducts = products.filter((product) => product.id !== id);
  localStorage.setItem("products", JSON.stringify(filterProducts));
  location.href = "/Ecommerce-website/admin.html";
};

//add cart in localstorage
const addCart = (id) => {
  let products = JSON.parse(localStorage.getItem("products"));
  const product = products.find((product) => product.id === parseInt(id));
  let userId = parseInt(sessionStorage.getItem("userId"));
  let cart = [];
  if (sessionStorage.getItem("userId")) {
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    const cartProduct = cart.find(
      (c) => c.userId === parseInt(userId) && c.id === parseInt(id)
    );
    if (cartProduct) {
      cart = cart.map((c) => {
        if (c.id === parseInt(id) && c.userId === parseInt(userId)) {
          return { ...c, count: c.count + 1 };
        } else {
          return c;
        }
      });
    } else {
      cart.push({
        userId: parseInt(userId),
        count: 1,
        ...product,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCarts();
  }
};

//modify or update carts
const updateCarts = () => {
  const cartCountRef = document.getElementById("cartCount");

  if (sessionStorage.getItem("userId")) {
    const userId = parseInt(sessionStorage.getItem("userId"));
    if (localStorage.getItem("cart")) {
      const cart = JSON.parse(localStorage.getItem("cart"));
      const userCart = cart.filter((c) => c.userId === userId);
      if (userCart.length > 0) {
        const cartCount = userCart.reduce((acc, curr) => {
          acc += curr.count;
          return acc;
        }, 0);
        cartCountRef.innerText = `Cart - ${cartCount}`;
      }
    }
  }
};

//load cart in page
const loadCartProducts = () => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  const totalRef = document.getElementById("total");
  const cartsRef = document.getElementById("loadCarts");
  let total = 0;
  const userId = parseInt(sessionStorage.getItem("userId"));

  for (let cartProduct of cart) {
    total = total + parseInt(cartProduct.count) * parseInt(cartProduct.price);
  }

  let table = "";
  for (let carts of cart) {
    const totalPrice = parseInt(carts.count) * parseInt(carts.price);
    table += ` <tr>
    <td><img src="${carts.image}" alt="image" class="img-fluid img-thumbnail" style="width:100px;height:"50px;"/></td>
    <td>${carts.title}</td>
    <td>${carts.count}</td>
    <td>₹ ${carts.price}</td>
    <td>₹ ${totalPrice}</td>
  </tr>`;
  }
  cartsRef.innerHTML = table;
  totalRef.innerText = `total - ₹ ${total}`;
};

//checkout handler

const checkOut = () => {
  if (sessionStorage.getItem("userId")) {
    if (localStorage.getItem("cart")) {
      const cart = JSON.parse(localStorage.getItem("cart"));
      const userId = parseInt(sessionStorage.getItem("userId"));

      const userCart = cart.filter((c) => c.userId === userId);

      let orders = [];

      if (localStorage.getItem("orders")) {
        orders = JSON.parse(localStorage.getItem("orders"));
      }
      orders.push({
        orderId: randomNum(),
        time: Date.now(),
        products: userCart,
      });
      const otherUserCart = cart.filter((c) => c.userId !== userId);
      localStorage.setItem("cart", JSON.stringify(otherUserCart));
      localStorage.setItem("orders", JSON.stringify(orders)); 
      updateCarts();  

    }
  }
};

//loading order

const loadOrder = () => {
  const tableRef = document.getElementById("table");
  if (sessionStorage.getItem("userId")) {
    if (localStorage.getItem("orders")) {
      const orders = JSON.parse(localStorage.getItem("orders"));

      let table = "";

      for (let order of orders) {
        let product = "";
        let total = 0;
        for (let prod of order.products) {
          product += `<p>${prod.count} * ${prod.title}</p>`;
          total += prod.count * prod.price;
        }

        let year = new Date().getFullYear();
        let month = new Date().getMonth();
        let day = new Date().getDate();

        table += `<tr>
        <th scope="row">${order.orderId}</th>
        <td>${day}-${month}-${year}</td>
        <td>${product}</td>
        <td> ₹ ${total}</td>
        <td>${order.status}</td>
      </tr>`;
      }
      tableRef.innerHTML = table;
    }
  }
};

//admin order page

const loadAdminOrder = () => {
  const orders = JSON.parse(localStorage.getItem("orders"));
  const tableRef = document.getElementById("adminTable");
  const users = JSON.parse(localStorage.getItem("users"));
  console.log(users);
  let table = "";
  for (let order of orders) {
    let product = "";
    let total = 0;
    let userId = "";
    for (let prod of order.products) {
      product += `<p>${prod.count} * ${prod.title}</p>`;
      total += prod.count * prod.price;
      userId += prod.userId;
    }
    let year = new Date().getFullYear();
    let month = new Date().getMonth();
    let day = new Date().getDate();

    table += `<tr>
    <th scope="row">${order.orderId}</th>
    <td>${day}-${month}-${year}</td>
    <td>${userId}</td>
    <td>${product}</td>
    <td>${total}</td>
    <td><select class="form-select btn btn-primary" id="status-${order.orderId}" aria-label="Default select example">
    <option value="pending">pending</option>
    <option value="delivered">delivered</option>
    <option value="cancelled">cancelled</option> 

  </select></td>
  </tr>`;
  }
  tableRef.innerHTML = table;

  for (let order of orders) {
    statusRef = document.getElementById(`status-${order.orderId}`);
    statusRef.value = order.status;
   //console.log(statusRef.value); 
    statusRef.addEventListener("change", () => {
      const orders = JSON.parse(localStorage.getItem("orders"));
      const updateStatus = orders.map((c) => {
        if (c.orderId == parseInt(order.orderId)) {
          return {
            ...c,
            status: statusRef.value,
          };
        } else {
          return c;
        }
      }); 
      
      localStorage.setItem("orders", JSON.stringify(updateStatus));  
    });
  }
};
