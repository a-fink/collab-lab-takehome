import './App.css';

import { searchArtworks } from '../utils/api';
import { SearchForm } from './SearchForm';
import { Footer } from './Footer';
import { useState } from 'react';
import SearchResults from './SearchResults';
import ImageDetailsPage from './ImageDetailsPage';

export function App() {
	const [searchResults, setSearchResults] = useState([]);
	const [selectedArtwork, setSelectedArtwork] = useState(null);

	function onSearchSubmit(query) {
		console.log('in search submit');

		// Search for the users's query.
		// TODO: render the results, instead of logging them to the console.
		// NOTE: `searchArtworks` currently returns local data, so that we
		// don't make too many requests to the API! Once we've built out
		// our UI, we need to make real requests!

		// @see: ./src/uitls/api.js
		// get results object from query and store data array in our state
		searchArtworks(query).then((result) => setSearchResults(result.data));
	}

	// if no results will only render search bar
	// if results and none selected will render search & results
	// if selected, will render that with a back button
	return (
		<div className="App">
			<h1>TCL Career Lab Art Finder</h1>
			{selectedArtwork === null ? (
				<SearchForm onSearchSubmit={onSearchSubmit} />
			) : null}
			{searchResults.length > 0 && selectedArtwork === null ? (
				<SearchResults
					results={searchResults}
					setSelectedArtwork={setSelectedArtwork}
				/>
			) : null}
			{searchResults.length > 0 && selectedArtwork !== null ? (
				<ImageDetailsPage
					selectedArtwork={selectedArtwork}
					setSelectedArtwork={setSelectedArtwork}
				/>
			) : null}
			<Footer />
		</div>
	);
}
