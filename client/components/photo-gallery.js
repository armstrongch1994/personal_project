import React, {Component} from 'react'
import {getPhotos} from '../store/photo.js'
import {connect} from 'react-redux'
class PhotoGallery extends Component {
  componentDidMount() {
    this.props.onLoadCampuses()
  }
  render() {
    console.log('props', this.props.photos)
    return (
      <div className="photo-gallery-container">This is the photo gallery</div>
    )
  }
}
const mapStateToProps = state => ({
  photos: state.allPhotos.photos
})

const mapDispatchToProps = dispatch => ({
  onLoadCampuses: () => {
    dispatch(getPhotos())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(PhotoGallery)
