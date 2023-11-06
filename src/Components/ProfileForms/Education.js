// school name
// start date
// end date
// cgpa
// location
// branch/board

import React from 'react'

function Education() {
  return (
    <div>
        <div>
            Education
        </div>
        <div>
            <div>
                <span>School/collage Name</span>
                <input type='text'/>
            </div>
            <div>
                <span>School/collage started</span>
                <input type='text'/>
            </div>
            <div>
                <span>School/collage ended</span>
                <input type='text'/>
            </div>
            <div>
               
               <input type='checkbox'/>
           </div>
            <div>
                <span>School/collage CGPA</span>
                <input type='text'/>
            </div>
            <div>
                <span>School/collage Location</span>
                <input type='text'/>
            </div>
            <div>
                <span>School/collage branch</span>
                <input type='text'/>
            </div>

        </div>
    </div>
  )
}

export default Education