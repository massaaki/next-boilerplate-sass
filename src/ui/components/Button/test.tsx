import { render, screen } from '@testing-library/react'
import Button from '.'

describe('<Home />', () => {
  it('should render the Button', () => {
    render(<Button />)
    expect(
      screen.getByRole('button', { name: /Click me/i })
    ).toBeInTheDocument()
  })
})
