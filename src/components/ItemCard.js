import React from "react";

export default function ItemCard(props){

    
    return(
        <div className="itemcard" id={props.id}>
            <div className="checkbox-item">
                <input className="checkbox" type='checkbox' onChange={() => props.handleCheck(props.id)}></input>
                <p className={props.checked ? "item--strikethrough" : ""}>{props.item}</p>
            </div>
            <button className="delete-button" onClick={() => props.handleDelete(props.id)}><img src="bin-icon.png" className="bin-icon" alt="bin-icon"/></button>
        </div>
    )
}