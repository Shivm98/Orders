import OrdersPage from "./pages/OrdersPage/OrdersPage";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import OrderDetailPage from "./pages/OrderDetailPage/OrderDetailPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
            <Route path='/' exact component={OrdersPage}/>
            <Route path='/:id' component={OrderDetailPage}/>
        </Switch>
      </div>
    </Router>
   
  );
}

export default App;
