let homeScore = document.getElementById("home-score-el")
let guestScore = document.getElementById("guest-score-el")

let homePoint = 0
let guestPoint = 0

/*HOME*/
function homeOnePoint(){
    homePoint += 1
    homeScore.textContent = homePoint
    lead()
}
function homeThreePoint(){
    homePoint += 3
    homeScore.textContent = homePoint
    lead()
}
function homeFivePoint(){
    homePoint += 5
    homeScore.textContent = homePoint
    lead()   
}


/*GUEST*/
function guestOnePoint(){
    guestPoint += 1
    guestScore.textContent = guestPoint
    lead()
}
function guestThreePoint(){
    guestPoint += 3
    guestScore.textContent = guestPoint    
    lead()
}
function guestFivePoint(){
    guestPoint += 5
    guestScore.textContent = guestPoint
    lead()
}

/**LEADER **/
let leadHome = document.getElementById("home-container")
let leadGuest = document.getElementById("guest-container")

let leadColor = "#F59E0B"
let bgColor = "D1D5DB"

function lead(){
    if(homePoint > guestPoint){
        console.log("Home is leading")  
        leadHome.style.backgroundColor = leadColor
        leadGuest.style.backgroundColor = bgColor

    } else if (guestPoint > homePoint){
        console.log("Guest is leading")  
        leadGuest.style.backgroundColor = leadColor
        leadHome.style.backgroundColor = bgColor
    }else if(homePoint === guestPoint){
        console.log("Tie")  
        leadGuest.style.backgroundColor = bgColor
        leadHome.style.backgroundColor = bgColor    
    }   
}

function newGame(){
    homePoint = 0
    homeScore.textContent = homePoint
    
    guestPoint = 0
    guestScore.textContent = guestPoint  

    leadGuest.style.backgroundColor = bgColor
    leadHome.style.backgroundColor = bgColor       
}









