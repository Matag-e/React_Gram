import { api, requestConfig } from "../utils/config";

// Register a user
const register = async (data) => {
  const config = requestConfig("POST", {
    password: data.password,
    name: data.name,
    email: data.email,
    confirmPassword: data.confirmPassword,
  }
  );

  try {
    const response = await fetch(`${api}/users/register`, config);

    if (!response.ok) {
      // Tratar erros HTTP
      const error = await response.json();
      throw new Error(error.message || "Failed to register");
    }

    const res = await response.json();
    localStorage.setItem("user", JSON.stringify(res));
    return res;
  } catch (error) {
    console.error("Register Error:", error.message);
    return { error: error.message };
  }
};

// Logout a user
const logout = () => {
  localStorage.removeItem("user");
};

// Sign in a user
const login = async (data) => {
  const config = requestConfig("POST", data);

  try {
    const response = await fetch(`${api}/users/login`, config);

    if (!response.ok) {
      // Tratar erros HTTP
      const error = await response.json();
      throw new Error(error.message || "Failed to login");
    }

    const res = await response.json();
    if (res._id) {
      localStorage.setItem("user", JSON.stringify(res));
    }
    return res;
  } catch (error) {
    console.error("Login Error:", error.message);
    return { error: error.message };
  }
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
