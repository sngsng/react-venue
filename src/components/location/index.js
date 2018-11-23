import React from 'react'

const Location = () => {
	return (
		<div className="location_wrapper">
			<iframe
				title="locationMap"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d790.7447038256572!2d126.9200949292692!3d37.55556289873749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c98dcbd2d8cc7%3A0x88070c4b90cffdc5!2z7Yis7J247Iuc7Iqk7YWc!5e0!3m2!1sko!2skr!4v1542797085950"
				width="100%"
				height="500px"
				frameBorder="0"
				allowFullScreen/>

			<div className="location_tag">
				<div>Location</div>
			</div>
		</div>
	)
}

export default Location
