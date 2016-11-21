import React from 'react';
import '../css/menu.scss'
import PageLinks from 'components/PageLinks'

const Menu = (props) => {
  return (
    <section className="menu">
      <PageLinks pages={props.pages} />
    </section>
  )
}
export default Menu;
