import React from 'react';
import styled from 'styled-components';

const Bitter = styled.p`
  font-family: 'Bitter', serif;
`;

function Home() {
  return (
    <div>
      <h2>This is the home page</h2>
      <Bitter>Here is a paragraph with the Bitter font</Bitter>
    </div>
  );
}

export default Home;
