import React, { useEffect, useRef } from "react";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import Post from "../URL/Post.json";
import usePostFetch from "../hook/usePostFetch";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userAction } from "../store/userSlice";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
const Login = () => {
  const loginRef = useRef(null);
  const token = document.cookie.split("token=")[1]?.split(";")[0];
  const [loginDate, fetchLoginDate] = usePostFetch(null);
  const isLogin = useSelector((state) => state.user.isLogin);
  const dispatch = useDispatch();

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
    if (loginDate != null) {
      document.cookie = `token=Bearer ${loginDate.token}; path=/;`;
      dispatch(userAction.changeIsLogin());
      window.location.href = "http://localhost:9000/";
    } else if (token != null) {
      dispatch(userAction.changeIsLogin());
      window.location.href = "http://localhost:9000/";
    }
  }, [loginDate]);

  const handleSuccess = (credentialResponse) => {
    console.log("ID Token: ", credentialResponse.credential);

    // 這裡你可以將取得的 credential（即 id_token）發送到後端驗證
    fetch("http://127.0.0.1:3000/auth/google", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id_token: credentialResponse.credential }),
    })
      .then((res) => res.json())
      .then((data) => console.log("後端驗證成功:", data))
      .catch((err) => console.error("後端錯誤:", err));
  };

  const handleError = () => {
    console.log("登入失敗");
  };
  return (
    <>
      {!isLogin ? (
        <div className="text-xl  flex flex-col justify-center items-center h-screen   ">
          <div className="bg-white/50 w-1/3 p-5 rounded-lg flex flex-col justify-center items-center shadow-2xl shadow-white">
            <h1 className="text-4xl bg-yellow-200 p-5 rounded-lg my-10 text-black border-2 font-black  text-center ">
              漫畫平台登入頁面
            </h1>
            <GoogleOAuthProvider clientId="628247640283-bmpcl3ro32alr1jmg04v6irpdoc3s8bg.apps.googleusercontent.com">
              <div className="App">
                <h2>Google 登入</h2>
                <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
              </div>
            </GoogleOAuthProvider>
            <form
              ref={loginRef}
              action={Post.login}
              method="POST"
              className="flex flex-col justify-center items-center w-1/3"
              onSubmit={handleLogin}
            >
              <Input label="信箱" type="email" className="mb-3" name="email" />
              <Input label="密碼" name="password" className="mb-3" />
              <div className="flex">
                <Button
                  type="submit"
                  className=" bg-yellow-300 border-2 me-5 mt-5 px-5 py-2 text-white rounded-md"
                >
                  登入
                </Button>
                <Link
                  to="/register"
                  className=" bg-red-500 border-2 mt-5 px-5 py-2 text-white rounded-md"
                >
                  註冊
                </Link>
              </div>

              <span
                className={` ${
                  loginDate != null && !loginDate.user
                    ? "opacity-100"
                    : "opacity-0"
                } text-red-700 font-black mt-5 bg-white rounded-md px-3 py-2`}
              >
                帳號或密碼錯誤
              </span>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Login;
