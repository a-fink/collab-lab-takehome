import Result from './Result';

function SearchResults({ results, setSelectedArtwork }) {
	return (
		<div>
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
