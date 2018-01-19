import React, { Component } from 'react';
import FilterMenuLink from '../containers/FilterMenuLink';
import { DAY_SHOW_TODAY, DAY_SHOW_TOMORROW } from '../utils/dayfilter';

class Menu extends Component {
  render() {
    return (
      <div className="days-menu">
        <ul>
          <FilterMenuLink filter={DAY_SHOW_TODAY}>
            Today
          </FilterMenuLink>
          <FilterMenuLink filter={DAY_SHOW_TOMORROW}>
            Tomorrow
          </FilterMenuLink>
        </ul>
        <h1><b>To</b>ody-<b>Do</b>ody</h1>
      </div>
    );
  }
}

export default Menu;