import Colors from '@/constants/Colors'
import {
	isClerkAPIResponseError,
	useSignIn,
	useSignUp
} from '@clerk/clerk-expo'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import {
	ActivityIndicator,
	Alert,
	KeyboardAvoidingView,
	Linking,
	Platform,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native'
import MaskInput from 'react-native-mask-input'

const OTPPage = () => {
	const [loading, setLoading] = useState(false)
	const [phoneNumber, setPhoneNumber] = useState('')

	const router = useRouter()

	const keyboardPlatformOffset = Platform.OS === 'ios' ? 90 : 0

	const openLink = () => {
		Linking.openURL('https://wikipedia.com')
	}

	const { signUp, setActive } = useSignUp()
	const { signIn } = useSignIn()

	const sendOTP = async () => {
		setLoading(true)

		try {
			await signUp!.create({
				phoneNumber
			})

			signUp!.preparePhoneNumberVerification()

			router.push(`/verify/${phoneNumber}`)
		} catch (error: any) {
			if (isClerkAPIResponseError(error)) {
				if (error.errors[0].code === 'form_identifier_exist') {
					console.log('user exists')

					await trySignIn()
				} else {
					setLoading(false)
					Alert.alert('Error', error.errors[0].message)
				}
			}
		}
	}

	const trySignIn = async () => {
		const { supportedFirstFactors } = await signIn!.create({
			identifier: phoneNumber
		})

		const firstPhoneFactor: any = supportedFirstFactors.find(
			(factor: any) => {
				return factor.strategy === 'phone_code'
			}
		)

		const { phoneNumberId } = firstPhoneFactor

		await signIn?.prepareFirstFactor({
			strategy: 'phone_code',
			phoneNumberId
		})

		router.push(`/verify/${phoneNumber}?signIn=true`)

		setLoading(false)
	}

	const KE_PHONE = [
		'+',
		/\d/,
		/\d/,
		/\d/,
		' ',
		/\d/,
		/\d/,
		/\d/,
		' ',
		/\d/,
		/\d/,
		/\d/,
		' ',
		/\d/,
		/\d/,
		/\d/
	]

	return (
		<KeyboardAvoidingView
			behavior='padding'
			keyboardVerticalOffset={keyboardPlatformOffset}
			style={{ flex: 1 }}
		>
			<View style={styles.container}>
				{loading && (
					<View style={[StyleSheet.absoluteFill, styles.loading]}>
						<ActivityIndicator
							size={'large'}
							color={Colors.primary}
						/>
						<Text style={{ fontSize: 18, padding: 10 }}>
							Sending code...
						</Text>
					</View>
				)}
				<Text style={styles.description}>
					Whatsapp will need to verify your account. Carrier Charges
					may apply
				</Text>
				<View style={styles.list}>
					<View style={styles.listItem}>
						<Text style={styles.listItemText}>Kenya</Text>
						<Ionicons
							name='chevron-forward'
							size={24}
							color={Colors.gray}
						/>
					</View>
					<View style={styles.separator} />

					<MaskInput
						value={phoneNumber}
						keyboardType='phone-pad'
						autoFocus
						placeholder='+254 111 222 333'
						style={styles.input}
						onChangeText={(masked, unmasked) => {
							setPhoneNumber(masked) // you can use the unmasked value as well
						}}
						mask={KE_PHONE}
					/>
				</View>
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

				<View style={{ flex: 1 }} />

				<TouchableOpacity
					onPress={sendOTP}
					style={[
						styles.button,
						phoneNumber !== '' ? styles.enabled : null
					]}
				>
					<Text
						style={
							phoneNumber !== '0'
								? { color: 'white', fontWeight: '600' }
								: null
						}
					>
						Next
					</Text>
				</TouchableOpacity>
			</View>
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
	},
	description: {
		fontSize: 14,
		color: Colors.gray
	},
	list: {
		backgroundColor: 'white',
		width: '100%',
		borderRadius: 10,
		padding: 10
	},
	listItem: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 6,
		marginBottom: 10
	},
	listItemText: {
		fontSize: 18,
		color: Colors.primary
	},
	separator: {
		width: '100%',
		height: 1,
		backgroundColor: Colors.gray,
		opacity: 0.2
	},
	legal: {
		fontSize: 12,
		textAlign: 'center',
		color: 'black'
	},
	link: {
		color: Colors.primary
	},
	button: {
		width: '100%',
		alignItems: 'center',
		backgroundColor: Colors.lightGray,
		padding: 10,
		borderRadius: 10
	},
	enabled: {
		backgroundColor: Colors.primary,
		color: 'white'
	},
	input: {
		backgroundColor: 'white',
		width: '100%',
		fontSize: 16,
		padding: 6,
		marginTop: 10
	},
	loading: {
		...StyleSheet.absoluteFillObject,
		zIndex: 10,
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'center'
	}
})
