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
		// @see: ./src/uitls/api.js
		// get results object from query and store data array in our state
		searchArtworks(query).then((result) => setSearchResults(result.data));
	}

	// conditionally render search bar, results, and image details
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
