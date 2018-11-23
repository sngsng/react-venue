import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

const SideDrawer = (props) => {

	const {open, onClose} = props

	return (
		<Drawer
			anchor="right"
			open={open}
			onClose={() => {onClose(false)}}
		>
			<List component="nav">
				<ListItem button onClick={() => console.log('Featured')}>Event starts in</ListItem>
				<ListItem button onClick={() => console.log('Featured')}>Venue NFO</ListItem>
				<ListItem button onClick={() => console.log('Featured')}>Highlights</ListItem>
				<ListItem button onClick={() => console.log('Featured')}>Pricing</ListItem>
				<ListItem button onClick={() => console.log('Featured')}>Location</ListItem>

			</List>
		</Drawer>
	)
}

export default SideDrawer
