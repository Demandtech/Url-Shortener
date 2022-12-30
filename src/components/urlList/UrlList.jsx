import stl from './UrlList.module.scss'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const UrlList = ({ data }) => {
  const handleCopy = id => {
    const copyBtn = document.querySelectorAll('.copy')
    copyBtn.forEach((btn, index) => {
      if (index === id) {
        btn.textContent = 'Copied'
        btn.classList.add(stl.copied)
        setTimeout(() => {
          btn.textContent = 'Copy'
          btn.classList.remove(stl.copied)
        }, 2000)
      }
    })
  }

  return (
    <ul className={stl.urlContainer}>
      {data.map((url, id) => {
        return (
          <li key={id}>
            <div className={stl.longUrl}>
              <p>{url.value}</p>
            </div>
            <div className={stl.shortUrl}>
              <input type="text" value={url.shortUrl} readOnly />
              <CopyToClipboard text={url.shortUrl}>
                <button
                  id={id}
                  className={stl.btn + ' copy'}
                  onClick={() => handleCopy(id)}
                >
                  Copy
                </button>
              </CopyToClipboard>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default UrlList
