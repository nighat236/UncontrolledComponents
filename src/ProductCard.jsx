import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function ProductCard() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      
      {/* Card 1 */}
      <Card style={{ width: '18rem' }}>
        <Card.Img
          variant="top"
          src="https://images.unsplash.com/photo-1519226719127-9e805abb99b1?q=80&w=870&auto=format&fit=crop"
        />
        <Card.Body>
          <Card.Title>Ladies Pumps</Card.Title>
          <Card.Text>This is ladies winter High Heel Pumps!</Card.Text>
          <Button variant="primary">Shop Here</Button>
        </Card.Body>
      </Card>

      {/* Card 2 */}
      <Card style={{ width: '18rem' }}>
        <Card.Img
          variant="top"
          src="https://images.unsplash.com/photo-1733731402869-57e0cce24aea?q=80&w=387&auto=format&fit=crop"
        />
        <Card.Body>
          <Card.Title>Ladies Purple Dress</Card.Title>
          <Card.Text>This is ladies Summer Collection</Card.Text>
          <Button variant="primary">Shop Here</Button>
        </Card.Body>
      </Card>

      {/* Card 3 */}
      <Card style={{ width: '18rem' }}>
        <Card.Img
          variant="top"
          src="https://media.istockphoto.com/id/1320310892/photo/vintage-indian-bride.jpg?s=1024x1024&w=is&k=20&c=IIfNOXspLO1NivOFK4w7O7T6FSjnBwy6S-uJAmkIwOI="
        />
        <Card.Body>
          <Card.Title>Bridal Dress</Card.Title>
          <Card.Text>Pakistani Bridal Dress</Card.Text>
          <Button variant="primary">Shop Here</Button>
        </Card.Body>
      </Card>

      {/* Card 4 */}
      <Card style={{ width: '18rem' }}>
        <Card.Img
          variant="top"
          src="https://images.unsplash.com/photo-1733209588000-339b73c36575?q=80&w=1374&auto=format&fit=crop"
        />
        <Card.Body>
          <Card.Title>Sky Blue Color Dress</Card.Title>
          <Card.Text>This is ladies Summer Fashion Dress</Card.Text>
          <Button variant="primary">Shop Here</Button>
        </Card.Body>
      </Card>

      {/* Card 5 */}
      <Card style={{ width: '18rem' }}>
        <Card.Img
          variant="top"
          src="https://images.unsplash.com/photo-1750164944624-e17f4d121a62?q=80&w=387&auto=format&fit=crop"
        />
        <Card.Body>
          <Card.Title>Bridal Dress</Card.Title>
          <Card.Text>Red Color full zardozi work</Card.Text>
          <Button variant="primary">Shop Here</Button>
        </Card.Body>
      </Card>

    </div>
  );
}

export default ProductCard;
