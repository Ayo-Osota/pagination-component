import React from 'react'

const Follower = ({image, login, url}) => {
  return <div className="card">
    <img src={image} alt={login} />
    <h4>{login}</h4>
    <a className="btn" href={url} target="_blank">view profile</a>
  </div>
}

export default Follower
