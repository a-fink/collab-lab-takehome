## Decisions made:

- added an event.preventDefault() in the Search Form's submit handler to stop the page refreshing bug
- decided to make SearchResults component that mapped each result to an individual Result component
- made an ImageDetailsPage component for displaying selected images
- created state to manage search results and selected artwork
- used state of searchResults & selectedArtwork to conditionally render the views
  - if no results exist it will only render the search bar
  - once a search has happened and results exist it will render the results list and the search bar
  - if a piece of artwork is selected it will only render the ImageDetailsPage component
- prop drilled the setSelectedArtwork down to each individual Result & ImageDetailsPage so that those components could set/clear the selected items and update parent App component

## completed within 1 hour

- fixed page refresh on search form submission bug
- results & image details views/components
- conditional rendering of results vs image deails

## issues encountered

- was getting error on results.map() in SearchResults that there was an unexpected character
  - took a bit of time to troubleshoot and figure out what was wrong since error was not very descriptive
  - turned out that I forgot to put a div/fragment around the map so I wasn't returning 1 jsx component
  - cost me some extra time, so had to do api util function update and any styling after the time

## completed in ~30 minutes of extra time

- updated searchArtworks function to create query string and fetch results from live API
- cleaned up comments
- Made 'null' artist_title information show the artist's name as 'unknown' rather than null when the search results are displayed
- Basic styling on the SearchResults and ImageDetailsPage components

## addional documentation work ~30 minutes

- chose to make this markdown file with notes on my decisions
- chose to work on a separate branch and document my changes with a pull request before merging the changes to main

## given more time I would like to add

- loading feedback message for user when query is running
- error handling feedback if something goes wrong with a query
- promts to search for a first set of results or for when no results are found
- additional styling, including ensuring new components are responsive on various screen sizes/mobile
- accessibility features and screen reader / keyboard only testing. For example:
  - make alt tags for images match the desciptions of each image isntead of default message
  - add aria labels and inforamtion where needed
  - ensure form and all links are traversable using only keyboard
  - ensure enough contrast in color/text choices
