import React from 'react';
import '../css/menu.scss'
import PageLinks from 'components/PageLinks'

const Menu = (props) => {
  return (
    <section className="menu">
      <h1>index</h1>
      <PageLinks pages={props.pages} />
    </section>
  )
}
export default Menu;
