import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Card, Spinner } from "react-bootstrap";
import useFetchData from "../hooks/useFetchData";

export default function PostDetail() {
  const { id } = useParams();
  const { data, isLoading, error } = useFetchData(
    `http://hn.algolia.com/api/v1/items/${id}`
  );

  if (isLoading) {
    return  (<>
    <Spinner animation="border" />
    <span>
      
Loading...
    </span>
    </>);
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Container>
        {data && (
          <Row className="mobile">
            <Row className="mt-5">
              <h1>{data.title}</h1>
            </Row>
            <Row>
              <p>Points: {data.points}</p>
            </Row>
            <Row>
              <h5>All Comments</h5>
            </Row>

            {data.children &&
              data.children.map((comment) => (
                <Card className="mb-2 w-40" key={comment.id}>
                  <Card.Body dangerouslySetInnerHTML={{ __html: comment.text }}></Card.Body>
                </Card>
              ))}
          </Row>
        )}
      </Container>
    </>
  );
}


