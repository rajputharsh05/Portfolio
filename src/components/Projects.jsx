import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {DiGithubBadge} from 'react-icons/di'

const Projects = () => {
    return (
        <div className="pro-main">
            <h1 className='xyg'>Projects</h1>
            <div className="pro-start">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://play-lh.googleusercontent.com/wLGeewLp4VgAOHEV-1NYxCB7WJIrjVWGJsNbiYZbX7-7WF8oJe0KyueueOZkxO9MWQ=w526-h296-rw" />
                    <Card.Body>
                        <Card.Title>Netflix Clone</Card.Title>
                        <Card.Text>
                            In this i had use API for fetching the data and used Redux for state management .Bootstrap was also used
                        </Card.Text>
                        <Button variant="primary">See Live</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="http://bloomidea.com/sites/default/files/styles/og_image/public/blog/Tipos%20de%20come%CC%81rcio%20electro%CC%81nico_0.png?itok=jC9MlQZq" />
                    <Card.Body>
                        <Card.Title>E-commerce</Card.Title>
                        <Card.Text>
                           This project was all about exploring redux .I had used react and Material UI for a good user inter face
                        </Card.Text>
                        <Button variant="primary">See Live</Button>
                    </Card.Body>
                </Card> <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://i.ytimg.com/vi/TwYKwaEjJd4/maxresdefault.jpg" />
                    <Card.Body>
                        <Card.Title>My Portfolio</Card.Title>
                        <Card.Text>
                            This was one of my first project which i had done in my early days with react in this i had used react, bootstrap and context api 
                        </Card.Text>
                        <Button variant="primary">See Live</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Projects