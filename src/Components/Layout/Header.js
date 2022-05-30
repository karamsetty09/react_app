import React from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
      <Fragment>
          <header className={classes.header}>
              <h1>ReactMeals</h1>
              {/* <button>Cart</button> */}
              <HeaderCartButton onClick={props.onShowCart}/>
          </header>
          <div>
              <img src={mealsImage} className={classes.mainimage}alt='A table full of delicious food'/>
          </div>
      </Fragment>
  )
}

export default Header