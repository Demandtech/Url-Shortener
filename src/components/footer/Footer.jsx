import stl from './Footer.module.scss'
import { ReactComponent as Logo } from '../../asset/images/logo.svg'
import { footerList } from '../../data/footer'
import { SocialIcons } from '../../data/footer'

const Footer = () => {
  return (
    <footer className={stl.footer}>
      <div className={stl.container}>
        <Logo />
        <List />
        <FooterIcon />
      </div>
    </footer>
  )
}

const List = () => {
  return (
    <>
      {footerList.map(list => {
        const { title, id } = list
        return (
          <ul key={id}>
            <li key={id}>{title}</li>

            {list.lists.map((list, index) => {
              return <li key={index}>{list}</li>
            })}
          </ul>
        )
      })}
    </>
  )
}

const FooterIcon = () => {
  return (
    <div className={stl.socialIcons}>
      {SocialIcons.map(ic => {
        const { id, icon } = ic
        return <div key={id}>{icon}</div>
      })}
    </div>
  )
}

export default Footer
