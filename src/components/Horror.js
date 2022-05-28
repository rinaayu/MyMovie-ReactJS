import { Card, Col, Container, Row, Image } from "react-bootstrap"
import brs from "../assets/images/horror/blood-red-sky-01.jpg"
import fresh from "../assets/images/horror/Fresh-film-683x1024.jpg"
import theLongNight from "../assets/images/horror/the long night.jpg"
import umma from "../assets/images/horror/umma.jpeg"
const Horror = () =>{
    return(
        <div>
            <Container>
                <br />
                <h1 className="text-white">Horror Movies</h1>
                <br />
                <Row>
                    <Col md={3} id="horror">
                        <Card className="movieImg">
                            <Image src={brs} alt="Blood Red Sky" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Blood Red Sky</Card.Title>
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
                            <Image src={fresh} alt="Fresh" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Fresh</Card.Title>
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
                            <Image src={theLongNight} alt="The Long Night" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">The Long Night</Card.Title>
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
                            <Image src={umma} alt="Umma" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Umma</Card.Title>
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

export default Horror