

// var button = document.getElementById("btn");
// var input1 = document.getElementById("input1")

// input1.oninput = function(event){
//     printValue(event)
// }

// function printValue(rngEvent) {
//     console.log(rngEvent.target);
// }

//!................................1

// window.setTimeout(()=>{
//     console.log("LOADED");
// },1000)

//!................................2

// window.setTimeout(function(){
//     console.log("LOADED");
// },2000)

//!.................................3

// window.setTimeout(function(){
//     document.write(`<p>i love coffe</p>`)
// },2000)

//!.................................4

// var colorP = document.getElementsByClassName("colorP");
// var borderP = document.getElementsByClassName("borderP");
// var disappearP = document.getElementsByClassName("disappearP");
// var myP = document.getElementById("myP");

// window.setTimeout(()=>{
//     for (var i = 0; i < colorP.length; i++) {
//         colorP[i].style.backgroundColor = `blue`
//     }
// },1000)

// window.setTimeout(()=>{
//     for (var i = 0; i < borderP.length; i++) {
//         borderP[i].style.border = "1px solid black"
//     }
// },2000)

// window.setTimeout(()=>{
//     for (var i = 0; i < disappearP.length; i++) {
//         disappearP[i].style.opacity = `0%`
//     }
// },3000)

//!..................................5

// button.onclick = function () {
//     window.setTimeout(function(){
//         alert("clicked")
//     },1000)
// };

//!..................................6

// var myP = document.getElementById("myP")

// input1.oninput = (event)=>{
    
//     myP.innerHTML += `${event.target.value * 5}`
// }

// input1.onchange = (event)=>{
    
//     myP.innerHTML += `${event.target.value * 10}`
// }

//!..................................7

// var button = document.getElementById("btn")
// var myDiv = document.getElementById("myDiv")

// myDiv.style = `width: 200px; height: 200px; background-color: blue; position:relative; bottom: 0px; right: 0px;`

// button.onclick = ()=>{
//     myDiv.style.width = parseInt(myDiv.style.width) - 10 + "px"
//     myDiv.style.height = parseInt(myDiv.style.height) - 10 + "px"
//     myDiv.style.bottom = parseInt(myDiv.style.bottom) - 50 + "px"
//     myDiv.style.right = parseInt(myDiv.style.right) - 50 + "px"

// }

//!.................................8

var button = document.getElementById("btn")
var myDiv = document.getElementById("myDiv")

myDiv.style = `width: 200px; height: 200px; background-color: blue; position:relative; top: 0px; left:  0px;`

var clearDiv = setInterval(function(){
    myDiv.style.top = Math.floor(Math.random()*400) + "px"
    myDiv.style.left = Math.floor(Math.random()*1300) + "px"
},2000)

button.onclick = ()=>{
    clearInterval(clearDiv)
}

//!.................................9

var myDiv = document.getElementById("myDiv")
var myP = document.getElementById("myP")

var counter = 0

var countries = [
    {
        name: "South Korea",
        flag:"https://www.worldometers.info/img/flags/small/tn_ks-flag.gif"
    },

    {
        name: "Singapore",
        flag: "https://www.worldometers.info/img/flags/small/tn_sn-flag.gif"
    },
    
    {
        name: "Senegal",
        flag: "https://www.worldometers.info/img/flags/small/tn_sg-flag.gif"
    },
    
    {
        name: "Peru",
        flag: "https://www.worldometers.info/img/flags/small/tn_pe-flag.gif"
    },
    
    {
        name: "Nepal",
        flag: "https://www.worldometers.info/img/flags/small/tn_np-flag.gif"
    },
    
    {
        name: "Morocco",
        flag: "https://www.worldometers.info/img/flags/small/tn_mo-flag.gif"
    },
    
    {
        name: "Lebanon",
        flag: "https://www.worldometers.info/img/flags/small/tn_le-flag.gif"
    }
    
] 

myP.style = `font-size: 50px; padding: 0; margin: 0;`
myDiv.style = `display: flex;`
myP.innerText = counter

var randomTop = Math.floor(Math.random()*400) + "px"
var randomLeft = Math.floor(Math.random()*1300) + "px"



window.setInterval(function(){
    for (var i = 0; i < countries.length; i++) {
        myDiv.innerHTML += `<img src="${countries[i].flag}" style="padding-right: 20px;">`
    }

    window.setTimeout(function(){
        myDiv.innerHTML = ""
    },3000)

},6000)

myDiv.onclick = (e)=>{
    e.target.remove()
    myP.innerText = counter++
}













