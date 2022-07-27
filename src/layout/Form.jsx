import { BiSearchAlt } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import './Form.css'
import { useState } from 'react'


const Form = () => {
  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
   

    if(!search) return alert("Digite algo para busca")

    navigate(`/search?q=${search}`)
    setSearch("")

  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search Movie"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />

        <button
          type="submit">
          <BiSearchAlt />
        </button>

      </form>
    </div>
  )
}

export default Form