import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import welcomeImage from '../assets/images/welcome.png'
import Colors from '@/constants/Colors'

const welcome_image = Image.resolveAssetSource(welcomeImage).uri

const MainAppPage = () => {
	const openLink = () => {}

	return (
		<View style={styles.container}>
			<Image source={{ uri: welcome_image }} style={styles.image} />
			<Text style={styles.headline}>Welcome to Whatsapp Clone</Text>
			<Text style={styles.description}>
				Read our{' '}
				<Text style={styles.link} onPress={openLink}>
					Privacy Policy
				</Text>
				. {'Tap "Agree & Continue" to accept the '}
				<Text style={styles.link} onPress={openLink}>
					Terms of Service
				</Text>
				.
			</Text>
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
	},
	headline: {
		fontSize: 24,
		fontWeight: 'bold',
		marginVertical: 20
	},
	description: {
		fontSize: 14,
		textAlign: 'center',
		marginBottom: 80,
		color: Colors.gray
	},
	link: {
		color: Colors.primary
	},
	button: {
		width: '100%',
		height: 60,
		borderRadius: 50,
		backgroundColor: Colors.primary,
		justifyContent: 'center',
		alignItems: 'center'
	}
})
