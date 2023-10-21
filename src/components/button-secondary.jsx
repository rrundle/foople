import React from 'react'

const ButtonSecondary = ({ label, onClick }) => (
  <button className="btn" onClick={onClick} type="button">
    {label}
  </button>
)

export default ButtonSecondary
