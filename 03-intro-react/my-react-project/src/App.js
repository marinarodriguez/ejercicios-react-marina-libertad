import React from 'react';
import photo from "./photo.jpeg";
import "./App.scss";

function App() {
  return (
    <div className="App">
    <div className="card">
      <div className="App-header">
          <div className="App-photo"></div>
          <div className="name-date__container">
        <h1 className="name">Marina Rodríguez</h1>
        <h2 className="date">Lunes 26 de junio de 2017</h2>
        </div>
      </div>
      <p className="comment">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum imperdiet tristique. Vestibulum egestas non ipsum eu dictum. Donec iaculis libero vel vestibulum euismod. Nunc pharetra, lorem nec consectetur tempor, metus urna fringilla diam, in faucibus magna libero in nisi. Morbi pretium libero a nibh finibus convallis. Integer luctus, quam et commodo vestibulum, ante metus faucibus sapien, sit amet pharetra tortor quam non purus. Morbi aliquet metus sem, sed pellentesque purus interdum ac. Nullam at semper justo. Curabitur semper in magna rhoncus tempor. Phasellus elementum ante non volutpat rhoncus. Phasellus pulvinar nunc neque, a elementum urna tempor et. Vestibulum lacinia pellentesque gravida. Etiam bibendum accumsan convallis.
      </p>
      <div className="App-footer">
      <p className="read__more">Leer más</p>
      <p>37 <i class="fas fa-heart"></i> </p>
      </div> 
    </div>
    </div>
  );
}

export default App;
