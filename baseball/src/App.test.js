import React from 'react';
import { render } from '@testing-library/react';
import App, {addBall} from './App';

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
  myDoc.getByText(/ball/i);
})
