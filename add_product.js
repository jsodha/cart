let prd_nm=document.querySelectorAll(".add_product");
let addbtn=document.querySelectorAll('.product-addtoCart');
let d_items=document.getElementById("prd_nm");

            addProduct=function(prd_nm)
            {  let cart=[];
                var products = 
                {
                    product:
                    [{name:prd_nm,
                    quantity:1}]
                }
                let list=document.createElement("h3");
                let p_name=document.createElement("label");
                if (localStorage.getItem('prd_name') == null)
                {   
                    let data=JSON.stringify(products);
                    localStorage.setItem("prd_name",data);
                    let prd=JSON.parse(localStorage.getItem("prd_name")); 
                    p_name.innerText=prd.product[0].name;
                    d_items.appendChild(list);
                    list.appendChild(p_name); 
                } 
                else
                {
                    let prd=JSON.parse(localStorage.getItem("prd_name")); 
                    for(var i in prd.product)
                    {
                        if(prd.product[i].name===prd_nm)
                        {
                            alert("data allready added");
                            break;
                        }
                        else
                        {
                            let d=prd.product.push(prd_nm);
                            let data=JSON.stringify(d);
                            localStorage.setItem("prd_name",data);
                            
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