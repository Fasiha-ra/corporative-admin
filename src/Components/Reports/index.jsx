import React from 'react'
import { ReportWrap } from './Reporst.styles'
import ReportsHeader from './ReportsHeader'
import SessionAnalysis from './SessionAnalysis'

const Reports = () => {
  return (
    <ReportWrap>
        <div className="header">
            <ReportsHeader/>
            <SessionAnalysis/>
        </div>
    </ReportWrap>
  )
}

export default Reports