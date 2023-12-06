import React, { useState, useEffect } from "react";
import { Container, Row, Form, Button, Col, Spinner } from "react-bootstrap";
import NewsList from "./NewsList";

export default function SearchNews() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!query) {
        setResults([]);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `http://hn.algolia.com/api/v1/search?query=${query}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setResults(data.hits);
      } catch (error) {
        setError("An error occurred while fetching the data.");
      }

      setLoading(false);
    };

    const delayDebounceFn = setTimeout(() => {
      fetchData();
    }, 500); // Debounce to avoid rapid API requests on each keystroke

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  return (
    <Container>
      <Form>
        <Row className="mt-5 align-items-center">
          <Col xs="auto">
            <Form.Label>Search Hacker News</Form.Label>
            <Form.Control
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search Hacker News"
            />
          </Col>
          <Col xs="auto">
            {loading && (
              <>
                <Spinner animation="border" />
                <span>Loading...</span>
              </>
            )}
            {error && <div>{error}</div>}
          </Col>
        </Row>
      </Form>
      <NewsList results={results} />
    </Container>
  );
}
