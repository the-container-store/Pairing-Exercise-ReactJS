import * as React from 'react'

import spaceDocument0 from '../../data/space_5148448';
import spaceDocument1 from '../../data/space_5148457';
import spaceDocument2 from '../../data/space_5148443';

const states = [
  {
    spaceDocument: spaceDocument0,
    imageUrls: [
      'https://www.containerstore.com/elfa/wall/imageContent.htm?fileId=7178196&type=DESIGN&name=Floor',
      'https://www.containerstore.com/elfa/wall/imageContent.htm?name=Wall+A&fileId=7178196&type=DESIGN',
    ],
  },
  {
    spaceDocument: spaceDocument1,
    imageUrls: [
      'https://www.containerstore.com/elfa/wall/imageContent.htm?fileId=7178808&type=DESIGN&name=Floor',
      'https://www.containerstore.com/elfa/wall/imageContent.htm?fileId=7178808&type=DESIGN&name=Wall+A',
    ],
  },
  {
    spaceDocument: spaceDocument2,
    imageUrls: [
      'https://www.containerstore.com/elfa/wall/imageContent.htm?fileId=7178188&type=DESIGN&name=Floor',
      'https://www.containerstore.com/elfa/wall/imageContent.htm?fileId=7178188&type=DESIGN&name=Wall+D',
      'https://www.containerstore.com/elfa/wall/imageContent.htm?fileId=7178188&type=DESIGN&name=Wall+A',
      'https://www.containerstore.com/elfa/wall/imageContent.htm?fileId=7178188&type=DESIGN&name=Wall+B',
    ],
  }
]

export const useAppState = () => {
  const [state, setState] = React.useState(states[0])

  const setStateByNumber = (number) => {
    return () => setState(states[number])
  }

  const setState0 = setStateByNumber(0)
  const setState1 = setStateByNumber(1)
  const setState2 = setStateByNumber(2)

  return [
    state,
    {
      setState0,
      setState1,
      setState2
    }
  ]
}