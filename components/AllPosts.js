import React from 'react'
import { Link } from 'react-router'
import sortBy from 'lodash/sortBy'
import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access'
import include from 'underscore.string/include'
import moment from 'moment'
import Tags from 'components/Tags'
import Summary from 'components/Summary'

import '../css/all-posts.scss'
import '../css/index.scss'

class AllPosts extends React.Component {
  render (props) {
    const allPosts = []
    // Sort pages.
    const sortedPages = sortBy(this.props.pages, (page) => access(page, 'data.date')
    ).reverse()
    sortedPages.forEach((page) => {
      if (access(page, 'file.ext') === 'md' && !include(page.path, '/404')) {
        const title = access(page, 'data.title') || page.path
        const bgStyle = {
        backgroundImage: 'url(' + page.path + page.data.thumb + ')',
        };
        allPosts.push(
          <li key={page.path}>
          <div className="article__thumbnail" style={bgStyle}/>
          <div className="article-index__date">
            {moment(page.data.date).calendar()}
          </div>
          <div className="article-index__text">
            <h3 className="article-index__title">
              <Link to={prefixLink(page.path)}>
              {title}
              </Link>
            </h3>
            {/*<Summary body={page.data.body} />*/}
          </div>
          </li>
        )
      }
    })
    return (
      <ul className="all-posts">
        {allPosts}
      </ul>
    )
  }
}

AllPosts.propTypes = {
  route: React.PropTypes.object
}

export default AllPosts
