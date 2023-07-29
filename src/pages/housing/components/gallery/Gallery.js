import { useState } from "react"
import "./Gallery.scss"

export default function Gallery({ pictures, title }) {
	const [pictureIndex, setPictureIndex] = useState(0)

	function onNextPicture() {
		setPictureIndex((pictureIndex + 1) % pictures.length)
	}

	function onPreviousPicture() {
		setPictureIndex((pictureIndex - 1 + pictures.length) % pictures.length)
	}
	return (
		<div className="housing-carousel">
			{pictures.length > 1 && (
				<i
					className="fa-solid fa-angle-left"
					onClick={onPreviousPicture}
				></i>
			)}
			<img src={pictures[pictureIndex]} alt={title} />
			{pictures.length > 1 && (
				<span className="carousel-counter">
					{pictureIndex + 1}/{pictures.length}{" "}
				</span>
			)}
			{pictures.length > 1 && (
				<i
					className="fa-solid fa-angle-right"
					onClick={onNextPicture}
				></i>
			)}
		</div>
	)
}
