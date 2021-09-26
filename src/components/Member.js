import React from "react";
import '../css/member.css';

function Member(props) {
  return (
    <div className="member">
        {/* Load Image */}
        <img src={props.member.image} alt="pic"/>
        <div>Name:{props.member.name}</div>
        <div>Expert:{props.member.Expert}</div>
        <div>Age:{props.member.Age}</div>
        <div>Experience:{props.member.Experience}</div>
        <div>Demand:{props.member.Demand}</div>
        {/* add button */}
        <button onClick={props.hireMember} className="button"><i class="fas fa-handshake"></i> Hire </button>
    </div>
  );
}

export default Member;
