import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.scss';
//import {settings} from '../../data/dataStore';


class Card extends React.Component {
  /* Define props types */
  static propTypes = {
    title: PropTypes.string.isRequired,
  }

  render() {
    //const {title} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{this.props.title}</h3>
      </section>
    );
  }
}

export default Card;
