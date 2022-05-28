import React, {useContext, useState} from 'react';
import Button from '../UI/Button/Button';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';
import AuthContext from '../../store/auth-context';
import Header from '../../Components/Layout/Header';
import Meals from '../../Components/Meals/Meals';
import Cart from '../../Components/Cart/Cart';


const Home = (props) => {
  const authCtx = useContext(AuthContext);

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }
  return (
    <div>
      {cartIsShown && <Cart onCloseCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
      <Meals />
      </main>
      
      <Button onClick={authCtx.onLogout}>Logout</Button> 
    {/* <Card className={classes.home}>
      <h1>Welcome back!</h1> 
      <Button onClick={authCtx.onLogout}>Logout</Button> 
      
     </Card>  */}
    
    </div>
  );
};

export default Home;
