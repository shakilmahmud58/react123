
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Member from './components/Member';
import SelectedMember from './components/SelectedMember';

function App() {
  const [members,setMembers] = useState([]);
  useEffect(()=>{fetch('./member.JSON')
     .then(res=>res.json())
     .then(data=>setMembers(data))
    },[]);
    const [number, setNumber] = useState(0);
    const [names, setNames]=useState([]);
    const [total, setTotals]=useState(0);
    const hireMember=(member)=>{
      console.log(member);
      setNumber(number+1);
      setTotals(total+member.Demand)
      const newNames = [...names,member.name];
      setNames(newNames);
    }
  return (
    <div className="App">
       <Header></Header>
       <div className="body">
         <div className="memberlist">
          {
            members.map((member)=><Member key={member.key} member={member} hireMember={()=>hireMember(member)}></Member>)
          }
          </div>
          <div className="selected">
              <SelectedMember number={number} names={names} total={total}></SelectedMember>
          </div>
       </div>
    </div>
  );
}

export default App;
