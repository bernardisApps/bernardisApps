var sobremi = document.getElementById("sobremi")
var experiencia = document.getElementById("experiencia")
var educacion = document.getElementById("educacion")
let habilidades = document.getElementById("habilidades")
var cursos = document.getElementById("cursos")

var carta_sobremi = document.getElementById("carta-sobremi")
var carta_experiencia = document.getElementById("carta-experiencia")
var carta_educacion = document.getElementById("carta-educacion")
var carta_habilidades = document.getElementById("carta-habilidades")
var carta_cursos = document.getElementById("carta-cursos")

carta_sobremi.addEventListener("click", ()=>{
    let elementStyle = window.getComputedStyle(sobremi);
    let elementDisplay = elementStyle.getPropertyValue('display');
    if(elementDisplay === "none"){
        sobremi.style.display = "block";
    }else{
        sobremi.style.display = "none";
    }
})
carta_experiencia.addEventListener("click", ()=>{
    let elementStyle = window.getComputedStyle(experiencia);
    let elementDisplay = elementStyle.getPropertyValue('display');
    if(elementDisplay === "none"){
        experiencia.style.display = "block";
    }else{
        experiencia.style.display = "none";
    }
})
carta_educacion.addEventListener("click", ()=>{
    let elementStyle = window.getComputedStyle(educacion);
    let elementDisplay = elementStyle.getPropertyValue('display');
    if(elementDisplay === "none"){
        educacion.style.display = "block";
    }else{
        educacion.style.display = "none";
    }
})
carta_habilidades.addEventListener("click", ()=>{
    let elementStyle = window.getComputedStyle(habilidades);
    let elementDisplay = elementStyle.getPropertyValue('display');
    if(elementDisplay === "none"){
        habilidades.style.display = "block";
    }else{
        habilidades.style.display = "none";
    }
})
carta_cursos.addEventListener("click", ()=>{
    let elementStyle = window.getComputedStyle(cursos);
    let elementDisplay = elementStyle.getPropertyValue('display');
    if(elementDisplay === "none"){
        cursos.style.display = "block";
    }else{
        cursos.style.display = "none";
    }
})