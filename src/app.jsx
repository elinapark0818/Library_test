import React from 'react';
import styles from './app.module.css';
import 'react-awesome-button/dist/themes/theme-blue.css';
import Button from './components/awesome_btn/awesome_btn';
import SimpleSlider from './components/simple_slider/simple_slider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <div className={styles.container}>
      <Button />
      <SimpleSlider />
    </div>
    
  );
}


export default App;