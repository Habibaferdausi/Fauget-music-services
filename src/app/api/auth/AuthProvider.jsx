"use client";

import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../../../firebaseConfig";
export const AuthContext = createContext();

const auth = getAuth(app);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authChecked, setAuthChecked] = useState(false);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const updateUser = (user, name, photo) => {
    return updateProfile(user, { displayName: name, photoURL: photo });
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };


  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (loggedInUser) => {
      setUser(loggedInUser);
      setLoading(false);
      setAuthChecked(true);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    signIn,
    updateUser,
    logOut,
    loading: loading || !authChecked,
    createUser,
  
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

