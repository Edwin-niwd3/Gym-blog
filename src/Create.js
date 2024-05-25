import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import ReactDatePicker, { getDefaultLocale } from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


const Create = () => {
  
  const [SelectedDate, setSelectedDate] = useState(new Date());
  const [body, setBody] = useState('');
  const [Victim, setVictim] = useState('Erick');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const blog = {SelectedDate, body, Victim};

    setIsPending(true);

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: {"Content-Type":"application/jason"},
      body: JSON.stringify(blog)
    }).then(()=> {
      console.log("New blog added");
      setIsPending(false);
      history.push('/')
    })
  }

  return ( 
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit = {handleSubmit}>
        <label>Victim</label>
        <select
        value = {Victim}
        onChange = {(e) => setVictim(e.target.value)}
        >
          <option value="Erick">Erick</option>
          <option value="Edwin">Edwin</option>
          <option value="Joaquin">Joaquin</option>
        </select>
        <label>Date Done</label>
        <div className="customDatePickerWidth">
          <ReactDatePicker 
        wrapperClassName = "datepicker"
        dateFormat = "dd/MM/yyyy"
        selected = {SelectedDate} 
        onChange = {(date) => setSelectedDate(date)}
        />
        </div>
        
        <label>Workouts Done:</label>
        <textarea
        required
        value = {body}
        onChange= {(e) => setBody(e.target.value)}
        >
        </textarea>

        {!isPending && <button>Add blog</button>}
        {isPending && <button disabled>Adding blog...</button>}
        
      </form>
    </div>
   );
}
 
export default Create;