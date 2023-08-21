let homeScore = document.getElementById("home-score-el")
let guestScore = document.getElementById("guest-score-el")

let homePoint = 0
let guestPoint = 0

/*HOME*/
function homeOnePoint(){
    homePoint += 1
    homeScore.textContent = homePoint
}
function homeThreePoint(){
    homePoint += 3
    homeScore.textContent = homePoint
}
function homeFivePoint(){
    homePoint += 5
    homeScore.textContent = homePoint
}


/*GUEST*/
function guestOnePoint(){
    guestPoint += 1
    guestScore.textContent = guestPoint
}
function guestThreePoint(){
    guestPoint += 3
    guestScore.textContent = guestPoint    
}
function guestFivePoint(){
    guestPoint += 5
    guestScore.textContent = guestPoint
}

function newGame(){
    homePoint = 0
    homeScore.textContent = homePoint
    
    guestPoint = 0
    guestScore.textContent = guestPoint  
    
}

/**LEADER **/
let leadHome = document.getElementById("home-container")
let leadGuest = document.getElementById("home-container")


    if(homePoint > 1){
        let homePoint = 0
        let guestPoint = 0
        leadHome.style.backgroundColor = "#F59E0B";
    // }else if (homePoint < guestPoint ){
    //     leadGuest.style.backgroundColor = "#F59E0B";
    // }else if(homePoint === guestPoint){
    //     leadHome.style.backgroundColor = "#F59E0B";
    //     leadGuest.style.backgroundColor = "#F59E0B";
    }


    // if homePoint is greater than guestPoint