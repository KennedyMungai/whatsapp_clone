import Colors from '@/constants/Colors'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import {
	KeyboardAvoidingView,
	Linking,
	Platform,
	StyleSheet,
	Text
} from 'react-native'

const OTPPage = () => {
	const [loading, setLoading] = useState(false)
	const [phoneNumber, setPhoneNumber] = useState('')

	const router = useRouter()

	const keyboardPlatformOffset = Platform.OS === 'ios' ? 90 : 0

	const openLink = () => {
		Linking.openURL('https://wikipedia.com')
	}

	const sendOTP = async () => {}

	const trySignIn = async () => {}

	return (
		<KeyboardAvoidingView style={styles.container}>
			<Text>OTPPage</Text>
		</KeyboardAvoidingView>
	)
}

export default OTPPage

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		padding: 20,
		backgroundColor: Colors.background,
		gap: 20
	}
})
