const dark=document.querySelector(".moon-theme")
const body=document.querySelector("body")
const menuBtn=document.querySelector(".menu-btn")
const navigation=document.querySelector(".navigation")
const items=document.querySelectorAll("li")
const select=document.querySelector("select")
const allLang=["uz","ru"]


dark.addEventListener("click",()=>{
    body.classList.toggle("dark")
    if (body.classList.contains("dark")) {
        dark.innerHTML="<i class='fa-solid fa-sun'></i>"
    }
    else{
        dark.innerHTML="<i class='fa-solid fa-moon'></i>"
    }
})
menuBtn.addEventListener("click",()=>{
    menuBtn.classList.toggle("active")
    navigation.classList.toggle("active")
})
items.forEach(item => {
    item.addEventListener("click",()=>{
        menuBtn.classList.remove("active")
        navigation.classList.remove("active") 
    })
});

//Langs


const changeUrlLanguages=()=>{
    let lang=select.value
    console.log(lang);
    location.href=window.location.pathname+"#"+lang
    location.reload()
}
const changeLanguage=()=>{
    let hash=window.location.hash
    hash=hash.substring(1) 
    menuBtn.classList.remove("active")
    navigation.classList.remove("active") 
    if (!allLang.includes(hash)) {
        location.href=window.location.pathname + "#ru"
        location.reload()
    }
    select.value=hash 
    console.log(hash);
    document.getElementById("nav-item-1").innerHTML=langsArr["nav-item-1"][hash]
    document.getElementById("nav-item-2").innerHTML=langsArr["nav-item-2"][hash]
    document.getElementById("nav-item-3").innerHTML=langsArr["nav-item-3"][hash]
    document.getElementById("nav-item-4").innerHTML=langsArr["nav-item-4"][hash]
    document.getElementById("nav-item-5").innerHTML=langsArr["nav-item-5"][hash]
    document.querySelector(".useful-big-title").innerHTML=langsArr["useful-big-title"][hash]
    document.getElementById("useful-title-1").innerHTML=langsArr["useful-title-1"][hash]
    document.getElementById("useful-text-1").innerHTML=langsArr["useful-text-1"][hash]
    document.getElementById("useful-title-2").innerHTML=langsArr["useful-title-2"][hash]
    document.getElementById("useful-text-2").innerHTML=langsArr["useful-text-2"][hash]


    // Footer 
    document.getElementById("footer-text").innerHTML=langsArr["footer-text"][hash]

}
changeLanguage()
select.addEventListener("change",changeUrlLanguages)