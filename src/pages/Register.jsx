import { useEffect, useRef, useContext } from "react";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import Post from "../URL/Post.json";
import usePostFetch from "../hook/usePostFetch";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Register = () => {
  const isLogin = useSelector((state) => state.user.isLogin);
  useEffect(() => {
    if (isLogin) {
      window.location.href = "http://localhost:9000/";
    }
  }, [isLogin]);

  const formRef = useRef(null);
  const [postFetchData, PostFetchData] = usePostFetch(null);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());
    console.log("Sending data:", JSON.stringify(data));
    PostFetchData({
      url: Post.register,
      data: data,
    });
  }

  useEffect(() => {
    if (postFetchData != null && !postFetchData.repeat) {
      window.location.href = "http://localhost:9000/login";
    }
  }, [postFetchData]);

  return (
    <>
      {!isLogin ? (
        <div className="text-xl  flex flex-col justify-center items-center h-screen  ">
          <div className="bg-white/50 w-1/3 p-5 rounded-lg flex flex-col justify-center items-center shadow-2xl shadow-white">
            <h1 className="text-4xl bg-yellow-200 p-5 rounded-lg my-10 text-black border-2 font-black  text-center ">
              漫畫平台註冊頁面
            </h1>
            <form
              ref={formRef}
              action={Post.register}
              method="POST"
              className="flex flex-col justify-center items-center w-1/3"
              onSubmit={handleSubmit}
            >
              <Input label="姓名" className="mb-3" name="name" required />
              <Input
                label="信箱"
                type="email"
                className="mb-3"
                name="email"
                required
              />
              <Input label="密碼" className="mb-3" name="password" required />
              <div className="flex  mt-5">
                <Button
                  type="submit"
                  className=" bg-red-500 px-5 py-2 text-white rounded-md"
                >
                  註冊
                </Button>
                <Link
                  to="/login"
                  className=" bg-yellow-300 px-5 py-2 ms-5 text-white rounded-md"
                >
                  登入
                </Link>
              </div>

              <span
                className={`${
                  postFetchData != null && postFetchData.repeat
                    ? " opacity-100"
                    : "opacity-0"
                } text-red-500 font-black bg-white mt-5 px-3 py-2 rounded-lg`}
              >
                信箱已註冊過
              </span>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Register;
