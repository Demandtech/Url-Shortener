import React, { useState } from 'react'
import stl from './Form.module.scss'
import UrlList from 'components/urlList/UrlList'

const ErrorMessage = () => {
  return <p className={stl.errorMessage}>please enter a link</p>
}

function Form() {
  const [loading, setLoading] = useState(false)
  const [value, setValue] = useState('')
  const [dataFetch, setDataFetch] = useState([])
  const [errorMessage, setErrorMessage] = useState(false)

  const url = `https://api.shrtco.de/v2/shorten?url=${value}`

  const fetchApi = async inputVal => {
    let inputEl = document.querySelector('.input')
    try {
      setLoading(true)
      if (!value) {
        setLoading(false)

        console.log(inputEl)
        inputEl.classList.add(stl.inputError)
        return
      } else {
        setErrorMessage(false)
        inputEl.classList.remove(stl.inputError)
      }
      const request = await fetch(url + inputVal)
      if (!request.ok) throw new Error('enter valid url')
      const data = await request.json()
      setDataFetch(prev => [
        ...prev,
        {
          value: value,
          shortUrl: data.result.full_short_link2,
        },
      ])
      setLoading(false)
    } catch (err) {
      setLoading(false)
      console.log(err)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!value) {
      setErrorMessage(true)
      setLoading(false)
    }
    setLoading(true)
    fetchApi(value)
    setValue('')
  }
  return (
    <section className={stl.form}>
      <div className={stl.container}>
        <form>
          <div className={stl.textInput}>
            <input
              className="input"
              placeholder="shorten a Link here..."
              type="text"
              value={value}
              onChange={e => setValue(e.target.value)}
            />
            {errorMessage ? <ErrorMessage /> : null}
          </div>
          <div className={stl.submitbtn}>
            <button className={stl.btn} onClick={handleSubmit}>
              {loading ? 'Loading' : 'Shorten it!'}
            </button>
          </div>
        </form>
      </div>
      <UrlList data={dataFetch} />
    </section>
  )
}

export default Form
