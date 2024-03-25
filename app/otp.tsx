import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import {
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

	const sendOTP = async () => {}

	const trySignIn = async () => {}

	return (
		<KeyboardAvoidingView style={{ flex: 1 }}>
			<View style={styles.container}>
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
						style={styles.input}
						onChangeText={(masked, unmasked) => {
							setPhoneNumber(masked) // you can use the unmasked value as well

							// assuming you typed "9" all the way:
							console.log(masked) // (99) 99999-9999
							console.log(unmasked) // 99999999999
						}}
						mask={[
							'(',
							/\d/,
							/\d/,
							')',
							' ',
							/\d/,
							/\d/,
							/\d/,
							/\d/,
							/\d/,
							'-',
							/\d/,
							/\d/,
							/\d/,
							/\d/
						]}
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
	}
})
