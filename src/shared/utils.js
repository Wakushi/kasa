function getHousingRatingStars(housingRating) {
	return Array.from({ length: 5 }, (_, i) => {
		return (
			<i
				className={`fa-solid fa-star ${
					i < housingRating ? "rated " : ""
				}`}
			></i>
		)
	})
}

export { getHousingRatingStars }
