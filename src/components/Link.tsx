import React, { ReactElement } from 'react'
import { Link as RLink } from '@reach/router'
import { BASEPATH } from '../constants'

interface Props {
    to: string
    children: ReactElement
    absolute?: string
    props?: any
}

export const Link: React.FC<Props> = ({ to = '', children, absolute, ...props }) => {
    if (!absolute) {
      to = BASEPATH + to
    }
    return (
      <RLink {...props} to={to}>
        {children}
      </RLink>
    )
  }