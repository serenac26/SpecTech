import React, { Component } from 'react';
import {Logo, Post, Comment} from './Components.js';
import styles from './App.css'

class App extends Component {
  render() {
    var users = [
    "Billy Chiu",
    "Matt Vanegas",
    "Irene Nam",
    "Raymond Li",
    "Arsalaan Ansari"
    ]
    
    var comments = [
    "Guys the trainees are too smart",
    "How do we keep them busy?",
    "Let's make them do learnyounode for three meetings",
    "Yuh yeet",
    "You bum"
    ]

    var thread = []
    for(var i = 1; i < users.length; i++){
      thread.push(
        <Comment
          propicUrl="http://r.ddmcdn.com/s_f/o_1/cx_462/cy_245/cw_1349/ch_1349/w_720/APL/uploads/2015/06/caturday-shutterstock_149320799.jpg"
          name={users[i]}
          status={comments[i]}
          minutes={5 - i}
        />
      )
    }
    return (
      <div>
        <Logo/>
        <Post
          propicUrl="https://i.ytimg.com/vi/5iGE_wIDOTk/maxresdefault.jpg" 
          name={users[0]}
          status={comments[0]}
          minutes={10}
        />
        <div className={styles.commentthread}>
          {thread}
        </div>
      </div>
    );
  }
}

export default App;
