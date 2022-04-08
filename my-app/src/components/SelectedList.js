import React from 'react'
import PropType from "prop-types";


export default function SelectedList(props) {

    const {propItem} = props
    
  return (
    <li>{propItem}</li>
  )
}

SelectedList.propTypes={
    propItem:PropType.string
}

SelectedList.defaultProps={
    propItem:"not selected"
}
