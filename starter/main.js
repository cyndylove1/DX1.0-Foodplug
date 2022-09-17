

// basic Es6 function decalaration
//function name(){}
var myname = "nweke Cynthia"

function popsomething() {
    alert(myname + "  i have been coding since 12")
}
//console.logo(myname)

// console.log(document)

var ourbody=document.querySelector(".ourpagebody")

// ourbody.style.background="black"
var hamburger=document.querySelector(".hamburger-container")

// console.log(hamburger)

function addandremove(){
    hamburger.classList.toggle('showburger')
}
var mobilelinkscontainer=document.querySelector('.mobile-links-container')

function addandremove(){
    hamburger.classList.toggle('showburger')
    mobilelinkscontainer.classList.toggle('showmobilelinks')
}

