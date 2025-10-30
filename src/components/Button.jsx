"use client"
import "./Button.css"

function Button({ children, variant = "primary", size = "medium", onClick, type = "button", disabled = false }) {
  return (
    <button className={`btn btn-${variant} btn-${size}`} onClick={onClick} type={type} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
