import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import TogglePanel from 'components/TogglePanel'
// import Header from 'components/Header'
import Menu from 'components/Menu'
import '../css/header.scss'
import '../css/button.scss'

class Template extends React.Component {
  constructor() {
  super();
  this.state = {
    showMenu: false
    }
  }
  toggleMenu(){
    this.setState({showMenu: !this.state.showMenu})
  }
  buttonMenuClass(){
    return 'button button--menu '+((!this.state.showMenu) ?'menu-closed':'menu-open');
  }
  mainClass(){
    return 'main '+((!this.state.showMenu) ?'menu-closed':'menu-open');
  }

  render () {
    const { location, children } = this.props

    return (
    <main className={this.mainClass('')}>
      {this.state.showMenu && <Menu pages={this.props.route.pages} />}
      <header className="site-header">
        <a className={this.buttonMenuClass('')} onClick={this.toggleMenu.bind(this)}></a>
      </header>
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
