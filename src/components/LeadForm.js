import React, { useState } from 'react'
import axios from 'axios';

const url = 'https://u5d6gnw6aj.execute-api.us-east-1.amazonaws.com/api/data';

const initialState = {
  fname: '',
  cname: '',
  phone: '',
  email: '',
  termsChecked: false
}

export const LeadForm = () => {

  const [formValues, setFormValues] = useState(initialState);
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    let errorCount = 0; 
    for (const [key, value] of Object.entries(formValues)) {
      if (!value) {
        setError(`missing field ${key}`);
        errorCount++;
      }
      console.log(`${key}: ${value}`);
    }
    if(errorCount === 0) {
      setError('');
      const body = {
        name: formValues.fname,
        company_name: formValues.cname,
        email: formValues.email,
        phone: formValues.phone
      }
      // do network request
      const config = {
        headers: {
          'x-api-key': 'VXUsgQ2jsq3EM30icjHA91tETkqFwtXDak07xebM',
          'Content-Type': 'application/json'
        }
      }
      axios.post(url, JSON.stringify(body), config)
      .then((result) => {
        debugger;
        console.log(result.data);
        // Do somthing
      })
      .catch((err) => {
        // Do somthing
      })
    }
  }

  const handleChange = (e) => {
    setFormValues({...formValues, [e.target.name]: e.target.value })
    console.log(e.target);
    console.log(e.target.name);
  }

  return (
    <div className="LeadForm-rectangle">
      <div className="LeadForm-title">
        Want to get the full version?
      </div>
      <div className="LeadForm-title2">
        Fill in the form below:
      </div>
      <form onSubmit={handleSubmit}>
        <label className="LeadForm-label" htmlFor="fname">
          Full Name
        </label>
        <input className="LeadForm-input"  type="text" id="fname" name="fname" value={formValues.fname} onChange={handleChange} />
        <label className="LeadForm-label2" htmlFor="cname">
          Company name
        </label>
        <input className="LeadForm-input2"  type="text" id="cname" name="cname" value={formValues.cname} onChange={handleChange}  />
        <label className="LeadForm-label3" htmlFor="phone">
          Phone
        </label>
        <input className="LeadForm-input3"  type="numbers" id="phone" name="phone" value={formValues.phone} onChange={handleChange}  />
        <label className="LeadForm-label4" htmlFor="email">
          Work email
        </label>
        <input className="LeadForm-input4"  type="email" id="email" name="email" value={formValues.email} onChange={handleChange}  />
        <div className="error">
          {error}
        </div>
        <div className="LeadFomrm-download">
          <button type="submit" className="LeadFomrm-download-text">
            Download now >>
          </button>
        </div>
        <label className="checkmark">
            {/* Twoww */}
            <span className="checkbox-text">
              I agree to the privacy policy including for Joonko to use my contact details to contact me for marketing purposes
            </span>
          <input type="checkbox" name="termsChecked" value={formValues.termsChecked} onChange={handleChange} />
        </label>
      </form>
    </div>
  )
}
