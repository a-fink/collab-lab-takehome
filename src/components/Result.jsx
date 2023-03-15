function Result({ artInfo, setSelectedArtwork }) {
	const clickHandler = () => {
		setSelectedArtwork(artInfo.image_id);
	};

	return (
		<button onClick={clickHandler}>
			{`${artInfo.title} by ${artInfo.artist_title}`}
		</button>
	);
}

export default Result;
