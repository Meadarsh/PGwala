import React from 'react'
import './login.css'

const login = () => {
  return (
    <div>
        <div class="form-box">
<form class="form">
    <span class="title">Sign in</span>
    <div class="form-container">
			<input type="email" class="input" placeholder="Email"/>
			<input type="password" class="input" placeholder="Password"/>
    </div>
    <button>Sign up</button>
</form>
</div>
    </div>
  )
}

export default login