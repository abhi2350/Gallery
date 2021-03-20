import {
	StyleSheet,
	Platform,
	Dimensions
} from 'react-native';
const { width } = Dimensions.get("window");

export const GLOBAL_STYLES = StyleSheet.create({
    container_center: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		alignContent: 'flex-start',
		backgroundColor: '#FFFFFF'
	},
	
    container_center_darker: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		alignContent: 'flex-start',
		backgroundColor: '#f1f1f1'
    },
    
    container_stretch: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'stretch',
		alignContent: 'stretch',
		backgroundColor: '#FFFFFF'
    },
    
    primary_color_active: {
        backgroundColor: '#00A0FF'
    },

	primary_button_style: {
		backgroundColor: '#f7b844'
	},

	camera_image: {
		width: 80,
		height: 80
	},

	top_navbar_leftButton: {
		width: 50,
		height: '100%',
		alignSelf: 'center',
		justifyContent: 'center',
		alignItems: 'flex-start',
		paddingLeft: 16
	},
})