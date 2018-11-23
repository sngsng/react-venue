import React  from 'react'
import Slider from 'react-slick'
import slide_img1 from '../../resources/images/slide_one.jpg'
import slide_img2 from '../../resources/images/slide_two.jpg'
import slide_img3 from '../../resources/images/slide_three.jpg'

const Carousel = () => {

	const settings = {
		dots: false,
		infinite: true,
		autoplay: true,
		speed: 500
	}
	const windowHeight = `${window.innerHeight}px`

	return (

		<div
			className="carrousel_wrapper"
			style={{
				height:windowHeight
			}}
		>
			<Slider {...settings}>
				<div>
					<div
						className="carrousel_image"
						style={{
							background:`url(${slide_img1})`,
							height:windowHeight
						}}
					>
					</div>
				</div>
				<div>
					<div
						className="carrousel_image"
						style={{
							background:`url(${slide_img2})`,
							height:windowHeight
						}}
					>
					</div>
				</div>
				<div>
					<div
						className="carrousel_image"
						style={{
							background:`url(${slide_img3})`,
							height:windowHeight
						}}
					>
					</div>
				</div>
			</Slider>

		</div>

	)
}

export default Carousel
