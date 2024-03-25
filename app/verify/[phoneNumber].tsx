import Colors from '@/constants/Colors'
import { Stack, useLocalSearchParams } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { Linking, StyleSheet, Text, View } from 'react-native'

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

	return (
		<View style={styles.container}>
			<Stack.Screen options={{ headerTitle: phoneNumber }} />
			<Text style={styles.legal}>
				We have sent you an SMS with a code the number above
			</Text>
			<Text style={styles.legal}>
				To complete your phone number verification, please enter the 6
				digit verification code
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
