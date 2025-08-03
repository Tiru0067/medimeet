// src/components/Spinner/index.jsx
import { SiExpertsexchange } from "react-icons/si";
import { BeatLoader } from "react-spinners";

const Loading = ({ size = 15, color = "#2b7abf" }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BeatLoader size={size} color={color} />
    </div>
  );
};

export default Loading;
