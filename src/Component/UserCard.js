import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const UserCard = (props) => {
  return (

    <Container style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <Col>
        <Card style={{display: "flex", justifyContent: "center", alignItems: "center",margin:"1em", borderRadius: "50px 50px 50px 50px", boxShadow: "2px 3px 20px black, 0 0 60px #DDDADA inset"}}>
          <Link key={props.id} to={`/users/${props.id}`}>
          <Card.Img src={props.profile_pic_url} style={{width: "300px", height:"300px", margin:"1em", borderRadius: "50px 50px 50px 50px", boxShadow: "2px 3px 20px black, 0 0 60px #DDDADA inset"}}/>
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