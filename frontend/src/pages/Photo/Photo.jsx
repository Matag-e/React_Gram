import "./Photo.css";

import { uploads } from "../../utils/config";

// components
import Message from "../../components/Message";
import { Link } from "react-router-dom";
import LikeContainer from "../../components/LikeContainer";
import PhotoItem from "../../components/PhotoItem";

// Hooks
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useResetComponentMessage } from "../../hooks/useResetComponentMessage";

// Redux
import { getPhoto, like, comment } from "../../slices/photoSlice";

const Photo = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const resetMessage = useResetComponentMessage(dispatch);

  const { user } = useSelector((state) => state.auth);
  const { photo, loading, error, message } = useSelector(
    (state) => state.photo
  );

  const [commentText, setCommentText] = useState("");

  // Load photo data
  useEffect(() => {
    dispatch(getPhoto(id));
  }, [dispatch, id]);

  // Like a photo
  const handleLike = () => {
    dispatch(like(photo._id));
    resetMessage();
  };

  // Insert a comment
  const handleComment = (e) => {
    e.preventDefault();

    const commentData = {
      comment: commentText,
      id: photo._id,
    };

    dispatch(comment(commentData));

    setCommentText("");
    resetMessage();
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div id="photo-details">
      <div className="photo-container">
        {photo.image && (
          <img src={`${uploads}/photos/${photo.image}`} alt={photo.title} />
        )}
      </div>
      <div className="details-container">
        <div className="details-header">
           <Link to={`/users/${photo.userId}`}>
             {photo.userName}
           </Link>
           {/* Placeholder para avatar se não tiver */}
        </div>

        <div className="comments-section">
            <div className="photo-caption">
                <Link to={`/users/${photo.userId}`} className="author-link">{photo.userName}</Link>
                <span> {photo.title}</span>
            </div>
            {photo.comments && photo.comments.length > 0 ? (
                photo.comments.map((comment) => (
                    <div className="comment" key={comment.comment}>
                        <div className="author">
                            {comment.userImage && (
                                <img src={`${uploads}/users/${comment.userImage}`} alt={comment.userName} />
                            )}
                            <Link to={`/users/${comment.userId}`}>{comment.userName}</Link>
                        </div>
                        <p>{comment.comment}</p>
                    </div>
                ))
            ) : (
                <p className="no-comments">Não há comentários ainda.</p>
            )}
        </div>

        <div className="actions-section">
            <LikeContainer photo={photo} user={user} handleLike={handleLike} />
            
            <div className="message-container">
              {error && <Message msg={error} type="error" />}
              {message && <Message msg={message} type="success" />}
            </div>

            {user && (
                <form onSubmit={handleComment}>
                    <input
                        type="text"
                        placeholder="Adicione um comentário..."
                        onChange={(e) => setCommentText(e.target.value)}
                        value={commentText || ""}
                    />
                    <input type="submit" value="Publicar" />
                </form>
            )}
        </div>
      </div>
    </div>
  );
};

export default Photo;
