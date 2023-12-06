import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Card, Container, Row, Col } from "react-bootstrap";
import NewsContext from "../contexts/NewsContext";

export default function NewsList() {
  const { results } = useContext(NewsContext);
  return (
    <Container>
      <Row className="mt-5">
        <Col className="pr-0">
          {results.map((result) => (
            <Card key={result.objectID}>
              <Card.Body>
                <Link to={`/post/${result.objectID}`}>{result.title}</Link>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
}
