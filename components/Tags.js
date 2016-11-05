import React from 'react'
import {Link} from 'react-router'
import {tagMap} from 'utils'
import { prefixLink } from 'gatsby-helpers'

const Tags = props => {
  const { post, ...rest } = props
  return (
    <span className="Tags" {...rest}>
      {(props.post.tags || []).map((tag, i) => {
         return [i !== 0 ? ' | ' : null,
           <Link key={i} to={{pathname:prefixLink('/tags/'), hash: '#'+tagMap(tag)}}>
             {tag}
           </Link>]
       })}
    </span>
  )
}

export default Tags
