function navbar()
{
    return `
        <h3 id="logo">Food App</h3>
        <input id="ser" type="text" placeholder="Search Recipies">
        <h3 id="sin">SignUp</h3>
        <div id="res">
            
        </div>`
}


function details()
{
    return `
        <div id="mi"></div>
        <div id="details">
            <div><h3>Dish Name :&nbsp;&nbsp;</h3><h2 id="t"></h2></div>
            <div><h3>Ingredients :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3><span id="act"></span></div>
            <div><h3>Recipie :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3><span id="rd"></span></div>
            <div><h3>Type :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3><span id="rat"></span></div>
        </div>`
}
var xxx = 0
async function getval(url)
    {
        console.log(url)
        var res = await fetch(url)
        var data = await res.json()
        console.log(data.meals)
        if((data.meals).length>0 && xxx>0)
        {
            append(data.meals)
            xxx++
        }
        else if(xxx==0)
        {
            show(data.meals[0])
            xxx++
        }
    }
    
    function append(data)
     {
        var res1 = document.querySelector("#res")
         res1.innerHTML = ""
        res1.style.display = "block"
        console.log("r")
        data.forEach(element => {
            var box = document.createElement("div")
            box.addEventListener("click",function(){
                show(element)
            })

            var img = document.createElement("img")
            img.src = element.strMealThumb

            var name = document.createElement("h3")
            name.innerText = element.strMeal
            console.log(name)
            box.append(img,name)
            res1.append(box)
        });
     }


     function show(el)
     {
        console.log(el)
        var res1 = document.querySelector("#res")
        res1.style.display = "none"
        var b = ""
        var z = "strIngredient"
        var i = 1
        var b = ""
        for(var k in el)
        {
            if(k == z+i)
            {
                if(el[k]=="")
                {
                    break;
                }
                else
                {
                    b=b+i+")"+el[k]+", "
                    i++
                }
            }
        }
        console.log(b)
        
        document.querySelector("#mov").style.display = "flex"
        document.querySelector("#mi").innerHTML=""
        document.querySelector("#t").innerHTML=""
        document.querySelector("#act").innerHTML=""
        document.querySelector("#rd").innerHTML=""
        document.querySelector("#rat").innerHTML=""
        var img = document.createElement("img")
        img.src = el.strMealThumb
        document.querySelector("#mi").append(img)
        document.querySelector("#t").append(el.strMeal)
        document.querySelector("#act").append(b)
        document.querySelector("#rd").append(el.strInstructions)
        document.querySelector("#rat").append(el.strTags)
     }

export {navbar,details,getval,append,show}