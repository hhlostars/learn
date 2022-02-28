import React from 'react';

// import {connect} from '../utils/connect'
import { connect } from 'react-redux'

import { addAction } from '../store/counter/action'
import { changeBannersAction, getData, fetchData } from '../store/home/action'



function Home(props) {
  console.log(props);
  const { counter, add, banners, getData, getFetchData } = props

  return (
    <div>
      <h2>Home</h2>
      <h3>当前计数:{counter}</h3>
      <button onClick={() => {add(1)}}>+1</button>
      <button onClick={() => {add(5)}}>+5</button>
      <h1>Banners</h1>
      <ul>
        {banners.map((item, index) => {
          return <li key={index}><img src={item.image} alt={item.title} width={100} />{item.title}</li>
        })}
      </ul>

      <button onClick={getData}>异步redux</button>
      <button onClick={getFetchData}>redux-soga拦截</button>
    </div>
  );
}

const mapSataeToProps = state => ({
  counter: state.counterInfo.counter,
  banners: state.homeInfo.banners,
})
const mapDispatchToProps = dispatch => ({
  add: (num) => {
    dispatch(addAction(num))
  },
  changeBanners: (banners) => {
    dispatch(changeBannersAction(banners))
  },
  getData() {
    dispatch(getData)
  },
  getFetchData() {
    dispatch(fetchData)
  }
})

export default connect(mapSataeToProps, mapDispatchToProps)(Home)