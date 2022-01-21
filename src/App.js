// import logo from './logo.svg';
import React,{ useState } from 'react';
import './App.css';


function App() {
  const [datas, setData] = useState({
        name : "",
        age : "",
        address : "",
        department :"",
        salary : "",
        materialState : "",
        
  })
  const handleChange = (e)=>{
    e.preventDefault();

    const fillName = e.target.getAttribute('name');
    const fillValue = e.target.value;

    const newData = {...datas};
    newData[fillName] = fillValue;
    
    console.log(Object.values(datas));
    setData(newData);
  }
   const handleFormSubmit = (e) =>{
     e.preventDefault();
    const addData = {
      name : th.name,
       age : th.age,
       address : th.address,
       department :th.department,
       salary : th.salary,
       materialState : th.materialState,
   }
   const addDatas = [...datas,addData];
   setData(addDatas);
  }
  var th = Object.values(datas)
  return (
    <div className="App">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Address</th>
                <th>Department</th>
                <th>Salary</th>
                <th>Material Sataus</th>
              </tr>
            </thead>
            <tbody>
            {
            th.map((data)=>
              <tr>
              <td>{data.name}</td>
              <td>{data.age}</td>
              <td>{data.address}</td>
              <td>{data.department}</td>
              <td>{data.salary}</td>
              <td>{data.materialState}</td>
            </tr>
            )}  
            </tbody>
          </table>
          <div style={{width:"90%"}}>
          <form onSubmit={handleFormSubmit}>
            <div style={{width:"13%", margine:"2%"}}>
            <input type="text" placeholder="Full Name" name="name" onChange={handleChange}/>
            </div>

            <div style={{width:"9%", margine:"2%"}}>
            <input type="text" placeholder="Age" name="age" onChange={handleChange}/>
            </div>

            <div style={{width:"18%", margine:"2%"}}>
            <input type="text" placeholder="Address" name="address" onChange={handleChange}/>
            </div>
              <div style={{width:"20%", margine:"2%"}}>
            <select name="department" onChange={handleChange}>
                <option>Choose</option>
                <option>CSE</option>
                <option>IT</option>
                <option>ECE</option>
                <option>Mechanical</option>
                <option>Civil</option>
            </select>
            </div>

            <div style={{width:"18%", margine:"2%"}}>
                <input type="text" placeholder="Salary"  name="salary" onChange={handleChange}/>
            </div>

            <div style={{width:"18%", margine:"2%"}}>
                <input type="checkbox" onChange={handleChange}   name="materialState"/><span>Married</span>
                <input type="checkbox" onChange={handleChange}  name="materialState"/><span>Unmarried</span> 
            </div>

            <button type="submit">Submit</button>
        </form>
        </div>
    </div>
  );
}

export default App;
