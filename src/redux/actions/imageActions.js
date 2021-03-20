import { useSelector } from 'react-redux';

export const getGallery = () => {
    return async (dispatch) => {
        const { galleryData } = useSelector(state => state.imageReducer);
        dispatch({ type: 'GET_GALLERY', payload: galleryData})
    }
}

export const addInGallery = (imageData) => {
    return async (dispatch) => {
        dispatch({ type: 'ADD_IN_GALLERY', payload: imageData})
    }
}

export const removeFromGallery = (imageData) => {
    return async (dispatch) => {
        dispatch({ type: 'REMOVE_FROM_GALLERY', payload: imageData})
    }
}