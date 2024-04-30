import React from 'react'
import {Container, Row, Col} from "react-bootstrap"
import Maskot from "./../../assets/image/hero/gerbang_smanrog.jpg"

const HeroComp = () => {
  return (
    <div id="home">
        <Container>
            <Row>
            <div className='mask' style={{backgroundColor: 'black'}} >
              <div className='d-flex justify-content align-items-center h-100'>
              <Col className='text-center text-white'>
              <h1>SMAN 1 ROGOJAMPI TARUNA BUDAYA</h1>
              </Col>
              </div>
            </div>
            <p></p>
              <img src={Maskot} alt="maskot" width={1109} height={600}/>
              
            </Row>
          </Container>  
    </div>
  )
}
export default HeroComp