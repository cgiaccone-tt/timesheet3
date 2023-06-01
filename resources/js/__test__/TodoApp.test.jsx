import { render, screen } from '@testing-library/react';
import TodoApp from '../Pages/TodoApp';
import userEvent from '@testing-library/user-event';

beforeEach(() => {
  render(<TodoApp />);
});


