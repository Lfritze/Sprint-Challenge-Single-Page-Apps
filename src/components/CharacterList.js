import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

// ****************NOTES NOTES ***********************

// IMPORTANT!!! ****RICK & MORTY DOCS HERE: https://rickandmortyapi.com/documentation/******
// Character info here: https://rickandmortyapi.com/documentation/#character ******
//*****Notes from API Docs***** */
//id	int	The id of the character.
// name	string	The name of the character.
// status	string	The status of the character ('Alive', 'Dead' or 'unknown').
// species	string	The species of the character.
// image	string (url)	Link to the character's image. All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.

//*****************NOTES END************************* */


const Content = styled.div`
  max-width: 100%;
  margin:30px auto;
  justify-content:center;
  background: black;
`;

const CharTitle = styled.h3`
  text-align: center;
  color: white;
  text-decoration: none;
  
`;
const CharContent = styled.p`
  text-align:center;
  color:white;
  text-decoration: none;
  width: 100%;
  
`;

export default function CharacterList() {
  const [characterData, setCharacterData] = useState ([])

  useEffect(() => {
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(response => {
      const character = response.data.results
      setCharacterData(character)
      
    })
    .catch(error => {
      console.log('Error returning data', error)
    })
  }, []);

  return (
    <section className="character-list"> {
      characterData.map(item  => {
        return (
        
            <Content key = {item.id}>
              {/* <div className = 'search-img-card'> */}
              <Link to={`/character/${item.id}`}> 
                <img src={item.image} alt ='Character Information' />
                <CharTitle> Name: {item.name} </CharTitle>
                <CharContent> Species: {item.species}</CharContent>
                <CharContent>Status:{item.status}</CharContent>
              </Link>
              {/* </div> */}
            </Content>
       
        )
      })
    }
    </section>
  );
}

