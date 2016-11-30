import React from 'react'
import { Link } from 'react-router'
import sortBy from 'lodash/sortBy'
import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access'
import include from 'underscore.string/include'
import moment from 'moment'
import Tags from 'components/Tags'

import '../css/page-links.scss'

class PageLinks extends React.Component {
  render (props) {
    const pageLinks = []
    // Sort pages.
    const sortedPages = sortBy(this.props.pages, (page) => access(page, 'data.date')
    ).reverse()
    sortedPages.forEach((page) => {
      if (access(page, 'file.ext') === 'md' && !include(page.path, '/404')) {
        const title = access(page, 'data.title') || page.path
        pageLinks.push(
          <li key={page.path}>
            <span className="date">
              {moment(page.data.date).format('YYYY')}
            </span>
            <span className="chevron">
              >
            </span>
            <Link to={prefixLink(page.path)}>
            {title}
            </Link>
            {/*<Tags post={page.data} />*/}
          </li>
        )
      }
    })
    return (
      <ul className="page-links">
        {pageLinks}
      </ul>
    )
  }
}

PageLinks.propTypes = {
  route: React.PropTypes.object
}

export default PageLinks
