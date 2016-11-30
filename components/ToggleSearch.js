import React from 'react';
import Search from './Search'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import '../css/toggle-search.scss'
import '../css/button.scss'


class ToggleSearch extends React.Component {
  constructor() {
  super();
  this.state = {
    showSearch: false
    }
  }
  toggleSearch(){
    this.setState({showSearch: !this.state.showSearch})
  }

  closePanel() {
    this.setState({showSearch: false})
  }

  isOpen(){
    return 'button button--toggle-search '+((!this.state.showSearch) ?'search-closed':'search-open');
  }

  render(props) {
    return (
      <div className="toggle-search">
        <a className={this.isOpen('')} onClick={this.toggleSearch.bind(this)}></a>
        <ReactCSSTransitionGroup
          transitionName="fade"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {this.state.showSearch && <Search />}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

export default ToggleSearch;
