import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import axios from "axios"
import {Carousel} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [PictureArray, setPictArray]  = useState([])
  const [NumbertArray, setNumberArray]  = useState([3,4,5,6,7,8,9,10])
  const [gellerytitle, setGeleryTitle]  = useState('')
  const [numberItr, setNumber]  = useState(20)



  const getAllpic = (str) => {
  axios.get('https://pixabay.com/api/?key=14910698-da2d9192ee156a4fb851cc1c6' + '&category=' +str)
  .then((res) => {
    setPictArray(res.data.hits)
      if(str === "food"){
        setGeleryTitle('showing food collection')
      }
      else if (str === "music"){
        setGeleryTitle('showing music collection')
      }
      else if (str === "sports"){
        setGeleryTitle('showing sports collection')
      }
   
    
  })
  .catch((err) => {

    console.log(err);
  });
  }

  return (
    <div className="App">
      <div id = "div1">
      <h1>Our Gallery</h1> <br/>
      <button  onClick = {() => getAllpic("food")}>food</button> 
      <button  onClick = {() => getAllpic("music")}>Music</button>
      <button  onClick = {() => getAllpic("sports")}>Athlete</button>

      <select onChange = {(e) => (setNumber(e.target.value))}>  
        {
      NumbertArray.map((x, id) =>  {
        return  <option key={id} value = {x}>  {x}  </option> 
              
       } )
      }
        </select>
      
      <ul>  
        
      <Carousel autoPlay={true} interval={1500} indicators={false} prevLabel nextLabel >
      {

        PictureArray.filter((item, idx) => idx < numberItr).map((item,x) => {
            return (
              
              
                  <Carousel.Item>
               
                  <img key = {x} src = {item.previewURL}></img>
                  
                  </Carousel.Item>
              
              
            ) })  
      }
      </Carousel>
      </ul>
      </div>
      <br/>
      <p>{gellerytitle}</p>
      <br/>
    </div>
  );
}

export default App;
