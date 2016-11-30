import React from 'react';
import Menu from './Menu'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import '../css/toggle-menu.scss'
import '../css/button.scss'


class ToggleMenu extends React.Component {
  constructor() {
  super();
  this.state = {
    showMenu: false
    }
  }
  toggleMenu(){
    this.setState({showMenu: !this.state.showMenu})
  }

  closeMenu() {
    this.setState({showMenu: false})
  }

  isOpen(){
    return 'button button--toggle-menu '+((!this.state.showMenu) ?'menu-closed':'menu-open');
  }

  render(props) {
    return (
      <div className="toggle-menu">
        <a className={this.isOpen('')} onClick={this.toggleMenu.bind(this)}></a>
        <ReactCSSTransitionGroup
          transitionName="fade"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {this.state.showMenu && <Menu pages={this.props.pages} />}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

export default ToggleMenu;
