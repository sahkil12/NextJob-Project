import { BeatLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="min-h-screen flex justify-center items-center align-middle">
      <BeatLoader color="#07cca2" size={20} />
    </div>
  );
};

export default Loader;
