import { Card, Col, Container, Row, Image } from "react-bootstrap"
import sonicImg from "../assets/images/trending/sonic.jpg"
import theBatmanImg from "../assets/images/trending/the batman.jpg"
import theNorthmanImg from "../assets/images/trending/the northman.jpg"
import unchartedImg from "../assets/images/trending/uncharted.jpg"
const Trending = () =>{
    return(
        <div>
            <Container>
                <br />
                <h1 className="text-white">Trending Movies</h1>
                <br />
                <Row>
                    <Col md={3} id="trending">
                        <Card className="movieImg">
                            <Image src={sonicImg} alt="Sonic" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Sonic 2 The Hedgehog</Card.Title>
                                    <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content.
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="movieImg">
                            <Image src={theBatmanImg} alt="The Batman" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">The Batman</Card.Title>
                                    <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content.
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="movieImg">
                            <Image src={theNorthmanImg} alt="The Northman" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">The Northman</Card.Title>
                                    <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content.
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="movieImg">
                            <Image src={unchartedImg} alt="Uncharted" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Uncharted</Card.Title>
                                    <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content.
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Trending