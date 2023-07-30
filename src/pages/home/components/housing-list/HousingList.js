import { useEffect } from "react"
import { useState } from "react"
import { allHousings } from "../../../../core/services/housing.service"
import HousingCard from "../housing-card/HousingCard"

import "./HousingList.scss"
import { Link } from "react-router-dom"

export default function HousingList() {
	const [housingData, setHousingData] = useState([])

	function getHousingData() {
		setHousingData(allHousings)
	}

	useEffect(() => {
		getHousingData()
	}, [])

	return (
		<>
			<div className="housing-list flex--center">
				{housingData.map((housing) => {
					return (
						<Link to="/housing" state={housing} key={housing.id}>
							<HousingCard key={housing.id} housing={housing} />
						</Link>
					)
				})}
			</div>
		</>
	)
}
