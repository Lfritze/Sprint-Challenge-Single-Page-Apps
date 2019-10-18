import React from "react";
import styled from 'styled-components'

const Welcome = styled.div`
  max-width: 100%;
  `;

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <Welcome>
        <h1>Rick and Morty Fan Site</h1>
        <img
          className="main-img"
          src="https://wallpaperaccess.com/full/238256.jpg"
          alt="Rick and Morty background image"
        />
      </Welcome>
    </section>
  );
}
