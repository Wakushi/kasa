import Banner from "./components/banner/Banner"
import HousingList from "./components/housing-list/HousingList"
import "./Home.scss"
export default function Home() {
	return (
		<div className="home">
			<Banner />
			<HousingList />
		</div>
	)
}
