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
          <InputBox />
          <div className="default__value__conversion">
            <div className="default-value">
              <span>$1000</span>
              <span>$100</span>
            </div>
            <div className="conversionTo__cake">~ cake 0.000</div>
          </div>
          <div className="timeFrame">
            <spna className="frameBG">
              <h4 className="title">Timeframe</h4>
            </spna>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
