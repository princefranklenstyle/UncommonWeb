import React from 'react'

import PagesHero from '../components/PagesHero'
// import PagesHeader from './PagesHeader'
import PagesOurExpertise from '../components/PagesOurExpertise'
import PagesRecentWork from '../components/PagesRecentWork'
import PagesSectionBlueFirst from '../components/PagesSectionBlueFirst'
import PagesFOOTER from '../components/PagesFOOTER'
import PagesBlueSECTIONtwo from '../components/PagesBlueSECTIONtwo'
import Pagestogether from '../components/Pagestogether'
function HireUs() {
  return (
    <div>
      {/* <PagesHeader/> */}
    <PagesHero/>
    <PagesSectionBlueFirst/>
    <PagesOurExpertise/>
    <PagesRecentWork/>
<PagesBlueSECTIONtwo/>
<Pagestogether/>
<PagesFOOTER/>
    </div>
  )
}

export default HireUs
