import React from 'react'
import moment from 'moment'
import DocumentTitle from 'react-document-title'
import { fixLinks } from 'utils'
import Disqus from 'components/Disqus'
import Komments from 'components/Komments'
import { prefixLink } from 'gatsby-helpers'

import ReadNext from 'components/ReadNext'
import Bio from 'components/Bio'
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
    <section className="article">
      <div className="markdown">
        <header className="article__title">
          <h1>{post.title}</h1>
        </header>
        {!post.hero ? null : <figure className="article__hero" style={bgStyle}></figure>}
        <section className="article__main">
          <aside className="article__sidebar">
            <div className="article__meta">
              {!post.date ? null : <h2>
                                     {`${moment(post.date).format('ll')}`}
                                   </h2>}
              <h4><Tags post={post} /></h4>
              {/*<Bio />*/}
            </div>
          </aside>
            <div className="article__body" ref="markdown" dangerouslySetInnerHTML={{__html: post.body}} />
        </section>
        <footer className="article__footer">
          <ReadNext post={post} pages={route.pages} />
        </footer>

        {config.disqusShortname ? <Disqus
                                    shortname={config.disqusShortname}
                                    title={post.title}
                                    identifier={route.page.path}
                                    url={`${config.blogUrl}${prefixLink(route.page.path)}`} /> : null}
        {config.kommentsCode ? <Komments code={config.kommentsCode} /> : null}
      </div>
      </section>
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
