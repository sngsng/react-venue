import React, {Component} from 'react'
import Description        from './Description'
import Discount           from './Discount'

class HighLights extends Component {
	render() {
		return (
			<div className="highlight_wrapper">
				<Description/>
				<Discount/>
			</div>
		)
	}
}

export default HighLights
