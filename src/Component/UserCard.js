import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const UserCard = (props) => {
  return (

    <Container style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <Col>
        <Card style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <Link key={props.id} to={`/users/${props.id}`}>
          <Card.Img src={props.profile_pic_url} style={{width: "400px", height:"400px", margin:"1em"}}/>
          </Link>
          <Card.Body>
            <Card.Text style={{textAlign: "center"}}>{props.name} from {props.location}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Container>
  );
};

export default UserCard;