async function getData(){
const response=await axios.get("https://dummyjson.com/products");
const products=response.data.products;
console.log(products);
const getPosts=products.map(function(ele){
return `
<h2> ${ele.title}</h2>
<img src= ${ele.thumbnail} />
<a href=details.html?id=${ele.id}> details </a>

`
}).join("");
document.querySelector(".data").innerHTML=getPosts;
}

getData();