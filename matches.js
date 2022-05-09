// write js code here corresponding to matches.html
var dataArr=JSON.parse(localStorage.getItem("schedule"))
// console.log(dataArr);
var FavData=JSON.parse(localStorage.getItem("favourites"))||[]

//  var filterData=document.querySelector("#filterVenue").value;
//     console.log(filterData)

//     var output=filterData.sort(function(a,b){
//         return(a-b)
//     })
//     console.log(output)
//    var out=filterData.filter(function(elem,ind,){
//     return a-b
// })
// console.log(out)
dataArr.map(function(elem){


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
th6.innerText="favourite"
th6.style.color="blue"
th6.style.cursor="pointer"
th6.addEventListener("click",function(){
    Addfav(elem)
})


tr.append(th1,th2,th3,th4,th5,th6)

document.querySelector("tbody").append(tr)


})
function Addfav(elem){
    FavData.push(elem)
  localStorage.setItem("favourites",JSON.stringify(FavData))  
}