import React from 'react';
import '../css/panel.scss'
import PageLinks from 'components/PageLinks'



const Panel = (props) => {


  return (
    <section className="panel">
      <PageLinks pages={props.pages} />
    </section>
  )
}

export default Panel;
