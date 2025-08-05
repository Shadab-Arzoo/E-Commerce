const Products = document.querySelector(".products");
const Product = async () => {
    try {
        const response = await  fetch("http://localhost:5000/api/products");
        const  data = await response.json();
        data.forEach(i => {
            const card = document.createElement("div");
            card.innerHTML =`
            <img src ="${i.image}" alt="${i.title}">
            <h3>${i.title}</h3>
            <p>$${i.price}</p>
            <p>${i.description}</p>`;
            card.classList.add("card");
            Products.appendChild(card);
        });
    } catch (error) {
        console.log("Error Found")
    }
}
Product();