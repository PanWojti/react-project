import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchResults.scss';
import Card from '../Card/Card.js';


class SearchResults extends React.Component {

  /* Define props types */
  static propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.array,
  }

  render() {
    const {cards, title} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={title}>
          {this.props.title}
        </h3>
        <div className={styles.cards}>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
      </section>
    );
  }
}

export default SearchResults;
