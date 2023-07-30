function getHousingRatingStars(housingRating) {
	let stars = []
	for (let i = 0; i < housingRating; i++) {
		stars.push(<i key={i + "a"} className="fa-solid fa-star rated"></i>)
	}
	if (housingRating < 5) {
		for (let i = 0; i < 5 - housingRating; i++) {
			stars.push(<i key={i + "b"} className="fa-solid fa-star"></i>)
		}
	}
	return stars
}

export { getHousingRatingStars }
