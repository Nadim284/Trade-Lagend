"use client"
import "./Input.css"

function Input({ type = "text", placeholder, value, onChange, className = "", required = false }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`input ${className}`}
      required={required}
    />
  )
}

export default Input
