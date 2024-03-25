import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import welcomeImage from '../assets/images/welcome.png'

const welcome_image = Image.resolveAssetSource(welcomeImage).uri

const MainAppPage = () => {
	return (
		<View style={styles.container}>
			<Image source={{ uri: welcome_image }} style={styles.image} />
			<Text>Welcome Page</Text>
		</View>
	)
}

export default MainAppPage

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center'
	},
	image: {
		width: '100%',
		height: 300,
		marginBottom: 80
	}
})
