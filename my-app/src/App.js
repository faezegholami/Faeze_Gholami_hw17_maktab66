import "./App.css";
import SelectedItems from "./components/SelectedItems";
import AllItems from "./components/AllItems";
import { ItemContext } from "./components/Context";

function App() {
 
  
  return (
    <div className="App">
      <ItemContext>
        <AllItems />
        <SelectedItems />
      </ItemContext>
    </div>
  );
}

export default App;
