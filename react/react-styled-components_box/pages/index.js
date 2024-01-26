import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "../components/BoxWithStyledComponents.js";
// import { View } from "react";
import React from "react";

export default function HomePage() {
  return (
    // ### Bonus: Aligning Boxes Horizontally
    <div
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <BoxWithClassName />
      <BoxWithClassName isBlack />

      <BoxWithStyledComponents $isBlack={false} />
      <BoxWithStyledComponents $isBlack={true} />
    </div>
  );
}
