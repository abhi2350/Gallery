import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { View, Text, Image, SafeAreaView, Dimensions,Alert } from 'react-native';
import { GLOBAL_STYLES } from '../../global_styles';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromGallery } from '../../src/redux/index';
import { TouchableOpacity } from 'react-native';
import ImageView from 'react-native-image-view';
import { APP_LEVEL_CONSTANTS } from '../../AppLevelConstants';

const { width, height } = Dimensions.get("window");

function GalleryViewScreen() {
    const [showImageModal, setShowImageModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState({});
    const { galleryData } = useSelector(state => state.imageReducer);

    const dispatch = useDispatch();
    const removeImageFromGallery = image => dispatch(removeFromGallery(image));

    const renderImages = ({item, index}) => {
        return (
            <TouchableOpacity
                style={{padding: 1}}
                onPress={() => {
                    let imageObj = {
                        source: {uri: item.photo}
                    }
                    setSelectedImage(imageObj);
                    setShowImageModal(true);
                }}
                onLongPress={() => confirmationDelete(item)}
            >
                <Image 
                    style={{width: (width-38)/3, height: width/3, borderRadius: 10}}
                    source={{
                        uri: item.photo
                    }}
                />
            </TouchableOpacity>
        )
    }

    const confirmationDelete = (imageData) => {
        return new Promise((resolve, reject) => {
            Alert.alert(
                APP_LEVEL_CONSTANTS.GalleryViewScreen.delete,
                APP_LEVEL_CONSTANTS.GalleryViewScreen.sure_delete_msg,
                [
                    {text: APP_LEVEL_CONSTANTS.GalleryViewScreen.no, onPress: () => { resolve(true) }},
                    {text: APP_LEVEL_CONSTANTS.GalleryViewScreen.yes,
                        onPress: () => {  
                            removeImageFromGallery(imageData)
                        }},
                    
                ],
                { cancelable: false }
            )
        })
    }

    const closeImageViewer = () => {
        setShowImageModal(false);
        setSelectedImage({});
    }

    return (
        <View style={[GLOBAL_STYLES.container_stretch]}>
            {galleryData && galleryData.length > 0 ?
                <View style={{marginHorizontal: 16, marginTop: 16}}>
                    <FlatList
                        numColumns={3}
                        data={galleryData}
                        renderItem={renderImages}
                    />
                </View>
                :
                <View style={GLOBAL_STYLES.container_center}>
                    <Text>{APP_LEVEL_CONSTANTS.GalleryViewScreen.no_images_available}</Text>
                </View>
            }
            {selectedImage ? 
                <ImageView
                    images={[selectedImage]}
                    imageIndex={0}
                    isVisible={showImageModal}
                    onClose={closeImageViewer}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    isSwipeCloseEnabled={true}
                    renderHeader={
                        <View style={{ width: '100%', height: 40 }}>
                            <TouchableOpacity
                                hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
                                style={[GLOBAL_STYLES.top_navbar_leftButton, { alignSelf: 'flex-start' }]}
                                onPress={closeImageViewer}
                            >
                                <Image source={require('../../img/cross.png')} />
                            </TouchableOpacity>
                        </View>
                    }
                />
                : null
            }
        </View>
    )
}

export default GalleryViewScreen;