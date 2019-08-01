import React, {useState, useEffect}from "react";
import axios from "axios";
import PictureCard from "./PictureCard";
import ExplanationCard from "./ExplanationCard";

export default function PictureList() {
    const [pictures, setPictures]= useState([]);
    const [explanation, setExplanation]= useState([])
    const [title, setTitle]= useState([]);
    useEffect(()=>{
     axios.get("https://api.nasa.gov/planetary/apod?api_key=sU9antrlstGsyaqjd1ghUKCZqCzlEwKttfe6tnR5")
      .then(res => {
          console.log(res);
          setPictures(res.data.hdurl);
          setExplanation(res.data.explanation);
          setTitle(res.data.title);
        })
        .catch(error => console.log(error))
    }, [])
    
    return (<div> 
             <h1>{title}</h1>
             <PictureCard imgUrl={pictures} />;
             <ExplanationCard explain={explanation}/>
             {/*<h2>{explanation}</h2>*/}
           </div>
    )};
