import { Component } from 'react'
import Menu from './MenuComponent';
import {} from 'reactstrap'
import DishDetailComponent from './DishDetailComponent'
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from "../shared/dishes";

export default class Main extends Component {
    constructor(props) {
      super(props);
      this.state = {
          dishes: DISHES,
          selectedDish: null
      };
    }
  
    onDishSelect(dishId) {
      this.setState({ selectedDish: dishId});
    }
  
    render() {
      return (
        <div>
          <Header />
          <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
          <DishDetailComponent dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
          <Footer />
        </div>
      );
    }
}
