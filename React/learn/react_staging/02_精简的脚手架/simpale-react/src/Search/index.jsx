import React, { Component } from 'react';
import axios from 'axios'
import PubSub from 'pubsub-js'

class Search extends Component {

  search = () => {
    const {value} = this.keyWordEle
    // console.dir(this.keyWordEle);
    // console.log(value);
    PubSub.publish('pubState', { isFirst: false, isLoding: true})
    axios.get('http://localhost:3000/api/search/users/', {
      params: {
        q: value
      }
    })
    .then(res => {
      // console.log(res);
      // const { avatar_url, html_url, login} = res.data.items
      // console.log(res.data.items);
      PubSub.publish('pubState', { isLoding: false, userList: res.data.items})
    })
    .catch(e => {
      PubSub.publish('pubState', { isLoding: false, err: e.message })
    })
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input ref={(c) => {this.keyWordEle = c}} type="text" placeholder="输入关键词" />&nbsp;<button onClick={this.search}>Search</button>
        </div>
      </section>
    );
  }
}

export default Search;
