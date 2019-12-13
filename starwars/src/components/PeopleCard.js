import React from "react";
import styled from "styled-components"

const ColorH2 = styled.h2`
color: #198CFF;
font-family:'Abel', sans-serif;
font-size: 50px;
text-shadow: 3px 2px red;

`;



const PeopleCard = props => {
    console.log(props)
    return (
        <div className="person-data" key={props.peoples.name}>
            <ColorH2>{props.name}</ColorH2>
            <h3>Birth Year: {props.birthyear}</h3>
            <h3>Height:{props.height}</h3>
            <h3>Gender:{props.gender}</h3>
            
        </div>

    )
}

export default PeopleCard