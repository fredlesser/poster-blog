import React from 'react'
import moment from 'moment'
import DocumentTitle from 'react-document-title'
import { fixLinks } from 'utils'
import { prefixLink } from 'gatsby-helpers'

import ReadNext from 'components/ReadNext'
import Tags from 'components/Tags'
import { rhythm } from 'utils/typography'
import { config } from 'config'


import 'css/main.scss'
import 'css/article.scss'

class MarkdownWrapper extends React.Component {
  componentDidMount () {
    fixLinks(this.refs.markdown, this.context.router)
  }

  render () {
    const { route } = this.props
    const post = route.page.data
    const bgStyle = {
    backgroundImage: 'url(' + post.hero + ')',
    };

    return (
    <DocumentTitle title={post.title ? `${post.title} | ${config.blogTitle}` : config.blogTitle}>
      <div className="article">
        <header className="article__header">
          {!post.hero ? null : <figure className="article__hero" style={bgStyle}></figure>}
          <div className="article__intro">
            <h1>{post.title}</h1>
            <p>{post.intro}</p>
          </div>

        </header>

        <section className="article__body">
          <aside className="article__meta">
            {!post.date ? null : <h2>
                                   {`${moment(post.date).format('ll')}`}
                                 </h2>}
          </aside>
          <div className="markdown" ref="markdown" dangerouslySetInnerHTML={{__html: post.body}} />
        </section>

        <footer className="article__footer">
         <h6><Tags post={post} /></h6>
         <ReadNext post={post} pages={route.pages} />
        </footer>
      </div>
    </DocumentTitle>
    )
  }
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object
}

MarkdownWrapper.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default MarkdownWrapper
