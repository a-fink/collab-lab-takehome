import './ImageDetailsPage.css';

function ImageDetailsPage({ selectedArtwork, setSelectedArtwork }) {
	const clickHandler = () => {
		setSelectedArtwork(null);
	};

	return (
		<div className="image-container">
			<button onClick={clickHandler}>Back</button>
			<img
				alt="artwork"
				src={`https://www.artic.edu/iiif/2/${selectedArtwork}/full/843,/0/default.jpg`}
			/>
		</div>
	);
}

export default ImageDetailsPage;
