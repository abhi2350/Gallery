import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { GLOBAL_STYLES } from '../../global_styles';
import ImagePicker from 'react-native-image-crop-picker';
import { useDispatch } from 'react-redux';
import { addInGallery } from '../../src/redux/index';
import { APP_LEVEL_CONSTANTS } from '../../AppLevelConstants';

const CameraAndGalleryScreen = ({navigation}) => {
    const dispatch = useDispatch();
    const addImageInGallery = image => dispatch(addInGallery(image));

    function onPressCamera() {
        ImagePicker.openCamera({
		}).then(image => {
			try{
                let imageObj = {
                    id: new Date().getTime(),
                    photo: image.path
                }
                addImageInGallery(imageObj)
			}catch(err){
				console.log(this,'while take img', err);
			}
		}).catch(err=>{
			console.log(this, 'during take img', err);
		}); 
    }

    function onPressGallery() {
        navigation.navigate('GalleryViewScreen')
    }

    return (
        <View style={GLOBAL_STYLES.container_center}>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity 
                    style={GLOBAL_STYLES.container_center}
                    onPress={onPressCamera}
                >
                    <Image style={GLOBAL_STYLES.camera_image} source={require('../../img/camera.png')} />
                    <Text style={{marginTop: 15}}>{APP_LEVEL_CONSTANTS.CameraAndGalleryScreen.camera}</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={GLOBAL_STYLES.container_center}
                    onPress={onPressGallery}
                >
                    <Image style={GLOBAL_STYLES.camera_image} source={require('../../img/gallery.png')} />
                    <Text style={{marginTop: 15}}>{APP_LEVEL_CONSTANTS.AppMainScreen.gallery}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}

export default CameraAndGalleryScreen;