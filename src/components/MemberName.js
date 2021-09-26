//import css file
import '../css/membername.css';

function MemberName(props){
    //console.log(props);
    return (
    <div className="membername">  
        {props.name}
    </div>
  );
}

//export the component

export default MemberName;
