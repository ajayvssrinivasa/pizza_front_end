import React from 'react'
import img from '../img.jpg'

import { Nav,Container,Card,Button } from 'react-bootstrap'
export default function Dashboard() {
    return (
        <Container fluid>
            <Nav className="justify-content-center"  style={{backgroundColor:"blueviolet"}}>
                <Nav.Item>
                <Nav.Link href="/home" style={{color:"white"}}>Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link href="/" style={{color:"white"}}>Welcomw</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link href="/pagination" style={{color:"white"}}>Posts</Nav.Link>
                
                </Nav.Item>
                <Nav.Item>
                <Nav.Link href="/" style={{color:"white"}} >
                    Logout
                </Nav.Link>
                </Nav.Item>
                </Nav>
             <Card style={{ width: '20rem',marginLeft:600,marginTop:150 }}>
                    <Card.Img variant="top" src={img}  alt="img" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
        </Container>
    )
}
