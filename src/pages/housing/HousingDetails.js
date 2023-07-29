import { useLocation } from "react-router-dom"
import "./HousingDetails.scss"
import { useEffect, useState } from "react"
import Gallery from "./components/gallery/Gallery"

export default function HousingDetails() {
	const { state } = useLocation()

	const {
		id,
		title,
		cover,
		pictures,
		description,
		host,
		rating,
		location,
		equipments,
		tags
	} = state

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	function getHousingRatingStars() {
		let stars = []
		for (let i = 0; i < rating; i++) {
			stars.push(<i className="fa-solid fa-star rated"></i>)
		}
		if (rating < 5) {
			for (let i = 0; i < 5 - rating; i++) {
				stars.push(<i className="fa-solid fa-star"></i>)
			}
		}
		return stars
	}

	return (
		<>
			<div className="housing-details-container flex--column">
				<Gallery pictures={pictures} title={title} />
				<p className="housing-title"> {title} </p>
				<p className="housing-location"> {location} </p>
				<div className="housing-tags flex">
					{tags.map((tag) => {
						return (
							<span className="tag" key={tag}>
								{" "}
								{tag}{" "}
							</span>
						)
					})}
				</div>
				<div className="housing-infos flex--between">
					<div className="housing-rating flex">
						{getHousingRatingStars()}
					</div>
					<div className="housing-host flex">
						<div className="host-name"> {host.name} </div>
						<div className="host-picture">
							<img
								src={host.picture}
								alt={`Profile picture of ${host.name}`}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
