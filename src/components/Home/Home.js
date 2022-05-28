import React, {useContext} from 'react';
import Button from '../UI/Button/Button';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';
import AuthContext from '../../store/auth-context';
import Header from '../../Components/Layout/Header';
import Meals from '../../Components/Meals/Meals';

const Home = (props) => {
  const authCtx = useContext(AuthContext);
  return (
    <div>
      <Header />
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
