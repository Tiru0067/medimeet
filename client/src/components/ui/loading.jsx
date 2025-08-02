// src/components/Spinner/index.jsx
import { BeatLoader } from "react-spinners";

export default function Spinner({ size = 15, color = "#2b7abf" }) {
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
}
