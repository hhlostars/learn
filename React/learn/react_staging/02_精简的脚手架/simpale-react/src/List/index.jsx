import React, { Component } from 'react';
import PubSub from 'pubsub-js'

import './index.css'


class List extends Component {

  

  state = {
    userList: [
      {
        "login": "hhlostars",
        "id": 39830350,
        "node_id": "MDQ6VXNlcjM5ODMwMzUw",
        "avatar_url": "https://avatars.githubusercontent.com/u/39830350?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/hhlostars",
        "html_url": "https://github.com/hhlostars",
        "followers_url": "https://api.github.com/users/hhlostars/followers",
        "following_url": "https://api.github.com/users/hhlostars/following{/other_user}",
        "gists_url": "https://api.github.com/users/hhlostars/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/hhlostars/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/hhlostars/subscriptions",
        "organizations_url": "https://api.github.com/users/hhlostars/orgs",
        "repos_url": "https://api.github.com/users/hhlostars/repos",
        "events_url": "https://api.github.com/users/hhlostars/events{/privacy}",
        "received_events_url": "https://api.github.com/users/hhlostars/received_events",
        "type": "User",
        "site_admin": false,
        "score": 1
      }
    ],
    isFirst: true,
    isLoding: false,
    err: ''
  }

  componentDidMount() {
    this.token = PubSub.subscribe('pubState', (msg, stateObj) => {
      console.log(stateObj);
      this.setState(stateObj)
    })
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.token)
  }

  updateAppState = (stateObj) => {
    this.setState(stateObj)
  }

  render() {
    const {userList, isFirst, isLoding, err} = this.state
    return (
      <div className="row">
        {
          isFirst ? <h2>欢迎使用，输入关键字搜索</h2> :
          isLoding ? <h2>Loading</h2> : 
          err ? <h2 style={{color: 'red'}}>{err}</h2> :
          userList.map(user => {
            return (
              <div className="card" key={user.id}>
                <a href={user.html_url} target="_blank" rel="noreferrer" >
                  <img alt="avator" src={user.avatar_url} style={{ width: '100px' }} />
                </a>
                <p className="card-text">{user.login}</p>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default List;
