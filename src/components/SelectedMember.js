//import css file
import '../css/selectedmember.css';

function SelectedMember(props) {
    console.log(props);
    return (
    <div className="App">
        <div>Selected Member Number : {props.number}</div>
        <div>Total Cost : {props.total}</div>
        {props.names.map(name=><div className="selectname">{name}</div>)}
    </div>
  );
}

//export the component

export default SelectedMember;
