import React, { useState } from "react";
import { Link } from "react-router-dom";
import {Card,Container, Row, Form, Button, Col} from "react-bootstrap";

function Home() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://hn.algolia.com/api/v1/search?query=${query}`
      );
      const data = await response.json();
      setResults(data.hits);
    } catch (error) {
      console.error("Error fetching results:", error);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Row className="mt-5 align-items-center">
          <Col xs="auto">
            <Form.Control
              type="text"
              value={query}
              onChange={handleChange}
              placeholder="Search..."
            />
          </Col>

          <Col xs="auto">
            {" "}
            <Button type="submit">Search</Button>{" "}
          </Col>
        </Row>
      </Form>
      <Row className="mt-5">
        <Col className="pr-0">
      {results.map((result) => (
          <Card  >
            <Card.Body key={result.objectID}>
              <Link to={`/post/${result.objectID}`}>{result.title}</Link>
            </Card.Body>
          </Card>
        ))}
        </Col>

      </Row>
  
       

    </Container>
  );
}

export default Home;
