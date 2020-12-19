
import Child_B from './Childern/Child_B';
import Child_C from './Childern/Child_C';

//
// Flow (Make change into store) : Dispatcher -> Action -> Reducer -> Store
//
// For read the value from the store the flow will be reversed

function App() {

  return (
    <div className="App">
      <Child_B/>
      
      <Child_C/>  
    </div>
  );
}

export default App;
