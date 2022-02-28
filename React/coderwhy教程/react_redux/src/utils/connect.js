import { Component } from 'react'

import { StoreContext } from './context'

export function connect(mapStateToprops, mapDispachToProps) {
  return function enhanceHOC(WrappedComponent) {
    class EnhanceComponent extends Component {
      static contextType = StoreContext

      state = {
        storeState: mapStateToprops(this.context.getState())
      }


      componentDidMount() {
        this.unsubscribe = this.context.subscribe(() => {
          this.setState({ storeState: mapStateToprops(this.context.getState()) })
        })
      }

      componentWillUnmount() {
        this.unsubscribe()
      }

      render() {
        return (
          <WrappedComponent {...this.props} {...mapStateToprops(this.context.getState())} {...mapDispachToProps(this.context.dispatch)} ></WrappedComponent>
        )
      }
    }
    return EnhanceComponent
  }
}