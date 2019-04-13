import axios from 'axios'
import history from '../history'

const GET_PHOTOS = 'GET_PHOTOS'

const initialState = {
  photos: []
}

const setPhotos = photos => ({
  type: GET_PHOTOS,
  photos
})

export const getPhotos = () => async dispatch => {
  try {
    let {data} = await axios.get('/api/photos')
    console.log('data', data)
    dispatch(setPhotos(data))
  } catch (err) {
    console.error(err)
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PHOTOS:
      return Object.assign({}, state, {
        photos: action.photos
      })
    default:
      return state
  }
}
