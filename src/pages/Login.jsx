import React, { useEffect, useRef, useState } from "react";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import Post from "../URL/Post.json";
import usePostFetch from "../hook/usePostFetch";
const Login = () => {
  const loginRef = useRef(null);
  const [loginDate, fetchLoginDate] = usePostFetch({});
  function handleLogin(event) {
    event.preventDefault();
    const loginData = new FormData(loginRef.current);
    const data = Object.fromEntries(loginData.entries());

    fetchLoginDate({
      url: Post.login,
      data: data,
    });
  }
  useEffect(() => {
    if (loginDate != undefined) {
      localStorage.setItem("token", loginDate.token);
      if (loginDate.user) {
        window.location.href = "http://localhost:9000/admin";
      }
    }
  }, [loginDate]);

  return (
    <div className="text-xl  flex flex-col justify-center items-center h-screen  ">
      <div className="bg-white/50 w-1/3 p-5 rounded-lg flex flex-col justify-center items-center shadow-2xl shadow-white">
        <h1 className="text-4xl bg-yellow-200 p-5 rounded-lg my-10 text-black border-2 font-black  text-center ">
          漫畫平台登入頁面
        </h1>
        <form
          ref={loginRef}
          action={Post.login}
          method="POST"
          className="flex flex-col justify-center items-center w-1/3"
          onSubmit={handleLogin}
        >
          <Input label="信箱" type="email" className="mb-3" name="email" />
          <Input label="密碼" name="password" className="mb-3" />
          <Button
            type="submit"
            className=" bg-yellow-300 mt-5 px-5 py-2 text-white rounded-md"
          >
            登入
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
