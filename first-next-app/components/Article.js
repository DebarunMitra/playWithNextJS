import articleStyles from '../styles/article.module.css'
import Item from '../components/Item'

const Article = ({articles}) => (
  <div className={articleStyles.grid}>
    {articles.map(article=>{
      return (
        <Item article={article} />
      )
    })}
  </div>
);

export default Article
