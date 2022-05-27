const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
		'X-RapidAPI-Key': 'c79351a1a7msh02b3715afce8ad0p1c373bjsnee7672a50843'
	}
};

const cardArt = document.querySelector('img');
const searchBar = document.querySelector('input');
const searchButton = document.querySelector('button');

//Set displayed image to first result in card API search.
const displaySearch = (term) => {
    fetch(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/search/${term}`, options)
	.then(response => response.json())
	.then(response => {
        console.log(response);
        console.log([3].img);
        cardArt.src = response[0].img;
    })
	.catch(err => console.error(err));
}

searchButton.addEventListener('click', () => {
    displaySearch(searchBar.value);
})