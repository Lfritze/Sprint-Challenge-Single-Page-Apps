import React from "react";
import { Route, NavLink} from 'react-router-dom';
import styled from 'styled-components';
import CharacterList from './components/CharacterList';
import WelcomePage from './components/WelcomePage';
import CharacterCard from './components/CharacterCard';
import SearchForm from './components/SearchForm';

const Main = styled.div`
  background: linear-gradient(to left, #14955a, #004991);
  color: white;
  height:100%;
`;
const Nav = styled.nav`
  text-align:center;
  padding: 20px
  background: #191512;
`;

export default function App() {
  return (
    <Main>
      <Nav>
        <NavLink className="navLinks" to="/">Home</NavLink>
        <NavLink className="navLinks" to="/searchcharacter">Search Characters </NavLink>
        <NavLink className="navLinks" to="/character">Characters</NavLink>
      </Nav>
        <div>
          <Route exact path="/" component={WelcomePage} />
          <Route exact path="/character" component={CharacterList}/>
          <Route path="/searchcharacter" component={SearchForm}/>
          <Route path="/character/:id" render={props => <CharacterCard {...props} /> } />
        </div>
    </Main>
  );
}

// initial commit