import React, { createContext, useState, useCallback, useEffect } from "react";
import useGetFetch from "../../hook/useGetFetch";
import Get from "../../URL/Get.json";

export const UsersContent = createContext({
  userData: null,
  getUserData: () => {},
  signOut: () => {},
  loggedIn: false, // 是否登入
});

const UserContent = ({ children }) => {
  const [userData, fetchUserData] = useGetFetch(null);
  const [loggedIn, setLoggedIn] = useState(!!userData);

  const getUserData = useCallback(async () => {
    await fetchUserData({ url: Get.user });
  }, [fetchUserData]);

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    if (userData != null && userData.user) {
      setLoggedIn(true);
    }
  }, [userData]);

  const signOut = useCallback(() => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    setLoggedIn(false);
  }, []);

  return (
    <UsersContent.Provider value={{ userData, getUserData, signOut, loggedIn }}>
      {children}
    </UsersContent.Provider>
  );
};

export default UserContent;
