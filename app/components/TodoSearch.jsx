var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var TodoSearch = React.createClass({
  getInitialState: function () {
    return({
      showCompleted: false,
      searchText: ''
    });
  },
  
  render: function () {
    var {dispatch, showCompleted, searchText} = this.props;
    return (
      <div className="container__header">
        <div>
          <input type="search" placeholder="Search todos" ref="searchText" value={searchText} onChange={() => {
              var searchText = this.refs.searchText.value;
              dispatch(actions.setSearchText(searchText));
            }}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={() => {
                dispatch(actions.toggleShowCompleted());
              }}/>
            Show completed todos
          </label>
        </div>
      </div> 
   ); 
  }
});

export default connect((state) => {
  return {
    showCompleted: state.showCompleted,
    searchText: state.searchText
  };
})(TodoSearch);