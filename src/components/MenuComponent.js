import { Card, CardImg, CardImgOverlay } from 'reactstrap';


const Menu = (props)=>{
  return (
      <div className="row container pt-4 m-auto">
        {
          props.dishes.map(dish=>{
            return (
              <Card className="col-md-5 col-12 mt-3 mx-auto p-0" key={dish.id} onClick={() => props.onClick(dish.id)}>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardImgOverlay tag="h4">{dish.name}</CardImgOverlay>
              </Card>
            )
          })
        }
      </div>
    );
}

export default Menu;