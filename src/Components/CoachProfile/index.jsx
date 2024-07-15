import React from 'react'
import { CoachWrap } from './Caoch.styles'
import SearchBar from '../TextField/SearchBar'
import Profile from './profile'

const CoachProfile = () => {
  return (
    <CoachWrap>
        <div className="searchbar">
            <SearchBar/>
        </div>
        <div className="profile">
            <Profile/>
        </div>
    </CoachWrap>
  )
}

export default CoachProfile