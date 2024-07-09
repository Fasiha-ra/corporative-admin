import React from 'react'
import { ChangePassWrap } from './ChangPass.styles'
import TextField from '../../TextField/TextField'

const ChangePassword = () => {
  return (
    <ChangePassWrap>
        <span className="h3">Change Password</span>
        <span className="h3">Create a new password</span>
        <TextField
              parentClass="passwordWrapper"
              className="input-field"
              field_Name="password"
              type="password"
              label="Current password"
            //   value={emailInput}
            //   onChange={handleInputChange}
              bgClr="rgba(255, 255, 255, 0.37)"
            />
            <TextField
              parentClass="passwordWrapper"
              className="input-field"
              field_Name="password"
              type="password"
              label="New password"
            //   value={emailInput}
            //   onChange={handleInputChange}
              bgClr="rgba(255, 255, 255, 0.37)"
            />
            <TextField
              parentClass="passwordWrapper"
              className="input-field"
              field_Name="password"
              type="password"
              label="Retype new password"
            //   value={emailInput}
            //   onChange={handleInputChange}
              bgClr="rgba(255, 255, 255, 0.37)"
            />
            <span className="forgot">Forgot Password ?</span>
    </ChangePassWrap>
  )
}

export default ChangePassword