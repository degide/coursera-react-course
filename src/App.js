import "./App.css"
import {Component} from 'react'
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainComponent';

export default class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}
