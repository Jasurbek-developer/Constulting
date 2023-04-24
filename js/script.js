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

    // Navbar end 
    document.querySelector(".about-title").innerHTML=langsArr["about-title"][hash]
    document.getElementById("content-title-1").innerHTML=langsArr["content-title-1"][hash]
    document.getElementById("content-text-1").innerHTML=langsArr["content-text-1"][hash]
    document.getElementById("content-text-2").innerHTML=langsArr["content-text-2"][hash]
    document.getElementById("content-text-3").innerHTML=langsArr["content-text-3"][hash]
    document.getElementById("content-title-2").innerHTML=langsArr["content-title-2"][hash]
    document.getElementById("content-text-4").innerHTML=langsArr["content-text-4"][hash]
    document.getElementById("content-title-3").innerHTML=langsArr["content-title-3"][hash]
    document.getElementById("content-text-5").innerHTML=langsArr["content-text-5"][hash]
    document.getElementById("content-title-4").innerHTML=langsArr["content-title-4"][hash]
    document.getElementById("content-text-6").innerHTML=langsArr["content-text-6"][hash]
    document.getElementById("content-title-5").innerHTML=langsArr["content-title-5"][hash]
    document.getElementById("content-text-7").innerHTML=langsArr["content-text-7"][hash]
    document.getElementById("footer-text").innerHTML=langsArr["footer-text"][hash]

}
changeLanguage()
select.addEventListener("change",changeUrlLanguages)