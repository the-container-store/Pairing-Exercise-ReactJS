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
- Add propTypes to `StorageSummary` to have a better understanding of the props that are coming in
- Add error boundary component so if one `UserCard` in the `StorageSummary` throws an error then the whole app will not crash
- I was not sure if I was allowed to make a new file for a component but I would refactor the `.map` in the `StorageSummary` to be a separate component. This will keep the `render` of the `StorageSummary` cleaner and easier to read
- Data are deeply nested so it will be easy for Javascript to throw an error. This can be resolved by using deep getter function like the one provided in Lodash or make a `getDeep` helper function. This can be useful when the data is externally fetched and is unpredictable. Ex for `this.props.spaceDocument.design.users`
```
// if design and users does not exist it will fallback to the empty array
_.get(this.props.spaceDocument, ['design', 'users'], [])

```
- Only `#F6F8FA` color was provided in codebase so that was used for the `card` border but that color can be hard to see
- When toggling between `Feet` and `Inch` the container of the cards changes. To provide a more consistent experience there should be a `min-width` on the card 
- Currently, there are no indication when `Space 1`, `Space 2`, or `Space 3` is selected. This can be resolved by tracking the selected state and dynamically rendering a class that highlight the selected button with React. 
- The Card list items are unevenly space with the measurement values. This can be resolved by adding a span element around each card item and specifying it to be `inline-block` and giving a specific width

## NOTES

- `Math.floor` instead of `Math.round` for calculating shoe space to round down instead of up

### Colors Used

 - grey: #F6F8FA