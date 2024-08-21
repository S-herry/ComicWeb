import Tab from "../common/Tab";

const RecommendCard = () => {
  return (
    <div className=" bg-slate-800 w-52  basis ">
      <img
        src="https://www.themoviedb.org/t/p/w220_and_h330_face/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg"
        alt=""
        className=" h-56 w-full"
      />
      <p className=" text-white  font-bold px-4">coco電影</p>
      <div className="px-4">
        <Tab label="完結" />
        <Tab label="完結" className="mx-2 text-white" />
      </div>
    </div>
  );
};

export default RecommendCard;
