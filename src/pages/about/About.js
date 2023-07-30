import "./About.scss"
import banner from "../../assets/banner/banner2.webp"
import Banner from "../../shared/components/banner/Banner"
import Dropdown from "../../shared/components/dropdown/Dropdown"
import { kasaServices } from "../../core/services/kasa-about"

export default function About() {
	return (
		<section className="about">
			<Banner image={banner} minHeight="220px" />
			<div className="dropdown-list flex--column">
				{kasaServices.map(({ description, title }) => {
					return <Dropdown details={description} title={title} />
				})}
			</div>
		</section>
	)
}
