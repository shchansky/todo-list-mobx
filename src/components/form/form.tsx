import React from "react";
import { observer } from "mobx-react-lite";
import { fromState } from "../../store";

export const Form = observer(() => {
  return (
    <div>
      <textarea value={fromState.value} onChange={(ev)=>{fromState.setValue(ev.target.value)}}/>
      <button>Set</button>
      <button>Clear</button>
    </div>
  );
});

// export const Form = () => {
//   return <div>sfsdfsdfsd</div>;
// };
