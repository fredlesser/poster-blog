import React from 'react'
import { config } from 'config'
import { prefixLink } from 'gatsby-helpers'

import '../css/bio.scss'


const Bio = props => (
  <div className="bio">
    <img src={prefixLink('/author.png')} alt={config.authorName} /><span dangerouslySetInnerHTML={{__html: config.authorBio}} />
  </div>
)

export default Bio
