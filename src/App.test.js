import React from 'react';
import { render } from '@testing-library/react';
import Profile from './components/profile'
import Accomplishment from './components/accomplishment'
import WhyMe from './components/whyMe'

it('renders Profile without crashing', () => {
  const candidate = { name: 'candidateName', profilePic: 'profilePic' }
  const { getByText } = render(<Profile info={candidate} />)
  const candidateName = getByText(/candidateName/i)
  expect(candidateName).toBeInTheDocument()
})

it('renders Accomplishment without crashing', () => {
  const { getByText } = render(<Accomplishment accomplishment='content accomplishment' />)
  const content = getByText(/content accomplishment/i)
  expect(content).toBeInTheDocument()
})

it('renders WhyMe without crashing', () => {
  const { getByText } = render(<WhyMe whyMe='content whyMe' />)
  const content = getByText(/content whyMe/i)
  expect(content).toBeInTheDocument()
})
