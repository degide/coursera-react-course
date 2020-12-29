import { Card, CardImg, CardImgOverlay,CardTitle } from 'reactstrap';

function RenderMenuItem ({dish, onClick}) {
  return (
      <Card
          className="col-md-5 col-12 mt-3 mx-auto p-0" //onClick={() => onClick(dish.id)}
      >
          <CardImg top width="100%" src={dish.image} alt={dish.name} />
          <CardImgOverlay tag="h4">
              <CardTitle>{dish.name}</CardTitle>
          </CardImgOverlay>
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
    <div className="row container pt-4 m-auto pb-4">
      {menu}
    </div>
  );
}

export default Menu;