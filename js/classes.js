console.log("script loaded")

const cardElements = document.querySelectorAll('.cards');
const favouriteElement = document.querySelectorAll('.favourite-icon')
const filterButtons = document.querySelectorAll('.filter-btn')


function filterCards(){
    for(let i = 0; i < filterButtons.length; i++){
        filterButtons[i].addEventListener('click',function(){
        let btn = filterButtons[i].getAttribute("data-filter")

        for(let i = 0; i < cardElements.length; i++){
        let cata = cardElements[i].getAttribute("data-category")
            if(cata === btn || btn === null){
                cardElements[i].style.display = "block"
            }else{
                cardElements[i].style.display = "none"
            }
        }
    });
    
    }
}

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
    filterCards();
}