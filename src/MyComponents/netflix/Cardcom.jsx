import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Net.css"

function Cardcom({ items }) {
 
  return (
    <Card style={{ width: "18rem" }} className="net_card" >
      <Card.Img variant="top" className="h-75" src={items.image} />
      <Card.Body>
              <Card.Title>{ items.title}</Card.Title>
        <Card.Text>{items.description}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Cardcom;
