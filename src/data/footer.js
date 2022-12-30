import { ReactComponent as Instagram } from '../asset/images/icon-instagram.svg'
import { ReactComponent as Pinterest } from '../asset/images/icon-pinterest.svg'
import { ReactComponent as Twitter } from '../asset/images/icon-twitter.svg'
import { ReactComponent as Facebook } from '../asset/images/icon-facebook.svg'

export const footerList = [
  {
    id: 1,
    title: 'Features',
    lists: ['Link Shortening', 'Branded Links', 'Analytics'],
  },
  {
    id: 2,
    title: 'Resources',
    lists: ['Blog', 'Developers', 'Support'],
  },
  {
    id: 3,
    title: 'Company',
    lists: ['About', 'Our Team', 'Careers', 'Contact'],
  },
]

export const SocialIcons = [
  { id: 1, icon: <Facebook /> },
  { id: 2, icon: <Twitter /> },
  { id: 3, icon: <Pinterest /> },
  { id: 4, icon: <Instagram /> },
]
