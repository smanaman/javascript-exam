async function card() {
   try {
    let res=await fetch('db.json')
    let final=await res.json()
    console.log(final);

    let cardappend=document.getElementById('products')
    final.forEach(element => {
        cardappend.innerHTML +=`<div class="product-grid">
            
        <div class="product">
            <img src="${element.imgsrc}" alt="Gadget 1">
            <h3>${element.imgtitle}</h3>
            <p>High-quality gadget that meets all your needs.</p>
            <span class="price">${element.imgprice}</span>
            <button onclick="addto('${element.imgsrc}','${element.imgtitle}','${element.imgprice}')">${element.btnaddto}</button>
        </div>


    </div>`
      
    });

    
    
   } catch (error) {
    console.log(error);
    
   }
}
card()
let span=document.getElementById('span')
let count=0;
function addto(img,title,prise){

      let cartobj={
        img,
        title,
        prise
      }
        count++
        span.textContent=count
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
        
      cart.push({img,title,prise})
      console.log(cart);
      
      localStorage.setItem('cart',JSON.stringify(cart))
      
    }

