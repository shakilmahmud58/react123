import React from "react";
import '../css/member.css';

function Member(props) {
    console.log(props);
  return (
    <div className="member">
        <div>Name:{props.member.name}</div>
        <div>Expert:{props.member.Expert}</div>
        <div>Age:{props.member.Age}</div>
        <div>Experience:{props.member.Experience}</div>
        <div>Demand:{props.member.Demand}</div>
        <button onClick={props.hireMember} className="button"><i class="fas fa-handshake"></i> Hire </button>
    </div>
  );
}

export default Member;
