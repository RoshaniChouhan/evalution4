// write js code here corresponding to favourites.

var FavData=JSON.parse(localStorage.getItem("favourites"));
FavData.map(function(elem){
    var tr=document.createElement("tr");


    var th1=document.createElement("td");
th1.innerText=elem.matchNum

    var th2=document.createElement("td");
th2.innerText=elem.teamA



    var th3=document.createElement("td");
th3.innerText=elem.teamB


    var th4=document.createElement("td");
th4.innerText=elem.date

var th5=document.createElement("td");
th5.innerText=elem.venue

var th6=document.createElement("td");
th6.innerText="Delete"
th6.style.color="red"
th6.style.cursor="pointer"
th6.addEventListener("click",delet);
    // AddDelete(elem)
    



tr.append(th1,th2,th3,th4,th5,th6)

document.querySelector("tbody").append(tr)


})
// window.location.href="favourites.html"
function delet(){
    // AddDelete.push(elem)
    // window.location.reload
    event.target.parentNode.remove()
    event.target.parentNode.innerHTML=" "

  localStorage.setItem("favourites",JSON.stringify(FavData))  
}