import "./Photo.css";

import { uploads } from "../../utils/config";

// components
import Message from "../../components/Message";
import { Link } from "react-router-dom";
import PhotoItem from "../../components/PhotoItem";
import LikeContainer from "../../components/LikeContainer";


// Hooks
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useResetComponentMessage } from "../../hooks/useResetComponentMessage";

// Redux
import { getPhoto, like } from "../../slices/photoSlice";

const Photo = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  
  const resetMessage = useResetComponentMessage(dispatch);

  const { user } = useSelector((state) => state.auth);
  const { photo, loading, error, message } = useSelector(
    (state) => state.photo
  );

  // Comments

  // Load photo data
  useEffect(() =>{
    dispatch(getPhoto(id));
  }, [dispatch, id]);

  // Like and Comments
  const handleLike = () =>{
    dispatch(like(photo._id))

    resetMessage()
  }

  if(loading){
    return<p>Carregando...</p>
  }
  return <div id="photo">
    <PhotoItem photo={photo} />
    <LikeContainer photo={photo} user={user} handleLike={handleLike}  />
    <div className="message-container">
      {error && <Message msg={error} type="error" />}
      {message && <Message msg={message} type="success" />}
    </div>
    
     </div>;
};

export default Photo;
