import React from 'react'
import moment from 'moment'
import DocumentTitle from 'react-document-title'
import { fixLinks } from 'utils'
import Disqus from 'components/Disqus'
import Komments from 'components/Komments'
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

    return (
    <DocumentTitle title={post.title ? `${post.title} | ${config.blogTitle}` : config.blogTitle}>
    <section className="article">
      <div className="markdown">
        <h1>{post.title}</h1>
        {!post.date ? null : <div>
                               {`Posted ${moment(post.date).calendar().toLowerCase()}`}
                             </div>}
        <Tags post={post} />
        <div className="article" ref="markdown" dangerouslySetInnerHTML={{__html: post.body}} />

        <ReadNext post={post} pages={route.pages} />

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
