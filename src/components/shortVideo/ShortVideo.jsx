import Button from "../common/Button";
import Div from "../common/Div";
import VideoCard from "./VideoCard";
const ShortVideo = () => {
  return (
    <Div className="bg-white   flex flex-col ">
      <div className=" flex ">
        <h2 className="text-3xl font-bold m-3 p-3 ">
          熱門搶先看
          <span className=" text-red-900 font-black text-3xl">！！</span>
        </h2>
        <Button className="ms-auto  px-5 m-5 rounded-md border-2 border-black">
          看更多
        </Button>
      </div>
      <div className="flex flex-row flex-wrap">
        <VideoCard
          videoUri="https://storage.googleapis.com/comic-star-prod/fs/video/37c49a00-80dd-4919-9b7e-b8ab7ea79d7e-s.mp4"
          videoName="探險家的浪漫"
        />
        <VideoCard
          videoUri="https://storage.googleapis.com/comic-star-prod/fs/video/24b891d7-bff4-40da-8c69-bafc4062dee3-s.mp4"
          videoName="咖啡香中的秘密"
        />
        <VideoCard
          videoUri="https://storage.googleapis.com/comic-star-prod/fs/video/9c3af729-4d24-46fc-a293-c04ff59c6a40-s.mp4"
          videoName="雙重生活的彼岸"
        />
        <VideoCard
          videoUri="https://storage.googleapis.com/comic-star-prod/fs/video/d51fc4e9-b70e-4f72-a475-c5070772b708-s.mp4"
          videoName="鋼琴師的心弦"
        />
      </div>
    </Div>
  );
};

export default ShortVideo;
