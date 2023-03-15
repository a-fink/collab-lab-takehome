import './SearchResults.css';
import Result from './Result';

function SearchResults({ results, setSelectedArtwork }) {
	return (
		<div className="results-container">
			{results.map((el) => (
				<Result
					key={el.id}
					artInfo={el}
					setSelectedArtwork={setSelectedArtwork}
				/>
			))}
		</div>
	);
}

export default SearchResults;
