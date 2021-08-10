//Refactoring a class component
//had useState hook
//no need for useEffect bc there are no lifecycle methods for this

import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {

  
  const [term, setTerm] = useState("");



  const onFSubmit = event => {
    event.preventDefault();
    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onFSubmit} className="ui form"> 
        <div className="field">
          <label>Video Search</label>
          {/* <input type="text" value={term} onChange={onInputChange} /> */}
          <input type="text" value={term} onChange={(event) => setTerm(event.target.value)} />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;

// lesson 89,90, 91

// export default class SearchBar extends React.Component {
// state = { term: "" };


// whenever we move event handlers to a functional component we need to turn them into functions.
// onInputChange = event => {
//   this.setState({ term: event.target.value });
// };

// onFormSubmit = event => {
//   event.preventDefault();
//   this.props.onFormSubmit(this.state.term);
// };
//   render() {
//     return (
//       <div className="search-bar ui segment">
//         <form onSubmit={this.onFormSubmit} className="ui form">
//           <div className="field">
//             <label>Video Search</label>
//             <input type="text" value={this.state.term} onChange={this.onInputChange} />
//           </div>
//         </form>
//       </div>
//     );
//   }
// }
