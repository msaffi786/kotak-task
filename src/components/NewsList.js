import React from "react";
import { Link } from "react-router-dom";
import { Card, Container, Row, Col } from "react-bootstrap";

export default function NewsList({ results }) {
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
