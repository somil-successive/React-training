import React from 'react'
import LoginPage from './Ques1/LoginPage'
import NestedContext from './Ques2/NestedContext'
import Routing from './Ques3/Routing'
import RoutingPages from './Ques4/RoutingPages'
import RoutingElements from './Ques5/RoutingElements'
import RoutingItem from './Ques6/RoutingItem'

const Assignment_3 = () => {
  return (
    <div>
        <h2>Question-1</h2>
        <LoginPage/>
        <hr/>
        <h2>Question-2</h2>
        <NestedContext />
        <hr/>
        <h2>Question-3</h2>
        <Routing />
        <hr/>
        <h2>Question-4</h2>
        <RoutingPages />
        <hr/>
        <h2>Question-5</h2>
        <RoutingElements />
        <hr/>
        <h2>Question-6</h2>
        <RoutingItem/>



      
    </div>
  )
}

export default Assignment_3
