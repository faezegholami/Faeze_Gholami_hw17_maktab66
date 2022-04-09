import { useContext } from "react"
import { ItemContext } from "./Context"
import SelectedList from "./SelectedList"


export default function SelectedItems() {
const {items} = useContext(ItemContext)
   
 return(
    
    
 
        <div className="box">
          <h1 className="selectedItemsHeader">Selected Items</h1>
          <ul style={{ backgroundColor: "#f0807f" }}>
            {items.map((item) => <SelectedList propItem={item}/>)}
          </ul>
        </div>
  
   
  
 )
}
