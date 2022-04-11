import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Store(){
    return(
        <div>
            <h2>Browse stores in Houston</h2>
<Container style={{ marginTop: "40px", textAlign: "center" }}>
    <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly"}} >
        <Row>
            <Col xs=".5" >
                <Image style={{ height: "55px", width: "50px", border: "1px solid #E8E9EB" }} src="https://corporate.aldi.us/fileadmin/fm-dam/logos/ALDI_2017.png" roundedCircle  />
            </Col>
            <Col>
                <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                <p>Delivery * Pickup</p>
            </Col>
        </Row>
        <Col sm="1"></Col>
        <Row >
            <Col xs=".5">
                <Image style={{ height: "55px", width: "50px", border: "1px solid #E8E9EB" }} src="https://sprouts.com/wp-content/uploads/2017/12/sprouts-logo.png"  roundedCircle />
            </Col>
            <Col>
                <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
                <p>Delivery * Pickup</p>
            </Col>
        </Row>
        <Col sm="1"></Col>
        <Row >
            <Col xs=".5" >
                <Image style={{ height: "55px", width: "50px", border: "1px solid #E8E9EB" }} src="https://dayton247now.com/resources/media/97ffece0-4331-41f7-86d2-29f25e7b2c95-large16x9_krogerlogonew.jpg?1573074013846" roundedCircle />
            </Col>
            <Col md="6">
                <h5 style={{ fontWeight: "bold" }}>Kroger</h5>
                <p>Delivery</p>
            </Col>
        </Row>
    </Row>
    </Container>
        </div>
    )
}
export default Store