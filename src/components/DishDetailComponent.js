import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";


function RenderDish({dish}) {
  if (dish != null) {
    return (
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle tag="h6">{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  } else {
    return <div></div>;
  }
}

function RenderComments({comments}) {
  return comments == null ? <div></div> :
      <div>
        <h4>Comments</h4>
        {comments.map((comment) => {
          return (
            <ul key={comment.id} className="list-unstyled">
              <li>
                <p>{comment.comment}</p>
                <p>
                  --{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                </p>
              </li>
            </ul>
          );
        })}
      </div>
}

const  DishDetail = (props) => {
  return (
    <div className="row mt-5 container pt-4 m-auto">
      <div className="col-md-5 col-12 m-1">
        <RenderDish dish={props.dish}/>
      </div>
      <div className="col-md-5 col-12 m-1">
        <RenderComments comments={props.dish?.comments}/>
      </div>
    </div>
  );
  
}

export default DishDetail;