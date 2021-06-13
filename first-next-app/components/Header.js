import headerStyles from '../styles/Header.module.css'

const Header = ({}) => (
  <div>
    <h1 className='title'>
      <span>WebDev</span> News
    </h1>
    <style jsx>
      {`
        .title{
          color: blue;
        }
      `}
    </style>
  </div>
);

export default Header;
