import Count from './container/Count'
import store from './redux/store'

function App() {
  return (
    <div className="App">
      <Count store={store}></Count>
    </div>
  );
}

export default App;
