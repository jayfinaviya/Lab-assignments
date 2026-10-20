import React, { useState } from "react";
import "./App.css";

// Assignment 6: React Counter App using useState Hook
function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const increment = () => {
    setCount(prev => prev + step);
  };

  const decrement = () => {
    setCount(prev => prev - step);
  };

  const reset = () => {
    setCount(0);
  };

  const countClass = count > 0 
    ? "count-value count-positive" 
    : count < 0 
      ? "count-value count-negative" 
      : "count-value count-zero";

  return (
    <div className="counter-wrapper">
      <h2>Assignment 6: React Counter App</h2>
      <p className="subtitle">
        Uses React Hooks (<code>useState</code>) to increment, decrement, and reset numeric value.
      </p>

      {/* Counter Value Display */}
      <div className="counter-display">
        <span className={countClass}>{count}</span>
      </div>

      {/* Step Value Selector */}
      <div className="step-selector">
        <span>Step:</span>
        {[1, 5, 10].map(val => (
          <button
            key={val}
            className={`btn-step ${step === val ? "active" : ""}`}
            onClick={() => setStep(val)}
          >
            ±{val}
          </button>
        ))}
      </div>

      {/* Action Buttons conforming to demo requirements */}
      <div className="button-group">
        <button onClick={decrement} className="btn-counter btn-dec">
          Decrement (-{step})
        </button>
        <button onClick={reset} className="btn-counter btn-rst">
          Reset (0)
        </button>
        <button onClick={increment} className="btn-counter btn-inc">
          Increment (+{step})
        </button>
      </div>

      <div className="footer-note">
        Crafted by <strong>Jay Finaviya</strong> • MCA Lab Assignment
      </div>
    </div>
  );
}

export default App;
