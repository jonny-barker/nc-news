import Article from "./Article"
export default function Articles ({ articles }) {
  return (
    <div>
      {articles.map((article) => {
        return (<Article article={article}/>)
      })}
    </div>
  )
}