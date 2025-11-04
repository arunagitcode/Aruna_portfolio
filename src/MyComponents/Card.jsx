import React from "react";
import ReactDom from "react-dom/client";

function Card(props) {
    console.log(props.Carddata)
    return (
        <>
        
            {props.Carddata.map((item, i) => {
                return <p key={i}>{item.title}</p>
            })}
        </>
    )
}
export default Card;