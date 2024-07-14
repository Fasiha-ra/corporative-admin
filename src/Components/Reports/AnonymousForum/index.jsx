import React from 'react'
import Table from '../../Table'
import {AnonymousCol, AnonymousData} from "../ReportData"
const AnonymousForum = () => {
  return (
    <div className='wrapper'>
        <strong className="title">Anonymous Forum</strong>
        <Table columns={AnonymousCol} data={AnonymousData}  border={true} />
    </div>
  )
}

export default AnonymousForum