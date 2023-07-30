import "./Banner.scss"

export default function Banner({ image, content, minHeight }) {
	const bannerStyle = {
		backgroundImage: `url(${image})`,
		minHeight: minHeight
	}

	const contentStyle = {
		minHeight: minHeight
	}

	return (
		<div className="banner-container" style={bannerStyle}>
			<div className="banner-content" style={contentStyle}>
				{content && <p> {content} </p>}
			</div>
		</div>
	)
}
