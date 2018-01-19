import { connect } from 'react-redux';
import { setDayFilter } from '../actions';
import MenuLink from '../components/MenuLink';

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.dayFilter
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setDayFilter(ownProps.filter));
    }
  };
}

const FilterMenuLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuLink);

export default FilterMenuLink;