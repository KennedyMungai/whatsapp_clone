import Colors from '@/constants/Colors'
import { Stack, useLocalSearchParams, useRouter } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {
	CodeField,
	Cursor,
	useBlurOnFulfill,
	useClearByFocusCell
} from 'react-native-confirmation-code-field'

const VerifyOTPPage = () => {
	const { phoneNumber, signIn } = useLocalSearchParams<{
		phoneNumber: string
		signIn: string
	}>()

	const [code, setCode] = useState('')

	const router = useRouter()

	useEffect(() => {
		if (code.length === 6) {
			if (signIn === 'true') {
				verifySignIn()
			} else {
				verifyCode()
			}
		}
	}, [code])

	const CELL_COUNT = 6

	const ref = useBlurOnFulfill({ value: code, cellCount: CELL_COUNT })

	const [props, getCellOnLayoutHandler] = useClearByFocusCell({
		value: code,
		setValue: setCode
	})

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

			<CodeField
				ref={ref}
				{...props}
				// Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
				value={code}
				onChangeText={setCode}
				cellCount={CELL_COUNT}
				rootStyle={styles.codeFieldRoot}
				keyboardType='number-pad'
				textContentType='oneTimeCode'
				// autoComplete={Platform.select({
				// 	android: 'sms-otp',
				// 	default: 'one-time-code'
				// })}
				testID='my-code-input'
				renderCell={({ index, symbol, isFocused }) => (
					<View
						key={index}
						style={[styles.cellRoot, isFocused && styles.focusCell]}
						onLayout={getCellOnLayoutHandler(index)}
					>
						<Text style={styles.cellText}>
							{symbol || (isFocused ? <Cursor /> : null)}
						</Text>
					</View>
				)}
			/>

			<TouchableOpacity style={styles.button} onPress={resendCode}>
				<Text style={styles.buttonText}>
					Didn't receive a verification code
				</Text>
			</TouchableOpacity>
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
	},
	codeFieldRoot: {
		marginTop: 20,
		width: 260,
		marginLeft: 'auto',
		marginRight: 'auto',
		gap: 10
	},
	cellRoot: {
		width: 40,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
		borderBottomColor: '#ccc',
		borderBottomWidth: 1
	},
	cellText: {
		color: '#000',
		fontSize: 36,
		textAlign: 'center'
	},
	focusCell: {
		paddingBottom: 4,
		borderBottomColor: '#000',
		borderBottomWidth: 2
	}
})
