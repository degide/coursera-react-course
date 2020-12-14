import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay } from 'reactstrap';
import DishDetailComponent from './DishDetailComponent'

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null,
      dishes: [
        {
          id: 0,
          name: 'Uthappizza',
          image: './images/uthappizza.png',
          category: 'mains',
          label: 'Hot',
          price: '4.99',
          description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
          comments: [
            {
              id: "1",
              author: "egide",
              comment: "A unique combination of Indian Uthappam",
              date: "13 Dec 2020"
            },
            {
              id: "2",
              author: "egide",
              comment: "A unique combination of Indian Uthappam",
              date: "13 Dec 2020"
            }
          ]
        },
        {
          id: 1,
          name: 'Zucchipakoda',
          image: './images/zucchipakoda.png',
          category: 'appetizer',
          label: '',
          price: '1.99',
          description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',
          comments: [
            {
              id: "1",
              author: "peter",
              comment: "A unique combination of Indian Uthappam",
              date: "13 Dec 2020"
            },
            {
              id: "2",
              author: "egide",
              comment: "A coated with mildly spiced",
              date: "13 Dec 2020"
            }
          ]
        },
        {
          id: 2,
          name: 'Vadonut',
          image: './images/vadonut.png',
          category: 'appetizer',
          label: 'New',
          price: '1.99',
          description: 'A quintessential ConFusion experience, is it a vada or is it a donut?',
          comments: [
            {
              id: "1",
              author: "Tess",
              comment: "A quintessential ConFusion experience",
              date: "12 Dec 2020"
            },
            {
              id: "2",
              author: "john",
              comment: "is it a vada or is it a donut?",
              date: "13 Dec 2020"
            }
          ]
        },
        {
          id: 3,
          name: 'ElaiCheese Cake',
          image: './images/elaicheesecake.png',
          category: 'dessert',
          label: '',
          price: '2.99',
          description: 'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
          comments: [
            {
              id: "1",
              author: "ManKind",
              comment: "A quintessential ConFusion experience",
              date: "17 Dec 2020"
            },
            {
              id: "2",
              author: "Emmy",
              comment: " semi-sweet New York Style Cheese Cake",
              date: "13 Dec 2020"
            }
          ]
        },
      ],
    };
  }
  changeSelectedDish = (dish) => {
    this.setState({
      ...this.state,
      selectedDish: dish
    })
  }
  render() {
    const menu = this.state.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 mt-5" onClick={() => this.changeSelectedDish(dish)}>
          <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardImgOverlay tag="h4" key={dish.id}>{dish.name}</CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">
          {menu}
          <DishDetailComponent dish={this.state.selectedDish} />
        </div>
      </div>
    );
  }
}

export default Menu;