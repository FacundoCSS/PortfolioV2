"use strict"

const left_mitiendita_arrow = document.getElementById("left-mitiendita")
const right_mitiendita_arrow = document.getElementById("right-mitiendita")

const left_twitter_arrow = document.getElementById("left-twitter")
const right_twitter_arrow = document.getElementById("right-twitter")

let mitiendita_counter = 1;
let twitter_counter = 1;

const twitter_button = document.getElementById("twitter-button");
const mitiendita_button = document.getElementById("mitiendita-button");

const twitter = document.getElementById("twitter-clon");
const mitiendita = document.getElementById("mitiendita");

twitter_button.addEventListener("click", ()=>{
    if(!mitiendita.classList.contains("carrousel-invisible")){
        mitiendita.classList.add("carrousel-invisible")
    }
    if(twitter.classList.contains("carrousel-invisible")){
        twitter.classList.toggle("carrousel-invisible")
    }
    if(!twitter_button.classList.contains("button-selected")){
        twitter_button.classList.add("button-selected")
    }
    if(mitiendita_button.classList.contains("button-selected")){
        mitiendita_button.classList.toggle("button-selected")
    }

})

mitiendita_button.addEventListener("click", ()=>{
    if(!twitter.classList.contains("carrousel-invisible")){
        twitter.classList.add("carrousel-invisible")
    }
    if(mitiendita.classList.contains("carrousel-invisible")){
        mitiendita.classList.toggle("carrousel-invisible")
    }
    if(!mitiendita_button.classList.contains("button-selected")){
        mitiendita_button.classList.add("button-selected")
    }
    if(twitter_button.classList.contains("button-selected")){
        twitter_button.classList.toggle("button-selected")
    }
})

left_mitiendita_arrow.addEventListener("click", async ()=>{
    if(mitiendita_counter !== 1){
        mitiendita_counter--
        let image = document.querySelector(`#MiTiendita${mitiendita_counter}`)
        image.scrollIntoViewIfNeeded( { behavior: 'smooth', block: 'center' } );
    }
})

right_mitiendita_arrow.addEventListener("click", ()=>{
    if(mitiendita_counter !== 9){
        mitiendita_counter++
        let image = document.querySelector(`#MiTiendita${mitiendita_counter}`)
        image.scrollIntoViewIfNeeded( { behavior: 'smooth', block: 'center' } );
    }
})

left_twitter_arrow.addEventListener("click", async ()=>{
    if(twitter_counter !== 1){
        twitter_counter--
        let image = document.querySelector(`#Twitter${twitter_counter}`)
        image.scrollIntoViewIfNeeded( { behavior: 'smooth', block: 'center' } );
    }
})

right_twitter_arrow.addEventListener("click", ()=>{
    if(twitter_counter !== 6){
        twitter_counter++
        let image = document.querySelector(`#Twitter${twitter_counter}`)
        image.scrollIntoViewIfNeeded( { behavior: 'smooth', block: 'center' } );
    }
})
