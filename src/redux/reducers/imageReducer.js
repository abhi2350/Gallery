const initialState = {
    galleryData: [],
  };

export const imageReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'GET_GALLERY':
            return {
                ...state,
                galleryData: action.payload
            }
        case 'ADD_IN_GALLERY':
            return {
                ...state,
                galleryData: [...state.galleryData, action.payload]
            }
        case 'REMOVE_FROM_GALLERY':
            return {
                ...state,
                galleryData: state.galleryData.filter(image => image.id !== action.payload.id)
            }
        default:
            return state
    }
}