# Tasks

 - [x] Clean up App.js (5 mins)
 - [x] Add styling to Storage Summary (5-10 mins)
 - [x] Dry up StorageSummary component (10 mins)
 - [x] Issue PR

## Clean up App.js

 - [x] Single handler for clicking button

## Add styling to Storage Summary

 - [x] Remove bullet points
 - [x] Add border around storage summary "cards"
 - [x] Spacing between cards
 - [x] Left align card content

## Improve StorageSummary component

What do you think should be done? Can you implement it, while explaining?

An improvment to the StorageSummary component would be to create a loop through the users array and render the card element instead of statically typing the users. This will remove the conditional required when checking for more than 1 user and can display as many users as necessary.

Could also turn the class into a functional component as state is not being utilized but it's probably not a big deal.

## NOTES

 - Added some animations to the buttons and styled them a bit. Also shows which space is active by changing the color of the button

 - Changed the color of the space link to match the button color

 - Centered the Cards to the middle of the page.

 - Wrote a couple of tests for the storageCalculator methods

### Font Used

 - Grabbed a font from google fonts
 - font-family: 'Montserrat', sans-serif;

### Colors Used

 - Used blue color from container website
 - blue: #005DAA

