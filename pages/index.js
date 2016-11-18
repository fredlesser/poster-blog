import React from 'react'
import { Link } from 'react-router'
import sortBy from 'lodash/sortBy'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access'
import { config } from 'config'
import include from 'underscore.string/include'
import Summary from 'components/Summary'
import moment from 'moment'

import '../css/article.scss'


class BlogIndex extends React.Component {
  render () {
    const pageLinks = []

    // Sort pages.
    const sortedPages = sortBy(this.props.route.pages, (page) => access(page, 'data.date')
    ).reverse()
    sortedPages.forEach((page) => {
      if (access(page, 'file.ext') === 'md' && !include(page.path, '/404')) {

        const title = access(page, 'data.title') || page.path
        const bgStyle = {
        backgroundImage: 'url(' + page.path + page.data.thumb + ')',
        };
        pageLinks.push(
          <li key={page.path}>
            <h2>
              <Link to={prefixLink(page.path)}>
              {title}
              </Link>
            </h2>
            <div className="article__thumbnail" style={bgStyle}/>
            <div>
              {moment(page.data.date).calendar()}
            </div>
            <Summary body={page.data.body} />
          </li>
        )
      }
    })

    return (
    <DocumentTitle title={config.blogTitle}>
      <div className="article">
        <ul className="article__index">
          {pageLinks}
        </ul>
      </div>
    </DocumentTitle>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object
}

export default BlogIndex
