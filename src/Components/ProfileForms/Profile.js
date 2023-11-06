import React from 'react'

function Profile() {
  return (
    <div>
        <div>
        Profile details
        </div>
        <div>
            <div>
                <span>Profile photo</span>
                <input type='file'/>
                <span>+</span>
            </div>
            <div>
                <span>Full name</span>
                <input type='text'/>
            </div>
            <div>
                <span>Phone Number</span>
                <input type='tel'/>
            </div>
            <div>
                <span>Email</span>
                <input type='email'/>
            </div>
            <div>
                <span>About me</span>
                <input type='text'/>
            </div>
            <div>
                <span>linkedIn</span>
                <input type='link'/>
            </div>
            <div>
                <span>Github</span>
                <input type='link'/>
            </div>
        </div>
    </div>
  )
}

export default Profile

// photo -string
// fullname -string
//admin -boolean
// phonenumber -string
// email -string
// about me -string
// personel links
// linkedin
// github