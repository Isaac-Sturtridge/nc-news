const ArticleCard = ({article}) => {
  return (
    // very basic layout, to be updated later
    <article className="article_card">
      <h2>{article.title}</h2>
      <img src={article.article_img_url} alt={article.title} />
      <h3>{article.author}</h3>
      <h4>{article.topic}</h4>
      <p>
        Votes: {article.votes} Comment Count: {article.comment_count} Created
        at: {article.created_at}
      </p>
    </article>
  );
};

export default ArticleCard;
