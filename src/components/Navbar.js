import React from 'react'
import PlayButton from './PlayButton';
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='bg-primary w-full px-8 flex items-center justify-between' style={{height: '64px'}}>
      <div>Logo</div>
      <ul className='flex gap-4 h-full items-center'>
        <li className='flex items-cneter'>Leaderboard</li>
        <li className=''>
          <Link to="select-song">
            <PlayButton fontSize={36}/>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
