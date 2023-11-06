// company name
// company description
// start and end date
// role
// location
// role description

import React from 'react'

function WorkStatus() {
  return (
    <div>
        <div>Work status</div>
        <div>
            <div>
                <span>Company Name</span>
                <input type='text'/>
            </div>
            <div>
                <span>role</span>
                <input type='text'/>
            </div>
            <div>
                <span>Company Description</span>
                <textarea></textarea>
            </div>
            <div>
                <span>Company start date</span>
                <input type='date'/>
            </div>
            <div>
                <span>Company end date</span>
                <input type='date'/>
            </div>
            <div>
               
                <input type='checkbox'/>
            </div>
            <div>
                <span>Company link</span>
                <input type='link'/>
            </div>
            <div>
                <span>Company location</span>
                <input type='text'/>
            </div>
        </div>
    </div>
  )
}

export default WorkStatus