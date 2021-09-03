    const urlParams = new URLSearchParams(window.location.search);
    const cat = urlParams.get("categories");
    url = "https://kea-alt-del.dk/t7/api/products?category=" + cat;
    
    fetch(url)
     .then(function (res) {
     return res.json();
     })
     .then(function (data) {
     handleProductList(data);
     });
     
    function handleProductList(data) {
     console.log(data);
     data.forEach(showProduct);
    }

    document.querySelector(".nocat").textContent = cat;

    // <article class="smallProduct">
    //     <img
    //       src="https://kea-alt-del.dk/t7/images/webp/640/1163.webp"
    //       alt="Sahara Team India Fanwear Round Neck Jersey"
    //     />
    //     <p class="price"><span>Prev.</span> DKK 1595,-</p>
    //     <div class="discounted">
    //       <p>Now DKK 1560,-</p>
    //       <p>-34%</p>
    //     </div>
    //     <a href="product.html">Read More</a>
    //   </article>


    function showProduct(product){
        console.log(product);
        //soldOut onSale
        //grab the template
        const template = document.querySelector("#smallProductTemplate").content;

        //clone it
        const copy = template.cloneNode(true);
        //change content
        copy.querySelector("a").setAttribute("href", "product.html?id=" + product.id);
        copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
        copy.querySelector(".subtle").textContent = `${product.articletype} | ${product.brandname}`;
        copy.querySelector("h3").textContent = product.productdisplayname;
        copy.querySelector(".price").textContent = product.price;

        if(product.soldout){
            copy.querySelector("article").classList.add("soldOut");
        } 

        if(product.discount){
            copy.querySelector("article").classList.add("onSale");
    //        <div class="discounted">
    //        <p>Now DKK 1560,-</p>
    //        <p>-34%</p>
    //        </div>
        copy.querySelector(".discounted p").textContent = Math.ceil(product.price - (product.price/100 * product.discount));
        copy.querySelector(".discountclass").textContent = product.discount;
        }
        //grab parent
        const parent = document.querySelector("main");

        //append
        parent.appendChild(copy);
    }