import React, { useState, useEffect, useReducer, useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import Input from '../UI/Input/Input';

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return {value: action.val, isValid: action.val.includes('@') };
  }
  if(action.type === 'INPUT_BLUR'){
    return {value: state.value, isValid: state.value.includes('@')};
  }
  return {value: '', isValid: false};
};

const passwordReducer = (state, action) => {
  if(action.type === 'USER_INPUT') {
    return {value: action.val, isValid: action.val.length>6};
  }
  if(action.type === 'INPUT_BLUR') {
    return {value: state.value, isValid: state.value.length>6};
  }
  return {value: '', isValid: false};
};


const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  // const [formIsValid, setFormIsValid] = useState(false);

  // useEffect checks the below things on every key change of enteredEmail, enteredPassword
  // useEffect(() => {
  //   setFormIsValid(
  //     enteredEmail.includes('@') && enteredPassword.trim().length > 6
  //   );
  // }, [enteredEmail, enteredPassword]);


  // useEffect(() => {
  //   const identifier = setTimeout(() => {
  //     console.log('Checking for validity');
  //     setFormIsValid(
  //       enteredEmail.includes('@') && enteredPassword.trim().length > 6
  //     );
  //   }, 500);

  //   // wont run at the starting phase
  //   return () => {
  //     console.log('CLEAN UP');
  //     clearTimeout(identifier);
  //   }
  // }, [enteredEmail, enteredPassword]);

  // const emailChangeHandler = (event) => {
  //   setEnteredEmail(event.target.value);

  //   setFormIsValid(
  //     enteredEmail.includes('@') && enteredPassword.trim().length > 6
  //   );
  // };

  // const passwordChangeHandler = (event) => {
  //   setEnteredPassword(event.target.value);

  //   setFormIsValid(
  //     event.target.value.trim().length > 6 && enteredEmail.includes('@')
  //   );
  // };

  // const validateEmailHandler = () => {
  //   setEmailIsValid(enteredEmail.includes('@'));
  // };

  // const validatePasswordHandler = () => {
  //   setPasswordIsValid(enteredPassword.trim().length > 6);
  // };

  // const submitHandler = (event) => {
  //   event.preventDefault();
  //   props.onLogin(enteredEmail, enteredPassword);
  // };

  // useReducer is more powerful and used if one state depends on another states data.(email and validity of email)
  // const [state, dispatchFn] = useReducer(reducerFn, initialState, initFn);
  
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null,
  });

  const authCtx = useContext(AuthContext);
  
  const [formIsValid, setFormIsValid] = useState(false);

  const emailChangeHandler = (event) => {
    dispatchEmail({type: 'USER_INPUT', val: event.target.value});

    setFormIsValid(
      event.target.value.includes('@') && passwordState.isValid
    );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type: 'USER_INPUT', val: event.target.value});

    setFormIsValid(
      event.target.value.trim().length > 6 && emailState.isValid
    );
  };

  const validateEmailHandler = () => {
    dispatchEmail({type: 'INPUT_BLUR'});
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type: 'INPUT_BLUR'});

  };

  // effective way of getting valid form reducer and providing to useEffect.
  const {isValid: emailIsValid} = emailState;
  const {isValid: passwordIsValid} = passwordState;
  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('Checking for validity');
      setFormIsValid(
        emailIsValid && passwordIsValid
      );
    }, 500);

    // wont run at the starting phase
    return () => {
      console.log('CLEAN UP');
      clearTimeout(identifier);
    }
  }, [emailIsValid, passwordIsValid]);

  const submitHandler = (event) => {
    event.preventDefault();
    authCtx.onLogin(emailState.value, passwordState.value);
  };
  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input 
        id="email" 
        label="E-Mail" 
        type="email" 
        isValid={emailIsValid} 
        value={emailState.value}
        onChange={emailChangeHandler}
        onBlur={validateEmailHandler}
        />
        <Input 
        id="password" 
        label="Password" 
        type="password" 
        isValid={passwordIsValid} 
        value={passwordState.value}
        onChange={passwordChangeHandler}
        onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
