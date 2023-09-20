import React from 'react'
import './Member.css'

const Member = () => {
    return (
      <div className="container">
        <div className="member-container">
          <h1>Become a Member</h1>
          <p>Fill out the form to become a member...</p>
            <form className="member-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" required />
                </div>
                <div className="form-group">
                <label htmlFor="name">Password</label>
                    <input type="text" id="password" name="password" required />
                </div>
                <button type="submit" className="submit-btn">Sign up</button>
            </form>
        </div>
</div>
    )
}

export default Member
