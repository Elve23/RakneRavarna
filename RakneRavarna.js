/* Set the width of the sidebar to 250px (show it) */
function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}

// kod natalie spel :

const cards = document.querySelectorAll('.item');
let firstCard = null;

function flipCard(event) {
    const clickedCard = event.currentTarget;

    if (isCardLocked(clickedCard)) {
        return
    }

    clickedCard.classList.add('flip');

    if (firstCard) {
        // Om det finns ett första kort valt, jämför med det klickade kortet
        if (firstCard.dataset.id !== clickedCard.dataset.id) {
            // Om korten har olika id, vänd tillbaka dem efter en fördröjning
            console.log("Korten har olika id, vänd tillbaka dem.");
            setTimeout(() => {
                firstCard.classList.remove('flip');
                clickedCard.classList.remove('flip');
                firstCard = null;
            }, 1000);
        } else {
            lockCard(firstCard)
            lockCard(clickedCard)
            firstCard = null
        }

    } else {
        // Om det inte finns något första kort valt än, spara det klickade kortet som första kort
        firstCard = clickedCard;
    }
}

function lockCard(card) {
    card.classList.add('matched')
    /* För att få korten att bli orange vid match*/
    setTimeout(() => {
        card.classList.add('active-done')
    }, 1000);
}

function isCardLocked(card) {

    let isCardLocked = card.classList.contains('matched')

    return isCardLocked

}


// Lägg till händelselyssnare för klick på varje kort
cards.forEach(card => card.addEventListener('click', flipCard));
