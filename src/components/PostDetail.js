import React, { useState, useEffect } from 'react';
import { useParams,  Link } from 'react-router-dom';
import {Container, Row, Card } from 'react-bootstrap';

function PostDetail() {
  const [post, setPost] = useState(null);
  const { id } = useParams(); 

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://hn.algolia.com/api/v1/items/${id}`);
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [id]);

  return (
    <>
 <Container > 
        {post && (
        <Row className="mobile">
          <Row>
          <Link to="/" className="btn btn-primary mt-3">
        Go to Home
      </Link>

          </Row>

          
          <Row className="mt-5"><h1>{post.title}</h1></Row>
          <Row><p>Points: {post.points}</p></Row>

          

            {post.children && post.children.map((comment) => (
              <Card className="mb-2 w-40" key={comment.id}>
              <Card.Body>{comment.text}</Card.Body>
            </Card>
            ))}

        </Row>
      )}
      </Container>

      </>
  );
}

export default PostDetail;
