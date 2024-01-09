let body=[]
fetch("https://jsonplaceholder.typicode.com/posts")
.then(function(ele)
{
    console.log(ele)
    return ele.json()
})
.then(function(val)
{   
    const img=document.createElement("img")
    img.src=val.body
    img.alt=val.title
    img.style.height="100px"
    img.style.width="100px"
    mainDiv.appendChild(img)
})
