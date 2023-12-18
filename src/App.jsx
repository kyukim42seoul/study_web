import React from 'react'
import './App.css'
import ColorChip from './ColorChip.jsx'
import Card from './Card.jsx'
import CardFooter from './CardFooter.jsx'

function App() {
  return (
    <div className="wrapper">
      <ColorChip className="side-bar" backgroundColor="var(--grey1)">
        <ColorChip className="item" backgroundColor="var(--main)">D</ColorChip>
        <ColorChip className="item" backgroundColor="var(--mainLighten)">E</ColorChip>
        <ColorChip className="item" backgroundColor="var(--mainDarken)">F</ColorChip>
      </ColorChip>
      <ColorChip className="main" backgroundColor="var(--grey2)">
        <Card className="content" backgroundColor="var(--main)">
          <p>Name</p>
          <p className='sentence'>blahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblah</p>
          <CardFooter />
        </Card>
        <Card className="content" backgroundColor="var(--mainLighten)">
          <p>Name</p>
          <div className='sentence'>
            <p>blahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblah</p>
          </div>
          <ul>
            <li>Tag</li>
            <li>Tag</li>
            <li>Tag</li>
            <li>Tag</li>
          </ul>
        </Card>
        <Card className="content" backgroundColor="var(--mainDarken)">
          <p>Name</p>
          <p className='sentence'>blahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblah</p>
          <ul>
            <li>Tag</li>
            <li>Tag</li>
            <li>Tag</li>
            <li>Tag</li>
          </ul>
        </Card>
        <Card className="content" backgroundColor="var(--mainDarken)">
          <p>Name</p>
          <p className='sentence'>blahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblah</p>
          <ul>
            <li>Tag</li>
            <li>Tag</li>
            <li>Tag</li>
            <li>Tag</li>
          </ul>
        </Card>
        <Card className="content" backgroundColor="var(--mainDarken)">
          <p>Name</p>
          <p className='sentence'>blahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblah</p>
          <ul>
            <li>Tag</li>
            <li>Tag</li>
            <li>Tag</li>
            <li>Tag</li>
          </ul>
        </Card>
      </ColorChip>
      <ColorChip className="navigation-panel" backgroundColor="var(--grey3)">C</ColorChip>
    </div>
  )
}

export default App
