import { ClerkProvider } from '@clerk/clerk-expo'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import SecureStore from 'expo-secure-store'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import '../global.css'

const PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY

const tokenCache = {
	async getToken(key: string) {
		try {
			return SecureStore.getItemAsync(key)
		} catch (err) {
			return null
		}
	},
	async saveToken(key: string, value: string) {
		try {
			return SecureStore.setItemAsync(key, value)
		} catch (error) {
			return
		}
	}
}

export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary
} from 'expo-router'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

const InitialLayout = () => {
	const [loaded, error] = useFonts({
		SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
		...FontAwesome.font
	})

	// Expo Router uses Error Boundaries to catch errors in the navigation tree.
	useEffect(() => {
		if (error) throw error
	}, [error])

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync()
		}
	}, [loaded])

	if (!loaded) {
		return null
	}

	return (
		<Stack>
			<Stack.Screen name='index' options={{ headerShown: false }} />
			<Stack.Screen
				name='otp'
				options={{
					headerTitle: 'Enter your Phone Number',
					animation: 'slide_from_right',
					headerBackVisible: false
				}}
			/>
			<Stack.Screen
				name='verify/[phoneNumber]'
				options={{ headerTitle: 'Verify Your Phone Number' }}
			/>
		</Stack>
	)
}

const RootLayoutNav = () => {
	return (
		<ClerkProvider
			publishableKey={PUBLISHABLE_KEY!}
			tokenCache={tokenCache}
		>
			<InitialLayout />
		</ClerkProvider>
	)
}

export default RootLayoutNav
