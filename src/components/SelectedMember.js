//import { useState } from 'react'
import '../css/selectedmember.css';

function SelectedMember(props) {
    // const [number,SetNumber] = useState(0);
    console.log(props);
    return (
    <div className="App">
        <div>Selected Member Number : {props.number}</div>
        <div>Total Cost : {props.total}</div>
        {props.names.map(name=><div className="selectname">{name}</div>)}
    </div>
  );
}

export default SelectedMember;
