import React from 'react';
import './index.css';
import { Card, Button} from 'react-bootstrap';

 const CardEquipamento = ({equipamentos, loading}) => {

    if(loading) {
        return <h2>Loading...</h2>
    }

    return (
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
    )

}

export default CardEquipamento;