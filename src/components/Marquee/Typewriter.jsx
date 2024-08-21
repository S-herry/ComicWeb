import Button from "../common/Button";

const Typewriter = () => {
  return (
    <>
      <div className=" bg-yellow-300  rounded-md p-3 w-3/4 flex">
        <p className="flex">
          <Button className="px-2 bg-black text-white mx-3">公告</Button>
          <span>
            爛貨習作的驚悚巨作《孤村草人》 為了活下去他們被迫玩一場狩獵遊戲
          </span>
        </p>
        <p className="flex">
          <Button className="px-2 bg-black text-white mx-3">公告</Button>
          <span>
            爛貨習作的驚悚巨作《孤村草人》 為了活下去他們被迫玩一場狩獵遊戲
          </span>
        </p>
      </div>
    </>
  );
};

export default Typewriter;
