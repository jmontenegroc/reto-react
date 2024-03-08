import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

function RickAndMorty({ numberOfCharacters }) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const characterIds = Array.from({ length: numberOfCharacters }, (_, i) => i + 1).join(',');
    fetch(`https://rickandmortyapi.com/api/character/${characterIds}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, [numberOfCharacters]);

  return (
    <div>
      <Row>
        {characters.map((character) => (
          <Col sm={6} md={4} lg={3} key={character.id}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={character.image} />
              <Card.Body>
                <Card.Title>{character.name}</Card.Title>
                <Card.Text>{character.species}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default RickAndMorty;