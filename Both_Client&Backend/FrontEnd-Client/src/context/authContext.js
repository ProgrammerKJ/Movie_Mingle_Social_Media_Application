import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    try {
      const res = await axios.post(
        "http://localhost:8800/api/auth/login",
        inputs,
        {
          withCredentials: true,
        }
      );

      const user = res.data;

      // Update localStorage
      localStorage.setItem("user", JSON.stringify(user));

      // Update currentUser state
      setCurrentUser(user);

      return user; // Return the user data if needed
    } catch (error) {
      // Handle login error if needed
      console.error("Login failed", error);
      throw error;
    }
  };

  const signup = async (inputs) => {
    try {
      const res = await axios.post(
        "http://localhost:8800/api/auth/signup",
        inputs
      );

      const user = res.data;

      // Update localStorage
      localStorage.setItem("user", JSON.stringify(user));

      // Update currentUser state
      setCurrentUser(user);

      return user; // Return the user data if needed
    } catch (error) {
      // Handle signup error if needed
      console.error("Signup failed", error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await axios.post("http://localhost:8800/api/auth/logout");

      // Clear localStorage and currentUser state
      localStorage.removeItem("user");
      setCurrentUser(null);
    } catch (error) {
      console.error("Logout failed", error);
      throw error;
    }
  };

  const updateUser = async (updatedUser) => {
    try {
      const res = await axios.put(
        "http://localhost:8800/api/auth/update",
        updatedUser
      );

      const user = res.data;

      // Update localStorage
      localStorage.setItem("user", JSON.stringify(user));

      // Update currentUser state
      setCurrentUser(user);

      return user; // Return the updated user data if needed
    } catch (error) {
      // Handle update error if needed
      console.error("Update failed", error);
      throw error;
    }
  };

  useEffect(() => {
    // Cleanup function for useEffect
    return () => {
      localStorage.removeItem("user");
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ currentUser, login, logout, signup, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
