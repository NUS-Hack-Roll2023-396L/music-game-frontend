import React from 'react'

export default function Navbar() {
  return (
    <nav className='w-full py-2 px-8 flex justify-between'>
      <div>Logo</div>
      <ul className='flex gap-4'>
        <li>Link 1</li>
        <li>Link 2</li>
        <li>Link 3</li>
      </ul>
    </nav>
  )
}
