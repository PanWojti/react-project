import React from 'react';
import PropTypes from 'prop-types';
import styles from './Column.scss';


class Column extends React.Component {
  /* Define props types */
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node
  }

  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{this.props.title}</h3>
      </section>
    )
  }
}

export default Column;
