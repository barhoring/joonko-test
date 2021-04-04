import React from 'react'

export const LeadForm = () => {
  return (
    <div className="LeadForm-rectangle">
      <div className="LeadForm-title">
        Want to get the full version?
      </div>
      <div className="LeadForm-title2">
        Fill in the form below:
      </div>
      <form>
        <label className="LeadForm-label" for="fname">
          Full Name
        </label>
        <input className="LeadForm-input"  type="text" id="fname" name="fname" />
        <label className="LeadForm-label2" for="fname">
          Company name
        </label>
        <input className="LeadForm-input2"  type="text" id="fname" name="fname" />
        <label className="LeadForm-label3" for="fname">
          Phone
        </label>
        <input className="LeadForm-input3"  type="text" id="fname" name="fname" />
        <label className="LeadForm-label4" for="fname">
          Work email
        </label>
        <input className="LeadForm-input4"  type="text" id="fname" name="fname" />
      </form>
      <div className="LeadFomrm-download">
        <span className="LeadFomrm-download-text">
          Download now >>
        </span>
      </div>
      <label class="checkmark">
          {/* Twoww */}
          <span className="checkbox-text">
            I agree to the privacy policy including for Joonko to use my contact details to contact me for marketing purposes
          </span>
        <input type="checkbox" />
      </label>
    </div>
  )
}
