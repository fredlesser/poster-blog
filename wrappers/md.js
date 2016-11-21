import React from 'react'
import moment from 'moment'
import DocumentTitle from 'react-document-title'
import { fixLinks } from 'utils'
import { prefixLink } from 'gatsby-helpers'
import Bio from 'components/Bio'
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
        <section className="article__main">
          <aside className="article__title">
            <h1>{post.title}</h1>
          </aside>
          <div className="article__body">
            <p className="article__intro">{post.intro}</p>
          </div>
        </section>

        {!post.hero ? null : <figure className="article__hero" style={bgStyle}></figure>}
        <section className="article__main">
          <aside className="article__meta">
            <h6><span>Tags:</span><Tags post={post} /></h6>
            {!post.date ? null : <h6>
                                   {`${moment(post.date).format('ll')}`}
                                 </h6>}
            <Bio />
          </aside>
          <div className="article__body">
            <div className="markdown" ref="markdown" dangerouslySetInnerHTML={{__html: post.body}} />
          </div>
        </section>

        <footer className="article__footer">
         {/*<ReadNext post={post} pages={route.pages} />*/}
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
