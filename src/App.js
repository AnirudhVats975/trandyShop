import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';

function App() {
  const user = true;
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products/:cat" component={ProductList} />
          <Route exact path="/Product/:id" component={Product} />

          <Route exact path="/Register" component={Register}>
            {user ? <Redirect to="/" /> : <Register />}
          </Route>
          <Route exact path="/login" component={Login}>
            {user ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </Router>


    </>
  );
}

export default App;
