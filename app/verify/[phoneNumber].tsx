import Colors from '@/constants/Colors'
import { Stack, useLocalSearchParams } from 'expo-router'
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

	useEffect(() => {
		if (code.length === 6) {
			console.log('code', code)

			// TODO: Add verification code
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
					<Text
						key={index}
						style={[styles.cellRoot, isFocused && styles.focusCell]}
						onLayout={getCellOnLayoutHandler(index)}
					>
						{symbol || (isFocused ? <Cursor /> : null)}
					</Text>
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
	},
	codeFieldRoot: {
		marginTop: 20
	},
	cellRoot: {
		width: 50,
		height: 50,
		borderRadius: 10,
		marginRight: 5,
		lineHeight: 45,
		fontSize: 24,
		borderWidth: 2,
		borderColor: '#00000030',
		textAlign: 'center'
	},
	focusCell: {
		borderColor: '#000'
	}
})
