// project name
// project description
// start date
// end date
// tech stack
// demo link
// repo link
import React from 'react'

function Projects() {
  return (
    <div>
        <div>
            Projects
        </div>
        <div>
            <div>
                <span>Project Name</span>
                <input type='text'/>
            </div>
            <div>
                <span>Project Description</span>
                <textarea></textarea>
            </div>
            <div>
                <span>Project start date</span>
                <input type='date'/>
            </div>
            <div>
                <span>Project end date</span>
                <input type='date'/>
            </div>
            <div>
                
                <input type='checkbox'/>
            </div>
            <div>
                <span>Project tech stack</span>
                <input type='text'/>
            </div>
            <div>
                <span>Project demo link</span>
                <input type='link'/>
            </div>
            <div>
                <span>Project repo link</span>
                <input type='link'/>
            </div>
        </div>
    </div>
  )
}

export default Projects