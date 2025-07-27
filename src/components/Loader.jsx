import { ClipLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <ClipLoader color="#36d7b7" size={50} />
    </div>
  );
};

export default Loader;
