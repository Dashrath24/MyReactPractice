import React from "react";
import TaskOfUseReduce from "./TaskOfUseReduce/TaskOfUseReduce";

function ExplainUseReduce() {
  return (
    <>
      <div className="container text-bg-dark">
        <div className="text-center py-3">
          <h1>UseReducer Hook Explained Here</h1>
          <p>
            The useReducer hook is a React hook used for managing complex state
            logic. It is an alternative to useState and is particularly useful
            when state transitions depend on the previous state or involve
            multiple sub-values. It takes a reducer function and an initial
            state as arguments and returns the current state and a dispatch
            function. The dispatch function is used to trigger state updates.
          </p>

          {/* <h2>Count : {state.count}</h2> */}
        </div>

        <div className="border border-3 border-danger w-50 m-3 p-3">
          <h2>Syntax</h2>

          <code>
            const [state, dispatch] = useReducer(reducer, initialState);
          </code>
        </div>
        <TaskOfUseReduce/>
      </div>
    </>
  );
}

export default ExplainUseReduce;
