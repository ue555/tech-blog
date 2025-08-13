import {render} from '@testing-library/react';
import {Hello} from './Hello';

test('renders greeting', () => {
  const {container} = render(<Hello name="React"/>);
  expect(container.textContent).toContain('Hello React');
});
