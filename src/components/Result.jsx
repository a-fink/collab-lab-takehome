function Result({ artInfo, setSelectedArtwork }) {
	const artistName =
		artInfo.artist_title === null ? 'unknown' : artInfo.artist_title;

	const clickHandler = () => {
		setSelectedArtwork(artInfo.image_id);
	};

	return (
		<button onClick={clickHandler}>
			{`${artInfo.title} by ${artistName}`}
		</button>
	);
}

export default Result;
