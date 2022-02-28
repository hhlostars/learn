// 引入UI组件
import CountUI from '../../components/Count'

// import store from '../../redux/store'
import { incAction, decAction, asyncAction } from '../../redux/count_action'
import { connect } from 'react-redux'

// a函数的返回值作为状态 传递给了UI组件
const mapStateToProps = (state) => ({ data: state })

// 
function mapDispatchToProps(dispatch) {
  return {
    add: (num) => {
      // redux 加法
      dispatch(incAction(num))
    },
    dec: (num) => {
      // redux 加法
      dispatch(decAction(num))
    },
    asyncAdd: (num) => {
      // redux 加法
      dispatch(asyncAction(num, 1000))
    },

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CountUI)