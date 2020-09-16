import React, { useRef } from "react";

import { CSSTransition, TransitionGroup } from "react-transition-group";
import City from "./City";

const ListCities = ({ cities, hideSearch }) => {
  const nodeRef = useRef(null);
  return (
    <ul>
      <TransitionGroup>
        {cities.map(({ name, id }) => (
          <CSSTransition
            key={id}
            nodeRef={nodeRef}
            classNames="fadedown"
            timeout={500}
          >
            <li ref={nodeRef}>
              <City name={name} hideSearch={hideSearch} />
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ListCities;
