import { useEffect } from "react";

import "@/SCSS/index.scss";
import Logo from "@/images/logo.svg";
import Bill from "@/images/icon-dollar.svg";
import Person from "@/images/icon-person.svg";

import InputField, { numberKeys } from "@/components/input-field";
import Button, { props } from "@/components/button";

import useLocalStorageState from "@/hooks/useLocalStorageState";

function App() {
  const [bill, setBill] = useLocalStorageState("0", "bill");
  const [percent, setPercent] = useLocalStorageState(10, "percent");
  const [nop, setNop] = useLocalStorageState("1", "nop");

  const [billNum, setBillNum] = useLocalStorageState(0, "billNum");
  const [nopNum, setNopNum] = useLocalStorageState(1, "nopNum");
  const [tip, setTip] = useLocalStorageState(0, "tip");

  useEffect(() => {
    if (!isNaN(parseFloat(bill))) {
      setBillNum(parseFloat(bill));
    } else {
      setBillNum(0);
    }
  }, [bill]);

  useEffect(() => {
    if (!isNaN(parseInt(nop)) && parseInt(nop) > 1) {
      setNopNum(parseInt(nop));
    } else {
      setNopNum(1);
    }
  }, [nop]);

  useEffect(() => {
    setTip((billNum / 100) * percent);
  }, [billNum, percent]);

  const buttons: props[] = [
    {
      text: "5%",
      value: 5,
      theme: "dark",
      state: setPercent,
    },
    {
      text: "10%",
      value: 10,
      theme: "dark",
      state: setPercent,
    },
    {
      text: "15%",
      value: 15,
      theme: "dark",
      state: setPercent,
    },
    {
      text: "25%",
      value: 25,
      theme: "dark",
      state: setPercent,
    },
    {
      text: "50%",
      value: 50,
      theme: "dark",
      state: setPercent,
    },
  ];

  return (
    <div id="container">
      <img src={Logo} alt="Calculator Logo" id="logo" />

      <div id="calculator">
        <div id="config">
          <InputField name="Bill" icon={Bill} state={setBill} num={bill} />

          <div id="percentage">
            <h3 className="section-heading">Select Tip &#37;</h3>
            <div id="percentage-buttons">
              {buttons.map((props) => {
                return <Button {...props} active={percent === props.value} />;
              })}
              <input
                type="number"
                min="0"
                value={percent}
                placeholder="Custom"
                onChange={(e) => {
                  let val = e.target.value;

                  if (!Number(val) && val !== "") {
                    return;
                  }

                  setPercent(parseInt(val));
                }}
              />
            </div>
          </div>

          <InputField
            name="Number of People"
            state={setNop}
            num={nop.toString()}
            icon={Person}
          />
        </div>

        <div id="results">
          <div id="totals">
            <div className="total" id="tip">
              <div className="text">
                <span className="title">Tip Amount</span>
                <span className="subheading">/ person</span>
              </div>

              <div className="amount">&#36;{(tip / nopNum).toFixed(2)}</div>
            </div>
            <div className="total" id="total">
              <div className="text">
                <span className="title">Total</span>
                <span className="subheading">/ person</span>
              </div>

              <div className="amount">
                &#36;{((tip + billNum) / nopNum).toFixed(2)}
              </div>
            </div>
          </div>
          <button
            className="button light"
            id="reset-button"
            onClick={() => {
              setBill("0");
              setPercent(10);
              setNop("1");
            }}
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
