import './App.css';
import {useState, useEffect} from "react";
// import Pokemon from './Components/Pokemon';
import axios from 'axios';
import Cards from './Components/Cards';

function App() {
  const [cards,setCards] = useState([]);
  const[images,setImages]=useState([{}]);
  const temp= cards.length;
  // console.log(temp);
  useEffect(() => {

    //fetching name and url for respective pokemon cards
    //https://pokeapi.co/api/v2/pokemon
    //http://localhost:5000/cards
    axios.get("https://pokeapi.co/api/v2/pokemon")
    .then((response) => {
      console.log(response.data);
      console.log(response.data.results);
      //storing the name and url to cards
     setCards(response.data.results);
     })
    .catch(error => console.log("error in fetching pokemon json"))
  },[])

    useEffect(()=>{

      cards.map((urls,index)=>
      {
        return(
      axios.get(urls.url)
      .then((res)=>{
        console.log(res.data.sprites);
        setImages(res.data.sprites);
      })
      .catch(err => console.log("error in loading url for images"))
        )
    })
  },[cards])

  console.log(images);

  return (
    <div className="App" >
      {
        cards.map((pkmnCard,index)=>{

          return(
            <div key = {index.toString()} >
              <Cards img={images.back_default} title={pkmnCard.name} length={temp}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"/>
          
            </div>
          
          )
        })
      }      
    </div>
  );
}

export default App;


