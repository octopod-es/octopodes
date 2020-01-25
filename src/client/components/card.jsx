import React from 'react';
import { useDrag } from 'react-dnd';

const Card = (props) => {
  const { newCard } = props;
  const { columnName } = props;
  const { inArray } = props;

  const [{ isDragging }, drag] = useDrag({
    item: { type: 'card' },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  if (newCard && columnName === 'interested') {
    const { dispatchSubmitInfo } = props;
    return (
      <div id="card">
        <form action="CreateCard">
          <input id="company" type="text" placeholder="Company" />
          <br />
          <input id="role" type="text" placeholder="Role" />
          <br />
          <input id="link" type="text" placeholder="Link" />
          <br />
          <button
            type="button"
            form="CreateCard"
            onClick={() => dispatchSubmitInfo(document.getElementById('company').value, document.getElementById('role').value, document.getElementById('link').value)}
          >
            Add Info
          </button>
        </form>
      </div>
    );
  } if (inArray) {
    const { jobObject } = props;
    const { company } = jobObject;
    const { role } = jobObject;
    const { link } = jobObject;
    const opacity = isDragging ? 0 : 1;
    return (
      <div className="hardCard" ref={drag} style={{ opacity }}>
        <label>Company: </label>
        <span>{company}</span>
        <br />
        <label>Role: </label>
        <span>{role}</span>
        <br />
        <span><a href={`https://${link}`}>{link}</a></span>
      </div>
    );
  }
  return null;
};

export default Card;
