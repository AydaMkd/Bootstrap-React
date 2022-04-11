import { Form } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
function Background()
{
    return (
        <div>
            <Form>
  <Form.Group className="mb-3" controlId="formBasicAddress">
    <Form.Label>Address</Form.Label>
    <Form.Control type="address" placeholder="Enter your address" />
    <Form.Text className="text-muted">
      We'll never share your address with anyone else.
    </Form.Text>
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
   <div >
                <img style={{ height: "200px", width: "100%", position: "static", backgroundSize: "cover" }} src="https://d2d8wwwkmhfcva.cloudfront.net/1500x1520/d2guulkeunn7d8.cloudfront.net/assets/homepage/homepage-mobile-background-m3-high-res-ca3279087ea0a3337f671b694b196d43fd207443d5825e61295b0996974835e9.jpg" alt="background" />
            </div>
        </div>

    )
}

export default Background