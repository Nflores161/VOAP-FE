import React, { Component } from "react";
import { Tab, Tabs, Container, Row } from 'react-bootstrap'
import UserCard from "../Component/UserCard";

export default class ExploreContainer extends Component {

  render(){
    
    return (
 
         <div>

        <Tabs
          defaultActiveKey="explore"
          id="uncontrolled-tab-example"
          onSelect={(key) => this.props.filterByGenre(key)}
        >
          <Tab
            eventKey="explore"
            title="Explore"
            style={{ textDecoration: "none" }}
            className="user-tab"
          >
            <div style={{display: "flex", flexDirection:"column", margin: "5em"}}>
              <h1>Explore artists by the music genre that best fits your search</h1>
              <img alt="siouxie eyes" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/80efc762-df65-4cc6-87e1-af09004fa778/d8aega9-d63d53de-6857-4a3a-a3d2-d077b9277f2b.jpg/v1/fill/w_1024,h_414,q_75,strp/01___siouxsie_eyes_by_impedancer_d8aega9-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDE0IiwicGF0aCI6IlwvZlwvODBlZmM3NjItZGY2NS00Y2M2LTg3ZTEtYWYwOTAwNGZhNzc4XC9kOGFlZ2E5LWQ2M2Q1M2RlLTY4NTctNGEzYS1hM2QyLWQwNzdiOTI3N2YyYi5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.DuSQnQZG0Y173wwRz0mYxNLMffHmw6D0AEPgfuTL0Is"></img>
            </div>
          </Tab>

          <Tab key="punk" eventKey="punk" title="Punk" className="event-tab">
            <Container>
              <Row lg={2}>
                {this.props.usersFilteredCollection.map((user) => (
                  <UserCard {...user} />
                ))}
              </Row>
            </Container>
          </Tab>

          <Tab eventKey="metal" title="Metal" className="event-tab">
            <Container>
              <Row lg={2}>
                {this.props.usersFilteredCollection.map((user) => (
                  <UserCard {...user} />
                ))}
              </Row>
            </Container>
          </Tab>

          <Tab eventKey="noise" title="Noise/Experimental" className="event-tab">
            <Container>
              <Row lg={2}>
              {this.props.usersFilteredCollection.map((user) => (
                  <UserCard {...user} />
                ))}
              </Row>
            </Container>
          </Tab>

          <Tab eventKey="electronic" title="Electronic" className="user-tab">
            <Container>
              <Row lg={2}>
              {this.props.usersFilteredCollection.map((user) => (
                  <UserCard {...user} />
                ))}
              </Row>
            </Container>
          </Tab>
        </Tabs>
      </div>  
    )}
}
