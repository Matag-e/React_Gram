import "./Home.css";

// Components
import PhotoItem from "../../components/PhotoItem";
import { Link } from "react-router-dom";

// Hooks
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAuth } from "../../hooks/useAuth";

// Redux
import { getAllPhotos, like } from "../../slices/photoSlice";

const Home = () => {
  const dispatch = useDispatch();
  
  const { user } = useSelector((state) => state.auth);
  const { photos, loading } = useSelector((state) => state.photo);

  // Load all photos
  useEffect(() => {
    dispatch(getAllPhotos());
  }, [dispatch]);

  // Like a photo
  const handleLike = (photo) => {
    dispatch(like(photo._id));
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div id="home">
      {photos &&
        photos.map((photo) => (
          <div key={photo._id}>
            <PhotoItem 
              photo={photo} 
              user={user} 
              handleLike={handleLike} 
            />
          </div>
        ))}
      {photos && photos.length === 0 && (
        <h2 className="no-photos">
          Ainda não há fotos publicadas, <Link to={`/users/${user?._id}`}>clique aqui</Link> para começar.
        </h2>
      )}
    </div>
  );
};

export default Home;
