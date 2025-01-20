
async function getdata() {
    const data = await fetch("https://fakestoreapi.com/products").then(res => res.json())

    data.forEach(product => {
        const card = document.createElement("div");
        card.className = "card";

        let img = document.createElement("img")
        img.src = product.image
        img.style.width = "250px"

        let title = document.createElement("div")
        title.className = "title"
        title.textContent = product.title

        let price = document.createElement("div")
        price.className = "price"
        price.textContent = `$${product.price}`

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(price);

        document.body.append(card)
    })
}
getdata()