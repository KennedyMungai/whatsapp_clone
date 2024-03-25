import { StyleSheet } from 'react-native'
import Colors from './Colors'

export const styles = StyleSheet.create({
	block: {
		backgroundColor: 'white',
		borderRadius: 10,
		marginHorizontal: 14,
		marginTop: 20
	},
	item: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 10,
		gap: 10
	},
	separator: {
		height: StyleSheet.hairlineWidth,
		backgroundColor: Colors.lightGray,
		marginLeft: 50
	}
})