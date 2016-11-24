import React from 'react';
import Search from './Search'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import '../css/toggle-panel.scss'
import '../css/button.scss'


class TogglePanel extends React.Component {
  constructor() {
  super();
  this.state = {
    showPanel: false
    }
  }
  togglePanel(){
    this.setState({showPanel: !this.state.showPanel})
  }

  closePanel() {
    this.setState({showPanel: false})
  }

  isOpen(){
    return 'button button--toggle-panel '+((!this.state.showPanel) ?'closed':'open');
  }

  render(props) {
    return (
      <div className="toggle-panel">
        <a className={this.isOpen('')} onClick={this.togglePanel.bind(this)}></a>
        <ReactCSSTransitionGroup
          transitionName="slide"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {this.state.showPanel && <Search />}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

export default TogglePanel;
