import "./App.css";
import cake from "./assets/cake-logo.svg";
import InputBox from "./components/InputBox";
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <h2>ROI Calculator</h2>
          <div className="switch__wrapper">
            <label>
              <img src={cake} alt="" />
              cake
            </label>
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round checked"></span>
            </label>
            <label>usd</label>
          </div>
          {/* ============================ Big Input Box  */}
          <InputBox />
          {/* ============================ Default Select Value  */}
          <div className="default__value__conversion">
            <div className="default-value">
              <span>$1000</span>
              <span>$100</span>
            </div>
            <div className="conversionTo__cake">~ cake 0.000</div>
          </div>

          {/* ============================ Time frame  */}
          <div className="timeFrame">
            <div className="frameBG">
              <h4 className="title">Timeframe</h4>
              <div className="time">
                <span className="time-selected">1 Day</span>
                <span>7 Day</span>
                <span>30 Day</span>
                <span>1 Year</span>
                <span>5 Year</span>
              </div>
            </div>
          </div>
          {/* ============================ Accelerated APY  */}
          <div className="apy__toggle">
            <span>Enable Accelerated APY</span>
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round checked"></span>
            </label>
          </div>
          {/* ============================ Select Tier  */}

          <div className="select__tier">
            <h4 className="title gray">Select Tier</h4>
            <div className="time">
              <span className="time-selected">1 Day</span>
              <span>7 Day</span>
              <span>30 Day</span>
              <span>1 Year</span>
              <span>5 Year</span>
            </div>
          </div>

          {/* ============================ ROI at Current Rates  */}
          <div className="current__rate">
            <h4 className="title right">ROI at Current Rates</h4>
            <p className="current__rate-result">0.00 USD</p>
            <span className="conversion">~ 0.000 CAKE + 0.000000 DON</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
