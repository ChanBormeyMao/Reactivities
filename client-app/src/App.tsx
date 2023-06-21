import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Button, Header, List } from 'semantic-ui-react';

function App() {
  const [activities,setActivities] = useState([]);

  useEffect(()=>{
    //get data from api
    //[] to make activities an empty array
    axios.get("http://localhost:5000/api/activities").then(
      //get a response
      response =>{
        //setActivities method by passing response data
        //But this setActivities(response.data) will set and get in infinite loops
        console.log(response);
        setActivities(response.data);
      }
    )
    //[] this will stop the infinite loops
  }, [])
  return (
    <div>
      <Header as='h2' icon='users' content='Reactivities'/>
        <List>
          {activities.map((activity:any) =>(
             <List.Item key={activity.id}>{activity.title}</List.Item>
          ))}
        </List>
        
    </div>
  );
}

export default App;
