import './App.css';
import { useState } from 'react';

function App() {

  const [image, setImage] = useState()

  const [blur, setBlur] = useState(0)
  const [brightness, setBrightness] = useState(100)
  const [contrast, setContrast] = useState(100)
  const [grayscale, setGrayscale] = useState(0)
  const [hueRotate, setHueRotate] = useState(0)
  const [invert, setInvert] = useState(0)
  const [opacity, setOpacity] = useState(100)
  const [saturate, setSaturate] = useState(100)
  const [sepia, setSepia] = useState(0)

  const onImageChange = e => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]))
    }
  }

  return (
    <div className="App">
      <h1>CSS FILTERS TEST</h1>
      {image ?
        <div className='App-uploadedView'>
          <div className='App-uploadedView-main'>
            <div className='App-image' style={{ backgroundImage: 'url(' + image + ')', filter: `blur(${blur}px) brightness(${brightness}%) contrast(${contrast}%) grayscale(${grayscale}%) hue-rotate(${hueRotate}deg) invert(${invert}%) opacity(${opacity}%) saturate(${saturate}%) sepia(${sepia}%)` }}></div>
            <div className='App-controls'>
              <div className='App-control'>
                <label>blur: <b>{blur}px</b></label>
                <input type="range" value={blur} onChange={e => setBlur(e.target.value)} min="0" max="100" />
              </div>
              <div className='App-control'>
                <label>brightness: <b>{brightness}%</b></label>
                <input type="range" value={brightness} onChange={e => setBrightness(e.target.value)} min="0" max="500" />
              </div>
              <div className='App-control'>
                <label>contrast: <b>{contrast}%</b></label>
                <input type="range" value={contrast} onChange={e => setContrast(e.target.value)} min="0" max="1000" />
              </div>
              <div className='App-control'>
                <label>grayscale: <b>{grayscale}%</b></label>
                <input type="range" value={grayscale} onChange={e => setGrayscale(e.target.value)} min="0" max="100" />
              </div>
              <div className='App-control'>
                <label>hue-rotate: <b>{hueRotate}deg</b></label>
                <input type="range" value={hueRotate} onChange={e => setHueRotate(e.target.value)} min="0" max="360" />
              </div>
              <div className='App-control'>
                <label>invert: <b>{invert}%</b></label>
                <input type="range" value={invert} onChange={e => setInvert(e.target.value)} min="0" max="100" />
              </div>
              <div className='App-control'>
                <label>opacity: <b>{opacity}%</b></label>
                <input type="range" value={opacity} onChange={e => setOpacity(e.target.value)} min="0" max="100" />
              </div>
              <div className='App-control'>
                <label>saturate: <b>{saturate}%</b></label>
                <input type="range" value={saturate} onChange={e => setSaturate(e.target.value)} min="0" max="1000" />
              </div>
              <div className='App-control'>
                <label>sepia: <b>{sepia}%</b></label>
                <input type="range" value={sepia} onChange={e => setSepia(e.target.value)} min="0" max="100" />
              </div>
            </div>
          </div>

          <div className='App-result'>
            <h6>FILTER RULE</h6>
            <p>filter: blur({blur}px) brightness({brightness}%) contrast({contrast}%) grayscale({grayscale}%) hue-rotate({hueRotate}deg) invert({invert}%) opacity({opacity}%) saturate({saturate}%) sepia({sepia}%);</p>
          </div>
        </div> :
        <form className='App-form'>
          <label>SELECT YOUR IMAGE</label>
          <input type="file" onChange={onImageChange} accept=".jpg,.jpeg,.gif,.png" />
        </form>}
    </div>
  );
}

export default App;
