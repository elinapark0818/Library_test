import './app.css';
import Goo from 'gooey-react';

function App() {
  return (
    <Goo style={{ animation: 'left 4s linear infinite' }}
      intensity="weak"
      >
      <svg width="192" height="192">
        <circle 
          style={{ animation: 'right 1s linear infinite' }} 
          cx="37%" 
          cy="37%" 
          fill="orchid" 
          r="32" 
        />
        <circle 
          style={{ animation: 'right 1s linear infinite' }} 
          cx="63%" 
          cy="63%" 
          fill="mediumorchid" 
          r="32" 
        />
      </svg>
    </Goo>
  )
};

export default App;
