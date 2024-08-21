import React from "react";
import Input from "../common/Input";
import Button from "../common/Button";
const SignUpForm = () => {
  return (
    <form action="">
      <Input label="姓名" name="name" id="name" minLength={3} maxLength={64} />
      <Input label="信箱" name="name" id="name" minLength={10} />
      {/* <Button label="註冊" /> */}
    </form>
  );
};

export default SignUpForm;
