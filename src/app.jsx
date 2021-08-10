import React from 'react';
import styles from './app.module.css';
import 'react-awesome-button/dist/themes/theme-blue.css';
import Button from './components/awesome_btn/awesome_btn';


function App() {
  return (
    <div className={styles.container}>
      <Button />
    </div>
    
  );
}


export default App;