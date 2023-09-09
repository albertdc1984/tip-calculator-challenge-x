import { useState } from "react";
import Bill from "./components/Bill";
import Button from "./components/Button";
import Tip from "./components/Tip";
import Total from "./components/Total";
import "./styles.css";

export default function App() {
  const [price, setPrice] = useState(0);

  const handlePrice = (e) => {
    setPrice(e.target.value);
    console.log(price);
  };

  const [percent1, setPercent1] = useState(0);
  const [percent2, setPercent2] = useState(0);
  const percent = Number(percent1) + Number(percent2);

  const tip = (price * percent) / 100;
  const total = Number(price) + Number(tip);

  const handleReset = () => {
    setPrice(0);
    setPercent1(0);
    setPercent2(0);
  };

  return (
    <div className="App">
      <Bill price={price} onPrice={handlePrice} />
      <Tip percent={percent1} onPercent={setPercent1}>
        How did you like the service?
      </Tip>
      <Tip percent={percent2} onPercent={setPercent2}>
        How did your friend like the service?
      </Tip>
      {price > 0 && (
        <>
          <Total total={total} price={price} tip={tip} />
          <Button onReset={handleReset} />
        </>
      )}
    </div>
  );
}
