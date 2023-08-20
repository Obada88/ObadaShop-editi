import React ,{useReducer} from 'react'
import "./Contact.css"
export default function Contact() {

  const initialState ={
    username:"",
    email:"",
    notes:"",
  }
  
  const reducer = (state,action) =>{
    switch(action.type){
      case "input" :
        return {...state,[action.field]:action.value};
        case "rest" :
          return initialState;
          default:
            return state;
    }
  }

  const handelChange= (e)=>{
   dispatch({
    type:"input",
    field:e.target.name,
    value:e.target.value,
   })

  }

    


  const handeSubmit= (e)=>{
      e.preventDefault()
      console.log(state)
      return state;
  }
  const[state,dispatch] = useReducer(reducer,initialState);
  return (
    <div className='Contact '>
      <div className="title-contact shadow fs-5">للاستفسار عن شيء ما</div>
      <div className="container    mt-5">
      <form action="" onSubmit={handeSubmit}>
        <input type="text" name='username' placeholder='الاسم....' className=' shadow' value={state.username} onChange={handelChange} />
        <input type="text" name='email' placeholder='الايميل....'  className=' shadow' value={state.email} onChange={handelChange} />

        <div className="form-floating">
  <textarea className="form-control shadow " name='notes' placeholder="Leave a comment here" cols="80" style={{height:"150px"}} value={state.notes} onChange={handelChange}></textarea>
</div>
        
     <button className='btn btn-contatc w-25 shadow fs-5'>ارسال الرسالة</button>
      </form>

     
</div>
      </div>
    
  )
}
