import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const MainAppPage = () => {
	return (
		<View style={styles.container}>
			<Text>MainAppPage</Text>
		</View>
	)
}

export default MainAppPage

const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: 'white' }
})
