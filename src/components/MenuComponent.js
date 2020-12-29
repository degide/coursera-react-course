import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderMenuItem ({dish, onClick}) {
  return (
      <Card
          className="col-md-5 col-12 mt-3 mx-auto p-0" //onClick={() => onClick(dish.id)}
      >
          <Link to={`/menu/${dish.id}`}>
            <CardImg top width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay tag="h4">
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Link>
      </Card>
  );
}

const Menu = (props) => {

  const menu = props.dishes.map((dish) => {
      return (
        <RenderMenuItem key={dish.id} dish={dish}/> //onClick={props.onClick} 
      );
  });

  return (
    <div className="container pt-4 m-auto pb-4">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
          <BreadcrumbItem active>Menu</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Menu</h3>
          <hr/>
        </div>                
      </div>
      <div className="row">
        {menu}
      </div>
    </div>
  );
}

export default Menu;