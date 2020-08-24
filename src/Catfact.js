import React,{useState, useEffect , useRef} from 'react'
import Catpic from "./cat.png"
import { TimelineLite, Power3} from 'gsap'
const axios = require('axios');


const Catfact = (update) => {
    const [fact, setFact] = useState('')
    let app = useRef(null)

    let tl = new TimelineLite()
    useEffect(() => {
        axios.get("https://cat-fact.herokuapp.com/facts/random").then(function (response) {
            setFact(response.data.text)

          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          // eslint-disable-next-line
    }, [update])
    
useEffect(() => {
    tl.to(app, 5, {y: 500, ease: Power3.easeOut})
    tl.to(app, 5, {y: -500, ease: Power3.easeOut , delay: 30})

    }
// eslint-disable-next-line
, [update])





        return (
            <div ref={el => app = el} className="fact-container">
                <img className="fact-img" src={Catpic} alt="catc"></img>
                <h1 className="fact">{fact}</h1>
            </div>
        )
    }

export default Catfact
