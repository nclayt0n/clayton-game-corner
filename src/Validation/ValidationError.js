import React from 'react';
const uuidv4=require('uuid/v4')

export default function ValidationError(props) {
  if(props.errorMessage) {
    return (
      <div  key={uuidv4()} className="error" id="error" style={{color:'red',fontWeight:'bold',textAlign:'center',margin:'auto',width:'fit-content'}}>
        {props.errorMessage}
      </div>
    );
  }

  return <></>
}