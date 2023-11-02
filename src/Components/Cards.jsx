import { useState } from "react";
import "./Cards.css";

const imgPerRow=4;

function Cards(props) {

    const [cards] = useState();
    const[loadNext,setLoadNext] = useState(imgPerRow);
    const handleNext=()=>{
     setLoadNext(loadNext+imgPerRow);
    }
    
    return(
        <div className="card-container">
            {/* <div className="card-body"> */}
            
                props?.slice(0, loadNext)?.
                <img src="" alt="card image" className="card-img"/>
                <h1 className="card-title">{props.title}</h1>
                <p className="card-p">{props.text}</p>
                
                <button className="card-btn">Read more</button>
            
            

            {/* </div> */}
            {loadNext < props.length && (
          <button
            className="mt-4"
            onClick={handleNext}
          >
            Load more
          </button>
        )}
        </div>
    )
}

export default Cards;

{/* <div className="card-container">
            <img src="https://picsum.photos/300/200" alt="card image" className="card-img"/>
            <h1 className="card-title">Card title</h1>
            <p className="card-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
            <button onClick={}>Read more</button>
            <button className="card-btn">Read more</button>
        </div>  */}

{

}