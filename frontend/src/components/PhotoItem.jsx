import './PhotoItem.css'

import { uploads } from '../utils/config'
import { Link } from 'react-router-dom'

// Components
import LikeContainer from './LikeContainer'

const PhotoItem = ({ photo, user, handleLike }) => {
  return (
    <div className="photo-item">
      <div className="photo-header">
        <Link to={`/users/${photo.userId}`}>{photo.userName}</Link>
      </div>
      {photo.image && (
        <img src={`${uploads}/photos/${photo.image}`} alt={photo.title} />
      )}
      <div className="photo-footer">
        {handleLike && user && (
           <LikeContainer photo={photo} user={user} handleLike={handleLike} />
        )}
        <div className="photo-info">
            <p>
              <span className="author-link">{photo.userName}</span>
              <span className="photo-title"> {photo.title}</span>
            </p>
        </div>
        <Link className="btn-comment" to={`/photos/${photo._id}`}>Ver comentários</Link>
      </div>
    </div>
  )
}

export default PhotoItem