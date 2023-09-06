// import logo from './logo.svg';
import './App.css';
// import First from './javascripts/1_1_First';
// import Try from './javascripts/1_2_Try';
// import ThirdTry from './javascripts/1_4_thirdTry';
// import Third from './javascripts/2_1_Third';
import MyRoute from './MyRoute';
import './css/Product.css'
// import cartReducer from './redux/reducer/cartReducer';
// import { createStore } from "redux";
//createStore is used to provide information for compiler that our reducer is a store
import { Provider } from 'react-redux';
//provider is used to protect data from reducer to components
import dataStore from './store';

const App = () => {
  // const reducerData = createStore(cartReducer)


  return (
    <>
      <Provider store={dataStore}>  
        <MyRoute />
      </Provider>
      {/* here <MyRoute/> is wrapped by provider so every data that comes to the myroute passes through provider. provider converts data from redux to react components */}


      {/* <h1>Dursikshya Education Network</h1>
      <First/>
      <hr/><Try/><hr/>
      <ThirdTry/>
      <Third/> */}
    </>
  );
}

export default App;
