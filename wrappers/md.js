import React from 'react'
import moment from 'moment'
import DocumentTitle from 'react-document-title'
import { fixLinks } from 'utils'
import { prefixLink } from 'gatsby-helpers'
import Bio from 'components/Bio'
import Tags from 'components/Tags'
import { config } from 'config'
import { rhythm } from 'utils/typography'
import AllPosts from 'components/AllPosts'

import 'css/main.scss'
import 'css/article.scss'
import 'css/footer.scss'

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
          <div className="grid">
            <Bio />
            <aside className="article__meta">
              {!post.date ? null : <date>
                                     {`${moment(post.date).format('ll')}`}
                                   </date>}
              <em>Tags: </em><Tags post={post} />
            </aside>
          </div>
        </header>
        <section className="article__title">
          <div className="grid">
            <h1>{post.title}</h1>
            <p className="article__leader">{post.intro}</p>
          </div>
        </section>
        <section className="article__hero">
          {!post.hero ? null : <figure style={bgStyle}>
            <div className="grid">
              {!post.caption ? null : <figcaption>{post.caption}</figcaption>}
            </div>
          </figure>}
        </section>

        <section className="article__main">
          <div className="grid">
            <h2 className="article__subtitle">{post.subtitle}</h2>
            <div className="markdown" ref="markdown" dangerouslySetInnerHTML={{__html: post.body}} />
          </div>
        </section>
        <footer className="site__footer">
          <div className="grid">
            <AllPosts pages={this.props.route.pages} />
          </div>
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
