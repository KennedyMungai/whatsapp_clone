import Colors from '@/constants/Colors'
import { useLocalSearchParams } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const VerifyOTPPage = () => {
	const { phoneNumber, signIn } = useLocalSearchParams<{
		phoneNumber: string
		signIn: string
	}>()

	const [code, setCode] = useState('')

	useEffect(() => {
		if (code.length === 6) {
			console.log('code', code)

			// TODO: Add verification code
		}
	}, [code])

	const verifyCode = async () => {}

	const verifySignIn = async () => {}

	const resendCode = async () => {}

	const openLink = () => {
		Linking.openURL('https://wikipedia.com')
	}

	return (
		<View style={styles.container}>
			<Text style={styles.legal}>
				You must be{' '}
				<Text style={styles.link} onPress={openLink}>
					at least 16 years old
				</Text>{' '}
				to register. Learn how WhatsApp works with the{' '}
				<Text style={styles.link} onPress={openLink}>
					Meta Companies
				</Text>
			</Text>
		</View>
	)
}

export default VerifyOTPPage

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		padding: 20,
		backgroundColor: Colors.background,
		gap: 20
	},
	loading: {
		backgroundColor: 'rgba(0,0,0,0.5)',
		alignItems: 'center',
		justifyContent: 'center'
	},
	legal: {
		fontSize: 14,
		textAlign: 'center',
		color: '#000'
	},
	button: {
		width: '100%',
		alignItems: 'center'
	},
	buttonText: {
		color: Colors.primary,
		fontSize: 18
	},
	link: {
		color: Colors.primary
	}
})
