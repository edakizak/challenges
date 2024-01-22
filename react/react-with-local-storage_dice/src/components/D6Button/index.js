// import { useState } from "react";
import { getD6Roll } from "../../utils";
import D6 from "../D6";
import "./D6Button.css";
import useLocalStorageState from "use-local-storage-state";

export function D6Button() {
  const [rolls, setRolls] = useLocalStorageState("rolls", { default: "" });

  const handleRoll = () => {
    const newRoll = { value: getD6Roll(), time: Date.now() };
    setRolls([newRoll, ...rolls]);
  };
  const currentRollValue = rolls[0]?.value;

  return (
    <button className="d6-button" type="button" onClick={handleRoll}>
      <D6 value={currentRollValue} />
    </button>
  );
}
