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
	View
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
				</View>
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
	}
})
