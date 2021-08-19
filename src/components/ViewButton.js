import React from 'react'

const ViewButton = (props) => {
    return (
        // <div style={{backgroundColor: 'blue'}} className="button" onClick={handleClick}>
        //     <h4>View</h4>
        // </div>
        <button
        className="button"
        // style={buttonStyle}
      >
        {props.name}
      </button>
    )
}

export default ViewButton
