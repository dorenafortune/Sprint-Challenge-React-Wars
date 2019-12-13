import React from "react";
import styled from "styled-components"

const Card = styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;

`

const ColorH2 = styled.h2`
color: #198CFF;
font-family:'Abel', sans-serif;
font-size: 50px;
text-shadow: 3px 2px red;

`;

const ColorH3 = styled.h3`
color: #FEFEBE;
text-shadow: 3px 2px black;

`



const PeopleCard = props => {
    console.log(props)
    return (
        <Card key={props.peoples.name}>
            <ColorH2>{props.name}</ColorH2>
            <ColorH3>Birth Year: {props.birthyear}</ColorH3>
            <ColorH3>Height:{props.height}</ColorH3>
            <ColorH3>Gender:{props.gender}</ColorH3>
            
        </Card>

    )
}

export default PeopleCard