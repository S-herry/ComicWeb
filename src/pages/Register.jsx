import { useRef } from "react";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import Post from "../URL/Post.json";
import usePostFetch from "../hook/usePostFetch";
const Register = () => {
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

  return (
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
          <Input label="姓名" className="mb-3" name="name" />
          <Input label="信箱" type="email" className="mb-3" name="email" />
          <Input label="密碼" className="mb-3" name="password" />
          <Button
            type="submit"
            className=" bg-yellow-300 mt-5 px-5 py-2 text-white rounded-md"
          >
            註冊
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
