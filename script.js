//Options required for the Hearthstone API.
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
		'X-RapidAPI-Key': 'c79351a1a7msh02b3715afce8ad0p1c373bjsnee7672a50843'
	}
};

const imageBox = document.getElementById('imgbox');
const setNameDisplay = document.getElementById('setname');
const costDisplay = document.getElementById('cost');

const resetButton = document.getElementById('resetbtn');
const rightDisplay = document.getElementById('right');
const wrongDisplay = document.getElementById('wrong');

let right = 0;
let wrong = 0;

resetButton.addEventListener('click', () => {
    //Reset cards being displayed.
    const cards = Array.from(imageBox.children);
    cards.forEach(card => {
        card.remove();
    });

    showCards();
});




//Show a number of random cards from the same random set.
const showCards = () => {
    //Fetch a random card set, and return it as a string.
    // async function fetchSet() {

    //     let response = await fetch('https://omgvamp-hearthstone-v1.p.rapidapi.com/info', options)
    //         .then(response => response.json())
    //         .then(response => { 
          
    //             //Set the 'sets' object to the 'sets' list from the API.
    //             let sets = response['sets'];

    //             [0, 3, 4, 5, 6, 7, 12, 13, 14, 17, 19, 21, 29, 34, 36, 45, 48].forEach(e => delete sets[e]);
                
    //             //Choose a set from sets that are not undefined.
    //             const setsSize = Object.keys(sets).length;
    //             let index = Math.floor(Math.random() * setsSize);
    //             while (sets[index] === undefined) {
    //                 index = Math.floor(Math.random() * setsSize);
    //             }
                
    //             //Set the chosen set to the chosen index, and update
    //             //the set name on the page.
    //             const currentSet = sets[index];
    //             setNameDisplay.innerText = currentSet;
    //             return currentSet;
    //         })
    //         .catch(err => console.error(err));

    //     return await response;
    // }

    let shownCards = [];
    let cardList = [];

    // fetchSet().then(function(result) {
        
    //     //console.log(result);
        
    //     fetch(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/${result}?collectible=1`, options)
    //     .then(response => response.json())
    //     .then(response => {

    //         //Add random cards from the chosen set to the DOM
    //         //and display them on the page.
    //         for (let i = 0; i < 9; i++) {
    //             createCard(response);
    //         }
    //         console.log(cardList);

    //         //Choose a random cost from displayed cards to set
    //         //as the cards to search for.
    //         let cardCosts = [];
    //         cardList.forEach(card => {
    //             cardCosts.push(card.cost);
    //         });
    //         costIndex = Math.floor(Math.random() * cardList.length);
    //         costDisplay.innerText = cardCosts[costIndex];
    //     })
    //     .catch(err => console.error(err));
        
    // }, function(error) {
    //     console.log('error');
    // });






    const createCard = (setObj) => {
        
        //Get the set size, and choose a random index from it.
        const setSize = Object.keys(setObj).length;
        let index = Math.floor(Math.random() * setSize);

        //Prevent cards with no art and cards already displayed from
        //being chosen.

        //console.log(setObj[index]);

        while (setObj[index] === undefined || shownCards.indexOf(index) > -1) {
            index = Math.floor(Math.random() * setSize);
        }
        shownCards.push(index);
        
        //Take card object from the API and push it to the card list.
        const cardObj = setObj[index];
        cardObj.clicked = false;
        cardList.push(cardObj);


        const cardArt = cardObj.img;
      
        //Append card art to the page.
        const cardBox = document.createElement('div');
        cardBox.id ='cardbox';
        const cardDisplay = document.createElement('img');
        cardDisplay.src = cardArt;

        //Add a blank gem to hide card cost.
        const blankGem = document.createElement('img');
        blankGem.src = 'images/blankgem.png';
        blankGem.classList.add('blankgem');

        //Add a black border to the card.
        const cardBorder = document.createElement('img');
        cardBorder.src = cardArt;
        cardBorder.classList.add('cardborder');

        cardDisplay.onload = () => {
            cardBox.appendChild(cardBorder);
            cardBox.appendChild(cardDisplay);
            imageBox.appendChild(cardBox);
            cardBox.appendChild(blankGem);
            
        }

        //Reveal card cost on click, and apply score change.
        cardDisplay.addEventListener('click', () => {
            
            //Hide the blank gem to show the card cost.
            blankGem.style.filter = 'opacity(0)';

            if (parseInt(costDisplay.innerText) === cardObj.cost) {
                right++;
                rightDisplay.innerText = `Right: ${right}`;
                cardDisplay.style.height = '400px';
            } else {
                wrong++;
                wrongDisplay.innerText = `Wrong: ${wrong}`;
                cardDisplay.style.filter = 'opacity(0.5)';
            }

            //Prevent player from clicking same card again.
            cardDisplay.style.pointerEvents = 'none';

            cardObj.clicked = true;
            
            //Check if there are still cards left to find.
            let cardsLeft = 0;
            cardList.forEach(card => {
                if (card.cost === parseInt(costDisplay.innerText) &&
                    card.clicked === false) {
                        cardsLeft ++;
                }
            });
            //console.log(cardsLeft);
            if (cardsLeft > 0) {
                console.log('there are still cards left to get')
            } else {
                console.log('you found all the cards!')
         
            }
        });

        //Add border effect on hover.
        cardDisplay.addEventListener('mouseover', () => {
            cardBorder.style.filter = 'brightness(0) opacity(0.8)';
        });

        cardDisplay.addEventListener('mouseleave', () => {
            cardBorder.style.filter = 'brightness(0) opacity(0)';
        });
        
    }



    let sebSet = {};


    const Card = (img, cost, name) => {
        return {img, cost, name}
    }

    const alakir = Card('images/alakir.webp', 8, 'alakir');
    sebSet[0] = alakir;
    const candleShot = Card('images/candleshot.webp', 1, 'candleshot');
    sebSet[1] = candleShot;
    const cenarius = Card('images/cenarius.webp', 8, 'cenarius');
    sebSet[2] = cenarius;
    const chillwind = Card('images/chillwind.webp', 4, 'chillwind');
    sebSet[3] = chillwind;
    const execute = Card('images/execute.webp', 1, 'execute');
    sebSet[4] = execute;
    const grommash = Card('images/grommash.webp', 8, 'grommash');
    sebSet[5] = grommash;
    const hex = Card('images/hex.webp', 4, 'hex');
    sebSet[6] = hex;
    const tirion = Card('images/tirion.webp', 8, 'tirion');
    sebSet[7] = tirion;
    const vanessa = Card('images/vanessa.webp', 2, 'vanessa');
    sebSet[8] = vanessa;

    const testDisplay = (() => {
        //Add random cards from the chosen set to the DOM
        //and display them on the page.
        for (let i = 0; i < 9; i++) {
            createCard(sebSet);
        }


        //Choose a random cost from displayed cards to set
        //as the cards to search for.
        let cardCosts = [];
        cardList.forEach(card => {
            cardCosts.push(card.cost);
        });
        costIndex = Math.floor(Math.random() * cardList.length);
        costDisplay.innerText = cardCosts[costIndex];
    })();
}

showCards();




