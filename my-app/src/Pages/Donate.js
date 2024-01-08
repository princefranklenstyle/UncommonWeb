import React from 'react'
import PazDonateTODAY from '../components/PazDonateTODAY'
import PazMorepages from '../components/PazMorepages'
import PazFooter from '../components/PazFooter'
import PazBluesec from '../components/PazBluesec'
import PazHeader from '../components/PazHeader'
import PazForm from '../components/PazForm'
// import PazKuda from './PazKuda'

function PazAllrounder() {
  return (
    <div>
      {/* <PazKuda/> */}
       <PazHeader/>  
      <PazDonateTODAY/>
      <PazMorepages/>
      <PazForm/>
      <PazBluesec/>
      <PazFooter/> 
    </div>
  )
}

export default PazAllrounder
