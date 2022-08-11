var signd = JSON.parse(localStorage.getItem("user"))
    if(signd)
    {
        document.querySelector("#sin").innerHTML = signd.name
    }
    function sign()
    {
        window.open("signup.html","_self")
    }
    
    var id
    function rec()
    {
        if(id)
        {
            clearTimeout(id)
        }
        id = setTimeout(function(){
            getval()
        },1000)
    }

    async function getval()
    {
        var inp = document.querySelector("#ser").value
        var url = "https://www.themealdb.com/api/json/v1/1/search.php?s="+inp
        var res = await fetch(url)
        var data = await res.json()
        console.log(data.meals)
        if((data.meals).length>0)
        {
            append(data.meals)
        }
    }
    var res1 = document.querySelector("#res")
     function append(data)
     {
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