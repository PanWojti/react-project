import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {createAction_SearchString} from '../../redux/searchStringRedux.js';
import {getCardsForSearch} from '../../redux/cardsRedux.js';

/* Filter Columns by id */
//export const getColumnsForList = ({columns}, listId) => columns.filter(column => column.listId == listId);

const mapStateToProps = (state, props) => ({
  cards: getCardsForSearch(state, props.match.params.searchString),
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchString: newSearchString =>
    dispatch(createAction_SearchString(newSearchString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
