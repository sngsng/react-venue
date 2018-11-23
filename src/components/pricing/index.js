import React, {Component} from 'react'
import TicketButton       from '../ui/TicketButton'
import Zoom               from 'react-reveal/Zoom'

class Pricing extends Component {

	constructor(props) {
		super(props)

		this.state = {
			products: [{
				price: 100,
				position: 'Balcony',
				desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At risus viverra adipiscing at in tellus. Dui faucibus in ornare quam. Diam vulputate ut pharetra sit.',
				link: 'http://www.naver.com',
				delay: 500
			}, {
				price: 200,
				position: 'Ceil',
				desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At risus viverra adipiscing at in tellus. Dui faucibus in ornare quam. Diam vulputate ut pharetra sit.',
				link: 'http://www.daum.net',
				delay: 0
			}, {
				price: 250,
				position: 'Star',
				desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At risus viverra adipiscing at in tellus. Dui faucibus in ornare quam. Diam vulputate ut pharetra sit.',
				link: 'http://www.slogup.com',
				delay: 500
			}]
		}
	}

	renderProducts = () => {
		const {products} = this.state
		return products.map((product, index) => (
			<Zoom delay={product.delay} key={index}>
				<div className="pricing_item">
					<div className="pricing_inner_wrapper">
						<div className="pricing_title">
							<span>{product.price}$</span>
							<span>{product.position}</span>
						</div>
						<div className="pricing_description">{product.desc}</div>
						<div className="pricing_buttons">
							<TicketButton
								text="Purchase"
								color="#ffffff"
								link={product.link}
							/>
						</div>
					</div>
				</div>
			</Zoom>
		))
	}

	render() {
		return (
			<div className="bck_black">
				<div className="center_wrapper pricing_section">
					<h2>Pricing</h2>
					<div className="pricing_wrapper">
						{this.renderProducts()}
					</div>
				</div>
			</div>
		)
	}
}

export default Pricing
