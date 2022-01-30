import list from './list.json';
import "./Home.css"
import { useState } from 'react';

export default function Home() {
  const [homi, sethomi] = useState()
  const [display, setdisplay] = useState({
    display: "none"
  })
  const openModal = () => {
setdisplay({
  display: "flex"
})
sethomi({
  display: "none"
})
  }
const closeModal = () => {
  setdisplay({
    display: "none"
  })
  sethomi({
    display: "flex"
  })
  }

 
  const [text, settext] = useState(list.map((e) => {
    return(
      <div className ="card gap" key={e.id}> 
     <h2 className="card-header">{e.Name}</h2>
     <br/>
     <p className="card-text">{e.Description}</p>
     <div className="card-body">
       <h5 className="card-title">Month: {e.Month}</h5>
       <h5 className="card-title">Salary: {e.Salary} INR</h5>
       <button type="button" className="btn btn-primary" onClick={openModal} id={e.id}>
   Know more
 </button>
     </div>
     </div>
    
    )
  }));
    

//  const handleFilter = (e) => {
//   const searchWord = e.target.value;
//   const newFilter = list.map((e)=>{
//     return(
//       e.id.includes(searchWord)
//     )
//   })
//   console.log(newFilter)

// //  let detailSearch = list.map((e) => {
    
// //       return(
// //         <div className ="card gap" key={e.id}> 
// //       <h2 className="card-header">{e.Name}</h2>
// //      <br/>
// //      <p className="card-text">{e.Description}</p>
// //      <div className="card-body">
// //        <h5 className="card-title">Month: {e.Month}</h5>
// //        <h5 className="card-title">Salary: {e.Salary} INR</h5>
// //        <button type="button" className="btn btn-primary" onClick={openModal} id={e.id}>
// //    Know more
// //  </button>
// //      </div>
// //      </div>
      
// //       )
//     // })
//     // settext(detailSearch);
//  }

  





  
    const price1 = () =>{
       let detail2 = list.map((e)=>{
        if(e.Salary <= "3000"){
           return( <div className="card gap" key={e.id}>
          <h2 className="card-header">{e.Name}</h2>
          <br/>
          <p className="card-text">{e.Description}</p>
          <div className="card-body">
            <h5 className="card-title">Month: {e.Month}</h5>
            <h5 className="card-title">Salary: {e.Salary}INR</h5>
            <button type="button" className="btn btn-primary" onClick={openModal}>
  Know more
</button>
          </div>
          </div>)
          
        }else{}
            })
            settext(detail2);
          
    }
    const price2 = () =>{
      let detail3 = list.map((e)=>{
       if(e.Salary <= "6000" && e.Salary >= "4000"){
          return( <div className="card gap" key={e.id}>
         <h2 className="card-header">{e.Name}</h2>
         <br/>
         <p className="card-text">{e.Description}</p>
         <div className="card-body">
           <h5 className="card-title">Month: {e.Month}</h5>
           <h5 className="card-title">Salary: {e.Salary}INR</h5>
           <button type="button" className="btn btn-primary" onClick={openModal}>
  Know more
</button>
         </div>
         </div>)
         
       }else{}
           })
           settext(detail3);
         
   }
   const price3 = () =>{
    let detail3 = list.map((e)=>{
      console.log("sdgsfdg")
     if(e.Salary <= "10000" && e.Salary >= "7000"){
        return( <div className="card gap" key={e.id}>
       <h2 className="card-header">{e.Name}</h2>
       <br/>
       <p className="card-text">{e.Description}</p>
       <div className="card-body">
         <h5 className="card-title">Month: {e.Month}</h5>
         <h5 className="card-title">Salary: {e.Salary} INR</h5>
         <button type="button" className="btn btn-primary" onClick={openModal}>
  Know more
</button>
       </div>
       </div>)
       
     }else{}
         })
         settext(detail3);
       
  }
    
    
  // salry code end

  // month code start
  
    const month1 = () =>{
       let detail2 = list.map((e)=>{
        if(e.Month <= "1"){
           return( <div className="card gap" key={e.id}>
          <h2 className="card-header">{e.Name}</h2>
          <br/>
          <p className="card-text">{e.Description}</p>
          <div className="card-body">
            <h5 className="card-title">Month: {e.Month}</h5>
            <h5 className="card-title">Salary: {e.Salary}INR</h5>
            <button type="button" className="btn btn-primary" onClick={openModal}>
  Know more
</button>
          </div>
          </div>)
          
        }else{}
            })
            settext(detail2);
          
    }
    const month2 = () =>{
      let detail3 = list.map((e)=>{
       if(e.Month <= "3" && e.Month >= "2"){
          return( <div className="card gap" key={e.id}>
         <h2 className="card-header">{e.Name}</h2>
         <br/>
         <p className="card-text">{e.Description}</p>
         <div className="card-body">
           <h5 className="card-title">Month: {e.Month}</h5>
           <h5 className="card-title">Salary: {e.Salary}INR</h5>
           <button type="button" className="btn btn-primary" onClick={openModal}>
  Know more
</button>
         </div>
         </div>)
         
       }else{}
           })
           settext(detail3);
         
   }
   const month3 = () =>{
    let detail3 = list.map((e)=>{
      console.log("sdgsfdg")
     if(e.Month <= "5" && e.Month >= "4"){
        return( <div className="card gap" key={e.id}>
       <h2 className="card-header">{e.Name}</h2>
       <br/>
       <p className="card-text">{e.Description}</p>
       <div className="card-body">
         <h5 className="card-title">Month: {e.Month}</h5>
         <h5 className="card-title">Salary: {e.Salary} INR</h5>
         <button type="button" className="btn btn-primary" onClick={openModal}>
  Know more
</button>
       </div>
       </div>)
       
     }else{}
         })
         settext(detail3);
       
  }
    
    
  // month code end

  return (
    <>
  <div className="home" style= {homi} >
    <div className="">  
<div className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Sort Salary
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li onClick={price1} className="dropdown-item" href="/">1000 - 3000 INR</li>
            <li onClick={price2} className="dropdown-item" href="/">4000 -  6000 INR</li>
            <li onClick= {price3} className="dropdown-item" href="/">7000 - 10000 INR</li>
          </ul>
 </div>

 <div className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Sort Month
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li onClick={month1} className="dropdown-item" href="/">0 - 1</li>
            <li onClick={month2} className="dropdown-item" href="/">2 - 3</li>
            <li onClick= {month3} className="dropdown-item" href="/">4 - 5</li>
          </ul>
 </div>
 <form className="d-flex">
        {/* <input className="form-control me-2" onChange={handleFilter} id = "myInput" type="search" placeholder="Search" aria-label="Search"/> */}
      </form>
        </div>
      <section>
      {text}
      </section>
     
</div>


  <section className="moda" style= {display}>
  <div className="mod" id="myModal" >
<div className="modal-dialog">
<div className="modal-content">
<div className="modal-header">
  <h4 className="modal-title">Modal Heading</h4>
  <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
</div>
<div className="modal-body">
  Modal body..
</div>
<div className="modal-footer">
  <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={closeModal}>Close</button>
</div>

</div>
</div>
</div>
  </section>
  </>);
  }