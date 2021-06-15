import Link from 'next/link'
import headerStyles from '../styles/Header.module.css'

const Header = ({}) => (

  <div>
    <h1 className={headerStyles.title}>
      <span>WebDev</span> News
    </h1>
    <p className={headerStyles.description}>WebDev News Feeds. Keep updated with dev news!</p>
  </div>
);

export default Header;
