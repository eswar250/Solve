let data=[];
const mainDiv=document.getElementById("results")
fetch("https://fakestoreapi.com/products")
.then(function(res)
{
    console.log(res)
    return res.json()
})
.then(function(p)
{
    console.log(p)
    date=p;
    date.forEach(function(val)
    {
        const img=document.createElement("img")
        img.src=val.image
        img.alt=val.title
        img.style.height="100px"
        img.style.width="100px"
        const title=document.createElement("h1")
        title.textContent=val.title
        const p=document.createElement("p")
        p.textContent=val.price
        const subDiv=document.createElement("div")
        subDiv.appendChild(img)
        subDiv.appendChild(title)
        subDiv.appendChild(p)
        subDiv.classList.add('subDiv')
        mainDiv.appendChild(subDiv)
    });
})