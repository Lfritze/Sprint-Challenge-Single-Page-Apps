import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

// IMPORTANT!!! ****RICK & MORTY DOCS HERE: https://rickandmortyapi.com/documentation/******
// Character info here: https://rickandmortyapi.com/documentation/#character ******
//*****Notes from API Docs***** */
//id	int	The id of the character.
// name	string	The name of the character.
// status	string	The status of the character ('Alive', 'Dead' or 'unknown').
// species	string	The species of the character.


const Content = styled.div`
  max-width: 100%;
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
      characterData.map(item => {
        return (
          <div className = 'img-card'>
            <Content key = {item.id}>

              
            </Content>
          </div>
        )
      })
    }
      
      
    </section>
  );
}
