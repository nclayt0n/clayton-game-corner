import React from 'react';
const uuidv4=require('uuid/v4')

export default function ValidationError(props) {
  if(props.Namemessage || props.Instructionsmessage || props.Ingredientsmessage||props.Foldermessage||props.Ingredientmessage || props.nameMessage) {
    return (
      <div  key={uuidv4()} className="error" id="error" style={{color:'red',fontWeight:'bold',textAlign:'center',margin:'auto',width:'fit-content'}}>
        <div  key={uuidv4()} style={{fontSize:'14px',color:'red',fontWeight:'bolder',textShadow:'.5px .5px black'}}>{props.Foldermessage}
        </div>
        {props.Namemessage}
      {props.Instructionsmessage}
      {props.Ingredientsmessage}
      {props.Ingredientmessage}
      <div  key={uuidv4()} className="error" id="error" style={{color:'rgb(71, 5, 5)',fontWeight:'bold',textAlign:'center',margin:'auto',width:'fit-content',textShadow:'.5px .5px darkred'}}>
        {props.nameMessage}
      </div>
      </div>
    );
  }

  return <></>
}