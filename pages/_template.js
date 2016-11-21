import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import TogglePanel from 'components/TogglePanel'
import Header from 'components/Header'
import Menu from 'components/Menu'

class Template extends React.Component {

  render () {
    const { location, children } = this.props

    return (
    <main className="main">
      <Menu pages={this.props.route.pages} />
      <Header />
      <ReactCSSTransitionGroup
          component="section"
          transitionName="fade"
          transitionEnterTimeout={1200}
          transitionLeaveTimeout={800}
          transitionAppear={true}
          transitionAppearTimeout={1200}
          >
        <section className="content">
          {React.cloneElement(children, {key: location.pathname})}
        </section>
      </ReactCSSTransitionGroup>
      <TogglePanel />
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
