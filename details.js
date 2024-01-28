async function getDetails(){
    const urlParams=new URLSearchParams(window.location.search);
    const id=urlParams.get("id");
    const response=await axios.get(`https://dummyjson.com/products/${id}`);
    products=response.data
    console.log(products);
    document.querySelector(".details p").textContent=products.title;
    document.querySelector(".details img").src=products.thumbnail;





}
getDetails();


