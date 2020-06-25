
import React from 'react';
import ListUsers from './Childs/ListUsers';
import Button  from './Childs/Button';
//import Childs from './Childs/index';
//import './App.css';

class App extends React.Component {

  state = {
      interviewed: true,
      users: []
    }



componentDidMount = () => {
  console.log('CDM ' );
 // fetch('http://www.json-generator.com/api/json/get/cgiWLNadAi?indent=0')
  fetch('http://www.json-generator.com/api/json/get/bVqHEfTJyW?indent=2')
  .then( res => res.json() )
  .then( res => {
      this.setState({
        interviewed: false,
        users: res
      });
  });
}


changeValue = (user_id) => () => {
  console.log(user_id);
  const changrdUser = this.state.users.map(user => {
    if (user.index === user_id) {
      user.interviewed = !user.interviewed;
    }
    return user;
  });

  this.setState({
    interviewed: changrdUser
  });
}

render() {
 
      const { users, interviewed } = this.state;
      const { changeValue } = this;

      console.log('[interviewed]', interviewed);  
      console.log('[users]', users);
    
      return (
        <div >
                  

          <h2> Элемент с jsonGenerator </h2>
          {
            users.map((user,  key) => (
              <>
              <ListUsers
                key={key}
                user={user}                
              />
              <Button interviewed={changeValue}/>
              </>
              )        
          )
        }    
        </div>)   
}
}

export default App;
