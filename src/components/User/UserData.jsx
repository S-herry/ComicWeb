import React, { useEffect, useRef, useState } from "react";
import Button from "../common/Button";
import Form from "../model/Form";
import UserInput from "./UserInput";
import { useSpring, animated, useTransition } from "@react-spring/web";
const UserData = ({ userDate }) => {
  const form = useRef(null);
  const [changeData, setChangeData] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  function handleChangeData() {
    setChangeData(!changeData);
    setChangePassword(false);
  }

  function handleChangePassword() {
    setChangePassword(!changePassword);
    setChangeData(false);
  }

  const transitions = useTransition(changeData, {
    from: { opacity: 0 },
    enter: { opacity: 1, config: { duration: 100 } },
    leave: { opacity: 0, config: { duration: 100 } },
  });

  const changePasswordTransitions = useTransition(changePassword, {
    from: { opacity: 0, transform: "scale(0.8)" }, // 初始狀態：縮小
    enter: { opacity: 1, transform: "scale(1)" }, // 顯示狀態：正常大小
    config: {
      tension: 280, // 控制彈性
      friction: 12, // 控制阻力
    },
  });

  function onChangeUserData(event) {
    event.preventDefault();
    const loginData = new FormData(form.current);
    const data = Object.fromEntries(loginData.entries());
    console.log(data);
  }

  return (
    <div className="flex flex-col">
      <div className="flex border-b  border-black mb-3 ">
        <h3 className=" text-black text-2xl">帳號資訊</h3>

        <Button
          className={`${
            changeData ? "bg-red-300" : ""
          } ms-auto text-base  hover:bg-red-300 rounded-md  mb-2 px-2 py-1`}
          onClick={handleChangeData}
        >
          修改個人資料
        </Button>
        <Button
          className={`${
            changePassword ? "bg-red-300" : ""
          } ms-2 text-base  hover:bg-red-300 rounded-md  mb-2 px-2 py-1`}
          onClick={() => handleChangePassword()}
        >
          密碼修改
        </Button>
      </div>
      <form action="" onSubmit={onChangeUserData} ref={form}>
        <UserInput
          label="信箱"
          name="email"
          changeData={changeData}
          userDate={
            userDate != null && userDate.userData ? userDate.userData.email : ""
          }
        />
        <UserInput
          label="暱稱"
          name="gender"
          changeData={changeData}
          userDate={
            userDate != null && userDate.userData ? userDate.userData.name : ""
          }
        />
        <UserInput
          label="生日"
          changeData={changeData}
          name="birthday"
          userDate="088-12-24"
        />
        {transitions(
          (props, item) =>
            item && (
              <animated.div style={props}>
                <div className="flex mt-5">
                  <Button
                    className="ms-auto text-base bg-red-400 px-2 py-1 text-white rounded-md"
                    type="submit"
                  >
                    確認修改
                  </Button>
                  <Button
                    className="ms-2 text-base bg-blue-400 px-2 py-1 text-white rounded-md"
                    onClick={handleChangeData}
                  >
                    取消
                  </Button>
                </div>
              </animated.div>
            )
        )}
      </form>
      {changePasswordTransitions(
        (props, item) =>
          item && (
            <animated.div style={props}>
              <Form handleChangePassword={handleChangePassword} />
            </animated.div>
          )
      )}
    </div>
  );
};

export default UserData;
