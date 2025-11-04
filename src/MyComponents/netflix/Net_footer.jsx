import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Net_footer() {
  return (
    <Card className="text-center bg-black text-white">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        
      </Card.Body>
      <Card.Footer className="text-muted">@copy Rights Reserved</Card.Footer>
    </Card>
  );
}

export default Net_footer;