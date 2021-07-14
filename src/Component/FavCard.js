import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import { Card, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FavCard = (props) => {

  const filteredFav = props.allUsers.filter(user => user.id === props.fav.favoritedUser_id)
  console.log(filteredFav)

  return (


      <Col>
        {/* <Card> */}
        <Link key={props.id} to={`/users/${filteredFav.map(fav => fav.id)}`}>
          <Card.Img src={filteredFav.map(fav => fav.profile_pic_url)} style={{width: "100px", height:"100px", objectFit: "cover", margin: ".5em", borderRadius: "50px 50px 50px 50px"}} className="pulse"/>
          </Link>
          <FontAwesomeIcon icon={faTrash} style={{marginRight: "1.2em"}} size="lg"/>
          {/* </Card>   */}
      </Col>  
  );
};

export default FavCard;