import React, {useState, useEffect} from 'react';
import './index.css';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import EquipamentoServico from '../../services/equipamentoServico';
import { Modal, Jumbotron, Container, Card, Button, Form, FormControl} from 'react-bootstrap';
import CardEquipamento from '../../components/CardEquipamento';
import Pagination from '../../components/CardEquipamento/Pagination';

 const Equipamento = () => {
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [equipamentosPerPage] = useState(6);
    const [equipamentos, setEquipamentos] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        listarEquipamentos();
    },[])

    const listarEquipamentos = async () => {
        await EquipamentoServico
        .listar()
        .then(resultado => {
            setLoading(false);
            setEquipamentos(resultado.data);
        });
    }

    const indexOfLastEquipamento = currentPage * equipamentosPerPage;
    const indexOfFirstEquipamento = indexOfLastEquipamento - equipamentosPerPage;
    const currentEquipamentos = equipamentos.slice(indexOfFirstEquipamento, indexOfLastEquipamento);

    const paginate = pageNumber => {
        console.log(pageNumber);
        setCurrentPage(pageNumber);
    }
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
                <Button variant="success" onClick={handleShow} className="buttonIncluir">Incluir</Button>
                <CardEquipamento equipamentos={currentEquipamentos} loading={loading} />
                <Pagination equipamentosPerPages={equipamentosPerPage} paginate={paginate} totalEquipamentos={equipamentos.length} />
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

/*

<div className="boxEquipamentos">
            {
                equipamentos.map((item, index) => {
                    return(
                            <Card className="cardEquipamento" key={index}>
                            <Card.Img variant="top" className="imgCartao" src="https://img.flaticon.com/icons/png/512/1104/1104939.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" />
                            <Card.Body className="cartao">
                                <Card.Title>{item.nome}</Card.Title>
                                <Card.Text style={{width : '100%', justifyContent : 'flex-start'}}>
                                    <div>Data cadastro : {item.datacadastro}</div>
                                    <div>Serie : {item.serie}</div>
                                    <div>Nome : {item.tipo}</div>
                                </Card.Text>
                                <div className="containerButtons">
                                    <Button variant="warning">Editar</Button>
                                    <Button variant="danger">Excluir</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    
                    )  
                })
                  
            }
            </div>     

*/