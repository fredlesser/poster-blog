import React from 'react'
import { Link } from 'react-router'
import { Container } from 'react-responsive-grid'
import { prefixLink } from 'gatsby-helpers'
import { rhythm, scale } from 'utils/typography'
import { config } from 'config'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import TogglePanel from 'components/TogglePanel'

class Template extends React.Component {

  componentWillUpdate() {
    var closeTimeline = this.refs.foo.closePanel();
  }
  render () {
    const { location, children } = this.props

    return (
    <main className="main">
      <ReactCSSTransitionGroup
          component="div"
          transitionName="fade"
          transitionEnterTimeout={1200}
          transitionLeaveTimeout={800}
          transitionAppear={true}
          transitionAppearTimeout={1200}
          >
      {React.cloneElement(children, {key: location.pathname})}
      </ReactCSSTransitionGroup>
      <TogglePanel ref='foo' pages={this.props.route.pages} />
    </main>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.any,
  location: React.PropTypes.object,
  route: React.PropTypes.object
}

export default Template
