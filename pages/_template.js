import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import ToggleSearch from 'components/ToggleSearch'
import ToggleMenu from 'components/ToggleMenu'
import Menu from 'components/Menu'
import '../css/header.scss'
import '../css/button.scss'

class Template extends React.Component {

  componentWillUpdate() {
    var closeTimeline = this.refs.menu.closeMenu();
  }

  render () {
    const { location, children } = this.props

    return (
    <div>
      <main>
        <header className="site-header">
          <div className="grid">
            <ToggleSearch />
            <ToggleMenu ref='menu' pages={this.props.route.pages} />
          </div>
        </header>
        <ReactCSSTransitionGroup
            component="section"
            transitionName="fade"
            transitionEnterTimeout={1200}
            transitionLeaveTimeout={800}
            transitionAppear={true}
            transitionAppearTimeout={1200}
            >
            {React.cloneElement(children, {key: location.pathname})}
        </ReactCSSTransitionGroup>
      </main>
    </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.any,
  location: React.PropTypes.object,
  route: React.PropTypes.object
}

export default Template
