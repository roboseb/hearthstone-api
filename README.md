# hearthstone-api
Working with APIs assignments for the Odin Project.

--Features---

-Find the correct cards based on the given mana cost

-Card costs are hidden until you click them

-Score for right and wrong answers

-Reset button to play another round

-Sound button that does nothing

-Media query for showing extra text and gifs on larger widths.

-Gifs are fetched via API and randomize on reset

-Cards will also be fetched via API when they renew their setup or whatever

-Technically all the code is there for this game to take cards from a random collectible hearthstone set and give you 9 to select a random mana cost from

-Mana cost is always chosen from one of the 9 cards

-Once you've found all the correct cards, the rest are revealed

-Some cute effects: play around by hovering and clicking!


---Devlog---

May 27th. 2022

    So, TOP says to make a an image search site, but that'll be too easy and boring to show off to anyone. So I'll be using the Hearthstone API to make some sort of card name matching game.

    Wowie, fetch, promises and async/await are a nightmare to me right now. But somehow, I got it all working in an interactive way. I think it's not a bad idea that I went much heavier on this assignment, as I may need more practice with these in particular.

    Also, just to jinx myself, I'll say that this will be done by end of day tomorrow.

May 29th, 2022

    By tomorrow, I meant today. Yesterday was the first day I took as a day off on purpose in a while. Not sick or anything, just a day off. Was real nice. Go play Witcher 3, it's real good.

    The hearthstone API I was using is down. I think hearthstone has an official API that I could try switching to, but it may be far easier to just use a set 9 cards to style the UI with and then reimplement the API when it's back up.

    Took one hour to find out the API issue and then replace it with hard-coded local cards. Probably better than spending a full day replacing the entire API. Of course, if the API doesn't start working again, then this was stupid as well.

    So, I guess if you refreshing saves your scroll position, and if you change your elements so that there is no longer scrolling, you will be locked scrolled partly down into nothing until the next hard refresh. Spent about an hour learning that.

May 30th, 2022

    Hey look at that, went all the way to day 3. Site's starting to look cool though. Thinking of adding a little random cat gif in a corner somewhere, with the giphy API.

    Three hours in, and I think it's actually done. Cancelled a bunch of cute features I might have added since this was intended to be a short one or two hour assignment, not 17 hours.

    API still down. So I will leave this branch as is because it works and looks cool. If the API ever comes back up I will add these changes to the main branch and fix it all up.


---To-Do---

CANCEL-Custom sound effects
DONE-Draw ten random cards
CANCEL-Maybe select by card set?
DONE-Ignore cards that are not collectible
DONE-theme UI to reporpoised phantasies
CANCEL-Add cool pack opening animations
DONE-Add fun effects
CANCEL-add timer
DONE-maybe give no options to make this a cool, but brief project
CANCEL-Dom elements bounce to the beat like in mario, but cooler
ONLY COST-hide either card art or text, randomly, but always cost
DONE-cool fonts
CANCEL-animation for changing card set letter by letter
DONE-integrate giphy API into UI
DONE-fix revealing all cards when the right ones are found
DONE-fix correct reveal animation