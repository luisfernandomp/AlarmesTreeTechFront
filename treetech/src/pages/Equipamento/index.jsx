import React, {useState} from 'react';
import './index.css';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Modal, Jumbotron, Container, Card, Button, Form, FormControl} from 'react-bootstrap';

 const Equipamento = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Header />
            <Jumbotron fluid className="bannerEquipamento">
                <Container>
                    <h1>Fluid jumbotron</h1>
                    <p>
                    This is a modified jumbotron that occupies the entire horizontal space of
                    its parent.
                    </p>
                </Container>
            </Jumbotron>
            <div className="equipamentos">
                <Button variant="success" onClick={handleShow} style={{backgroundColor : '#3ec300', margin : 20}}>Incluir equipamento</Button>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
                    <Button type="submit">Submit</Button>
                </Form>
                <Card style={{ width: '18rem' }} style={{display : 'flex', flexDirection : 'row'}}>
                    <Card.Img variant="top" style={{margin : 20, width : 120, heigth : 120, objectFit : 'cover'}} src="https://img.flaticon.com/icons/png/512/1104/1104939.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" />
                    <Card.Body className="cartao">
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <div style={{display : 'flex', width : 150, justifyContent : 'space-between'}}>
                            <Button variant="warning">Editar</Button>
                            <Button variant="danger">Excluir</Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
            <Footer />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )

}

export default Equipamento;