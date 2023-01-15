import React from 'react'



const leaderboard = [
  {
    name: "Bob",
    score: 98.7
  },
  {
    name: "Fish",
    score: 85
  },
  {
    name: "Carl",
    score: 71.1
  },
]


const Leaderboard = () => {
  return (
    <div>
      <h1 className='text-4xl text-center mb-8'>Leaderboard</h1>
      <table className='w-full text-center'>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((person, index) => {
            return (
              <tr key={index}>
                <td className=''>{index + 1}</td>
                <td className=''>{person.name}</td>
                <td className=''>{person.score}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Leaderboard