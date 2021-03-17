import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Modal,
  ModalBody,
  ModalHeader,
  Button,
  Row, Col, Label,
} from "reactstrap";
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';
import { Component } from "react"

class CommentForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalOpen: false,
      author: '',
      rating: '',
      comment: ''
    }
    this.toggleModal = this.toggleModal.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  toggleModal() {
    this.setState({
      ...this.state,
      isModalOpen: !this.state.isModalOpen
    })
  }
  handleSubmit(values) {
    this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
    this.toggleModal()
  }
  render() {
    const maxLength = (len) => (val) => !(val) || (val.length <= len);
    const minLength = (len) => (val) => val && (val.length >= len);
    const required = (val) => val && val.length;
    return (
      <div>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Label htmlFor="rating" md={12}>Rating</Label>
                <Col md={12}>
                  <Control.select model=".rating" id="rating" name="rating"
                    className="form-control" validators={{required}}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="author" md={12}>Your Name</Label>
                <Col md={12}>
                  <Control.text model=".author" id="author" name="author"
                    className="form-control" placeholder="Your Name"
                    validators={{
                      required, minLength: minLength(3), maxLength: maxLength(15)
                    }} />
                  <Errors
                    className="text-danger mt-2"
                    model=".author"
                    show="touched"
                    messages={{
                      required: 'This field is required.',
                      minLength: ' It must be greater than 2 characters.',
                      maxLength: ' Must be 15 characters or less.'
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="comment" md={12}>Comment</Label>
                <Col md={12}>
                  <Control.textarea model=".comment" id="comment" name="comment" rows="6"
                    className="form-control" 
                    validators={{
                      required, minLength: minLength(3), maxLength: maxLength(100)
                    }} />
                    <Errors
                      className="text-danger mt-2"
                      model=".comment"
                      show="touched"
                      messages={{
                        required: 'This field is required.',
                        minLength: ' It must be greater than 2 characters.',
                        maxLength: 'Must be 100 characters or less.'
                      }}
                    />
                </Col>
              </Row>
              <Row className="p-2 pl-4">
                <Button type="submit" value="submit" color="primary">Submit</Button>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
        <Button className="btn btn-info" onClick={()=> this.toggleModal()}>
          <i className="fa fa-edit mr-2"></i>
            Submit A Comment
        </Button>
      </div>
    )
  }
}

function RenderDish({ dish }) {
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

function RenderComments({ comments,addComment }) {
  return comments == null ? <div></div> :
    <div>
      <h4>Comments</h4>
      {comments.map((comment) => {
        return (
          <ul key={comment.id} className="list-unstyled">
            <li>
              <p>{comment.comment}</p>
              <p>
                --{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}
              </p>
            </li>
          </ul>
        );
      })}
      <CommentForm addComment={addComment} dishId={comments[0].dishId}></CommentForm>
    </div>
}

const DishDetail = (props) => {
  return (
    <div className="mt-5 container pt-4 m-auto">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{props.dish.name}</h3>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderDish dish={props.dish} />
        </div>
        <div className="col-12 col-md-5 m-1">
          <RenderComments comments={props.comments} addComment={props.addComment}/>
        </div>
      </div>
    </div>
  );

}

export default DishDetail;