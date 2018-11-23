import React, {Component} from 'react'
import Fade               from 'react-reveal/Fade'
import Slide              from 'react-reveal/Slide'
import TicketButton       from '../ui/TicketButton'

class Discount extends Component {

	constructor(props) {
		super(props)

		this.state = {
			startPercent: 0,
			endPercent: 30
		}
	}

	percentage = () => {

		const {startPercent, endPercent} = this.state

		if (startPercent < endPercent) {
			this.setState({
				startPercent: this.state.startPercent + 1
			})
		}
	}

	componentDidUpdate(prevProps, prevState, context) {
		setTimeout(() => {
			this.percentage()
		}, 30)
	}

	render() {

		const {startPercent} = this.state

		return (
			<div className="center_wrapper">
				<div className="discount_wrapper">
					<Fade
						onReveal={() => this.percentage()}
					>
						<div className="discount_porcentage">
							<span>{startPercent}%</span>
							<span>OFF</span>
						</div>
					</Fade>
					<Slide right>
						<div className="discount_description">
							<h3>Purchase tickets before 20th JUNE</h3>
							<p>
								Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras
								fermentum. Iaculis urna id volutpat lacus laoreet. Massa tempor nec
								feugiat nisl pretium fusce id velit ut. Purus in mollis nunc sed id
								semper risus. Lorem ipsum dolor sit amet consectetur adipiscing elit
								pellentesque.
							</p>
							<TicketButton
								text="Purchase Tickets"
								bgColorr="yellow"
								color="#ffffff"
								link="http://sgsg.slogup.com"
							/>
						</div>
					</Slide>
				</div>
			</div>
		)
	}
}

export default Discount
