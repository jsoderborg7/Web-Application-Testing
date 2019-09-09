import React from 'react';
import { render } from '@testing-library/react';
import App, {ballTest, strikeTest} from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

test('App renders without crashing', () => {
  render(<App />);
});

test("contains ball button", () => {
  const myDoc = render(<App />)
  myDoc.getAllByText(/ball/i);
})

test('ballTest works', () =>{
  expect(ballTest(0)).toBe(1);
});

test('strikeTest works', () =>{
  expect(strikeTest(1)).toBe(2);
});


