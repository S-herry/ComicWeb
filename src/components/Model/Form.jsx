import React, { useRef } from "react";
import UserInput from "../User/UserInput";
import Button from "../common/Button";
const Form = ({ handleChangePassword }) => {
  const passwordVal = useRef(null);
  function handleChange(event) {
    event.preventDefault();
    const password = new FormData(passwordVal.current);
    const data = Object.fromEntries(password.entries());
    console.log(data);
  }
  return (
    <div>
      <div className="flex flex-col border-b  border-black mb-3">
        <h3 className=" text-black text-2xl mt-3 mb-2">修改密碼</h3>
      </div>
      <form action="" onSubmit={handleChange} ref={passwordVal}>
        <UserInput label="舊密碼" name="oldPassword" />
        <UserInput label="新密碼" name="newPassword" />
        <UserInput label="新密碼確認" name="Passwords" />
        <div className="flex mt-5">
          <Button
            className="ms-auto text-base bg-red-400 px-2 py-1 text-white rounded-md "
            type="submit"
          >
            確認修改
          </Button>
          <Button
            onClick={handleChangePassword}
            className="ms-2 text-base bg-blue-400 px-2 py-1 text-white rounded-md "
          >
            取消
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
