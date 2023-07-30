import Banner from "../../shared/components/banner/Banner"
import HousingList from "./components/housing-list/HousingList"
import "./Home.scss"
import banner from "../../assets/banner/banner1.webp"
export default function Home() {
	return (
		<div className="home">
			<Banner image={banner} content="Chez vous, partout et ailleurs" />
			<HousingList />
		</div>
	)
}
