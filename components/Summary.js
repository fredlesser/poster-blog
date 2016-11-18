import React from 'react'
import { prune } from 'underscore.string'
import { fixLinks } from 'utils'

class Summary extends React.Component {
  summary (body) {
    const split = body.split('<hr>')
    return split.length !== 0 && split[0].length < 200 ? split[0] : prune(body.replace(/<[^>]*>/g, ''), 200)
  }

  componentDidMount () {
    fixLinks(this.refs.markdown, this.context.router)
  }

  render () {
    return (<div className="article__summary" ref="markdown" dangerouslySetInnerHTML={{__html: this.summary(this.props.body)}} />)
  }
}

Summary.propTypes = {
  body: React.PropTypes.string.isRequired
}

Summary.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default Summary
