import logo from './logo.svg';
import {useState, useEffect} from "react";
import './App.css';
import Cards from './Components/Cards';
import axios from 'axios';
import Cardsample from './Components/Cardsample';

function App() {
  
  const [cards,setCards] = useState([]);
  const [cUrl,setCurl] = useState([]);
  const [imgUrl, setImg] = useState([]);
  const temp= cards.length;
  // console.log(temp);
  useEffect(() => {

    //fetching name and url for respective pokemon cards
    axios.get("http://localhost:5000/cards")
    .then(response => {console.log(response.data);
      //storing the name and url to cards
     setCards(response.data);
     console.log(response.data);

      // console.log(urls.url);
      // cards.map((urls)=>{
      //   setCurl({cUrl:[urls.url]});
      //   console.log("card urls:")
      //  })
      
     })
    .catch(error => console.log("error in fetching pokemon json"))
  },[])

  useEffect(() => {
      cards.map((oneurl,index) => {
        return(
          setCurl((oneurl.url))
        )
      
      })
  })
  
console.log(cUrl)
  return (
    <div className="App">
      {
        cards.map((pkmnCard,index)=>{
          return(
          <div >
          <Cards img="" title={pkmnCard.name} length={temp}
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"/>
      
      </div>
      
          )
        })
        
      } 
    </div>
  );
}

export default App;


