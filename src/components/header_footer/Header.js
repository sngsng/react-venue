import React, {Component} from 'react'

import AppBar     from '@material-ui/core/AppBar'
import Toolbar    from '@material-ui/core/Toolbar'
import MenuIcon   from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import SideDrawer from './SideDrawer'

class Header extends Component {

	constructor(props) {
		super(props)

		this.state = {
			drawerOpen: false,
			headerShow: false
		}
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll)
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', null)
	}

	toggleDrawer = (drawerOpen) => {
		this.setState({
			drawerOpen
		})
	}

	handleScroll = () => {

		const headerShow = window.scrollY > 0
		this.setState({
			headerShow
		})
	}

	render() {

		const {drawerOpen, headerShow} = this.state

		return (
			<AppBar
				position="fixed"
				style={{
					backgroundColor: headerShow ? '#2f2f2f' : 'transparent',
					boxShadow: 'none',
					padding: '10px'
				}}
			>
				<Toolbar>
					<div className="header_logo">
						<div className="font_righteous header_logo_venue">The Venue</div>
						<div className="header_logo_title">Musical Events</div>
					</div>
					<IconButton
						aria-label="menu"
						color="inherit"
						onClick={() => this.toggleDrawer(true)}
					>
						<MenuIcon/>
					</IconButton>
					<SideDrawer
						open={drawerOpen}
						onClose={this.toggleDrawer}
					/>
				</Toolbar>
			</AppBar>
		)
	}
}

export default Header
