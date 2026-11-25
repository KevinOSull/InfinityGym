console.log("script loaded")

const cardElements = document.querySelectorAll('.cards');
const favouriteElement = document.querySelectorAll('.favourite-icon')

function favoriteCard(){
    for(let i = 0; i < favouriteElement.length; i++){
        favouriteElement[i].addEventListener('click',function(){
            favouriteElement[i].classList.toggle("fa-solid")
            favouriteElement[i].classList.toggle("fa-regular")
        });
    }
}

function attachHoverEffectToCards(){
    for(let i = 0; i < cardElements.length; i++){
        cardElements[i].addEventListener("mouseenter",function(){
            cardElements[i].classList.add("card-hover")
        });
        cardElements[i].addEventListener("mouseleave",function(){
            cardElements[i].classList.remove("card-hover")
        })
    }
}

if(cardElements.length > 0){
    attachHoverEffectToCards();
    favoriteCard();
}