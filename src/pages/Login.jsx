import React from "react";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
const Login = () => {
  return (
    <div className="text-xl bg-black flex flex-col justify-center items-center h-screen  ">
      <div className="bg-white w-1/3 p-5 rounded-lg flex flex-col justify-center items-center">
        <h1 className="text-4xl bg-yellow-200 p-5 rounded-lg my-10 text-black border-2 font-black  text-center ">
          漫畫平台登入頁面
        </h1>
        <form
          action="/admin"
          className="flex flex-col justify-center items-center w-1/3"
        >
          <Input label="帳號" className="mb-3" />
          <Input label="密碼" className="mb-3" />
          <Button
            className=" bg-yellow-300 mt-5 px-5 py-2 text-white rounded-md"
            type="submit"
          >
            登入
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
