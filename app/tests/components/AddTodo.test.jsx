var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
import {AddTodo} from 'AddTodo'

describe('AddTodo', ()=> {
  it('should exist', () => {
    expect(AddTodo).toExist();  
  });
  
  it('should dispatch todo when valid todo text', () => {
    var todoText = 'abc'
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));
    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);
    
    expect(spy).toHaveBeenCalledWith({
      type: 'ADD_TODO',
      text: todoText
    });
  });
  
  it('should not  dispatch todo when invalid todo text', () => {
    var todoText = ''
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));
    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);
    
    expect(spy).toNotHaveBeenCalled();
  });
});