import { useState } from "react";


const imgPerRow=4;

function Cardsample({props}) {

    const [cards] = useState(props);
    const[loadNext,setLoadNext] = useState(imgPerRow);
    const handleNext=()=>{
     setLoadNext(loadNext+imgPerRow);
    }
    console.log(props);

    return(
        <div className="card-container">
           {
            cards.map((cards,index) => {
                return (
                <div>
                <img src="" alt="card image" className="card-img"/>
                <h1 className="card-title">{cards.name}</h1>
                <p className="card-p">sample text</p>
                
                <button className="card-btn">Read more</button>
                </div>
                )   
            })
           } 
            
            {/* </div> */}
            {loadNext < props?.length && (
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

export default Cardsample;