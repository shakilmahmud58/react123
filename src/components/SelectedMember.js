//import css file
import '../css/selectedmember.css';
import MemberName from './MemberName';

function SelectedMember(props) {
    console.log(props);
    return (
    <div>
        <div>Selected Member Number : {props.number}</div>
        <div>Total Cost : {props.total}</div>
      
        {
          props.names.map((name,index)=><MemberName name={name} key={index}></MemberName>)
        }
        
    </div>
  );
}

//export the component

export default SelectedMember;
