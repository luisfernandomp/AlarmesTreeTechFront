import React from 'react';
import Header from '../../components/Header';
import Banner from '../../assets/images/bannerTreeTech.jpg';
import BannerGithub from '../../assets/images/bannerGithub.png';
import BannerReact from '../../assets/images/bannerReact.jpg';
import Footer from '../../components/Footer';
import LogoGit from '../../assets/images/LogoGitHub.png';
import LogoNet from '../../assets/images/logoNetCore.png';
import {Carousel, Container, Card, Button} from 'react-bootstrap';
import './index.css';

 const Home = () => {
    return (
        <div>
            <Header />
            <Carousel>
                <Carousel.Item interval={9000}>
                    <img
                    className="d-block w-100"
                    src={Banner}
                    style={{height : 350, objectFit : 'cover'}}
                    alt="Banner alarmes TreeTech"
                    />
                    <Carousel.Caption>
                        <h3 className="titulo">Desafio TreeTech</h3>
                        <p className="texto">Sistema para gerenciamento de alarmes.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={9000}>
                    <img
                    className="d-block w-100"
                    src={BannerGithub}
                    style={{height : 350, objectFit : 'cover'}}
                    alt="Banner GitHub"
                    />
                    <Carousel.Caption>
                        <h3 className="titulo">GitHub</h3>
                        <p className="texto">Utilização do Git para versionamento do código.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={9000}>
                    <img
                    className="d-block w-100"
                    src={BannerReact}
                    style={{height : 350, objectFit : 'cover'}}
                    alt="Banner React"
                    />
                    <Carousel.Caption>
                        <h3 className="titulo">React Js</h3>
                        <p className="texto">Frontend feito com React Js</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="texto-apresentacao">
                <div className="titulo-apresentacao">Apresentação</div>
                <div style={{marginBottom : 100}}> 
                    Olá sou o Luis Fernando de M. Pereira, recentemente um desafio proposto pela TreeTech foi me proposto e antes de verem o que eu desenvolvi, 
                    espero que o que fiz esteja a altura do esperado por vocês, estou muito entusiasmado pela oportunidade, já é incrível poder participar de um 
                    teste como esse, sei que contribuiu para o meu crescimento. Gostei demais da empresa e espero fazer parte desse time em breve.
                </div>
                <div className="titulo-apresentacao">Algumas das tecnologias</div>
                <div className="tecnologias">
                    <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src={LogoGit} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                    <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src={LogoNet} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                    <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src={LogoGit} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                </div>
            </div>
            <Footer />
        </div>
    )

}

export default Home;