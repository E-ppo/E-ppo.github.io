import { ChangeEvent, useState } from "react"
import { useNavigate } from "react-router"

const PasswordBox = () => {
  const [value, setValue] = useState("")
  const navigation = useNavigate()
  // const password = import.meta.env.VITE_PUBLIC_PASSWORD

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleOnClick = () => {
    // if (value === password) navigation("/blog/editor")
    navigation("/blog/editor")
  }

  return (
    <div>
      <input value={value} onChange={handleChange} />
      <button onClick={handleOnClick}>입력</button>
    </div>
  )
}

export default PasswordBox
