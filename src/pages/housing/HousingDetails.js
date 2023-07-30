import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import "./HousingDetails.scss"
import Gallery from "./components/gallery/Gallery"
import Dropdown from "../../shared/components/dropdown/Dropdown"
import { getHousingRatingStars } from "../../shared/utils"

export default function HousingDetails() {
	const { state } = useLocation()

	const {
		title,
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

	return (
		<>
			<section className="housing-details-container flex--column">
				<Gallery pictures={pictures} title={title} />
				<div className="housing-details flex--column">
					<div className="housing-details-top flex--column">
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
					</div>
					<div className="housing-infos flex--between">
						<div className="housing-rating flex">
							{getHousingRatingStars(rating)}
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
				<div className="dropdown-list flex--column">
					<Dropdown details={description} title="Description" />
					<Dropdown
						details={equipments}
						title="Équipements"
						type="list"
					/>
				</div>
			</section>
		</>
	)
}
