import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import City from './City';

const ListCities = ({ cities, hideSearch }) => {
  const nodeRef = useRef(null);
  return (
    <ul>
      <TransitionGroup>
        {cities.map(({ id, name, country }) => (
          <CSSTransition key={id} nodeRef={nodeRef} classNames="fadedown" timeout={300}>
            <li ref={nodeRef}>
              <City name={name} country={country} hideSearch={hideSearch} />
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

ListCities.propTypes = {
  cities: PropTypes.array.isRequired,
  hideSearch: PropTypes.func.isRequired,
};

export default ListCities;
