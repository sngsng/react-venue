import React, {Component} from 'react'
import './resources/styles.css'

import Header     from './components/header_footer/Header'
import Featured   from './components/featured'
import VenueNfo   from './components/venueNfo'
import HighLights from './components/highlights'
import Pricing    from './components/pricing'
import Location   from './components/location'
import Footer     from './components/header_footer/Footer'

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header/>
				<Featured/>
				<VenueNfo/>
				<HighLights/>
				<Pricing/>
				<Location/>
				<Footer/>
			</div>
		)
	}
}

export default App
