import "./Navbar.css";

// Components
import { NavLink, Link } from "react-router-dom";
import {
  BsSearch,
  BsHouseDoorFill,
  BsFillPersonFill,
  BsFillCameraFill,
  BsSun,
  BsMoon
} from "react-icons/bs";

// Hooks
import { useState, useContext } from "react";
import { useAuth } from "../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// Context
import { ThemeContext } from "../context/ThemeContext";

//  Redux
import { logout, reset } from "../slices/authSlice";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { auth } = useAuth();
  const { user } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    if (query) {
      return navigate(`/search?q=${query}`);
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());

    navigate("/login")
  };

  return (
    <nav id="nav">
      <Link to="/">ReactGram</Link>
      <form id="search-form" onSubmit={handleSearch}>
        <BsSearch />
        <input
          type="text"
          placeholder="Pesquisar"
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
      <ul id="nav-links">
        <li>
          <span onClick={toggleTheme} className="theme-toggle">
            {theme === "dark" ? <BsSun /> : <BsMoon />}
          </span>
        </li>
        {auth ? (
          <>
            <li>
              <NavLink to="/">
                <BsHouseDoorFill />
                <span>Início</span>
              </NavLink>
            </li>
            {user && (
              <li>
                <NavLink to={`/users/${user._id}`}>
                  <BsFillCameraFill />
                  <span>Minhas Fotos</span>
                </NavLink>
              </li>
            )}
            <li>
              <NavLink to={`/profile`}>
                <BsFillPersonFill />
                <span>Perfil</span>
              </NavLink>
            </li>
            <li>
              <span onClick={handleLogout}>
                <span>Sair</span>
              </span>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/login">Entrar</NavLink>
            </li>
            <li>
              <NavLink to="/register">Cadastrar</NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
