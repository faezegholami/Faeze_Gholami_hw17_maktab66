import { useContext } from "react"
import { ItemContext } from "./Context"
import SelectedList from "./SelectedList"


export default function SelectedItems() {
const {items} = useContext(ItemContext)
   
 return(
    
    
 
        <div>
          <ul>
            {items.map((item) => <SelectedList propItem={item}/>)}
          </ul>
        </div>
  
   
  
 )
}
