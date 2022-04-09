import "./App.css";
import SelectedItems from "./components/SelectedItems";
import AllItems from "./components/AllItems";
import { ItemContext } from "./components/Context";
import ItemProvider from "./components/Context";

function App() {
 
  
  return (
    <div className="App">
      <ItemProvider>
        <AllItems />
        <SelectedItems />
      </ItemProvider>
    </div>
  );
}

export default App;
