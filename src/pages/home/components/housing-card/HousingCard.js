import "./HousingCard.scss"

export default function HousingCard({ housing }) {
	const { title, cover } = housing
	return (
		<article className="housing-card">
			<img src={cover} alt={title} />
			<div className="housing-card-content flex">
				<p>{title}</p>
			</div>
		</article>
	)
}
