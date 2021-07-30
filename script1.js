let prd_nm=document.querySelectorAll(".add_product");
let addbtn=document.querySelectorAll('.product-addtoCart');
let d_items=document.getElementById("prd_nm");

addProduct=(prd_nm) => 
{
    let data={
        name :prd_nm,
        qty:1
    };
    let cart1=[];
    if(localStorage.getItem("prd_name") === null)
    {
        localStorage.setItem("prd_name",JSON.stringify(data));
        console.log(JSON.parse(localStorage.getItem("prd_name")));
    } 
    else
    {
            let cart = JSON.parse(localStorage.getItem("prd_name"));
            for( var i in cart)
            {
                if(cart[i] === data.name)
                {
                    cart[i].qty = cart[i].qty + 1;
                    localStorage.setItem("prd_name",JSON.stringify(cart));
                    console.log(JSON.parse(localStorage.getItem("prd_name")));
               // break;
                } 
                else 
                {
                    //let add=JSON.parse(localStorage.getItem("prd_name"));
                    data.qty=1;
                    cart1.push(data);
                    localStorage.setItem("prd_name",JSON.stringify(cart1));
                    console.log(JSON.parse(localStorage.getItem("prd_name")));
                }
            }
        
    }
}  
addbtn.forEach(element => 
{
        element.addEventListener('click',event=>
        {
            var prd_nm=document.querySelector(`#${event.target.id}`).parentElement.querySelector('.add_product').innerText;  
            addProduct(prd_nm);
        });
});