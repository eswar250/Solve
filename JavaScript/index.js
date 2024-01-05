const para = document.getElementsByTagName('p')
let count = 0;

function incr ()
{
   if(count<25){
       count++
        para[0].textContent = count
        para[1].textContent = "incremented"  
   }
   else{
       alert("enter the value is greater to 25")
   }
}
function decr ()
{
   if (count > 0)
   {
     count--
     para[0].textContent = count
     para[1].textContent = "decremented"
   }
   else
   {
       alert("don't decrease than zerooo")
       }
  
}
function reset ()
{
   count = 0;
   para[0].textContent = count
   para[1].textContent = ""
}
