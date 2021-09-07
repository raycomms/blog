//import...


class BlogPostTemplate extends React.Component {
    render() {
      const post = this.props.data.markdownRemark
      const siteTitle = this.props.data.site.siteMetadata.title
      const { previous, next } = this.props.pageContext
      const tags = post.frontmatter.tags || [];
      return (
        <Layout location={this.props.location} title={siteTitle}>
          <Seo
            title={post.frontmatter.title}
            description={post.frontmatter.description || post.excerpt}
          />
          <article
            className="blog-post"
            itemScope
            itemType="http://schema.org/Article"
          >
            <header>
              <h1 itemProp="headline">{post.frontmatter.title}</h1>
              <p>{post.frontmatter.date}</p>
              <p>Tags: {tags.map((tag, i, arr) => (<><TagDecorator tag={tag} /><span>{arr.length === i+1 ? `` : `, ` } </span> </>))} </p>
            </header>
            <section
              dangerouslySetInnerHTML={{ __html: post.html }}
              itemProp="articleBody"
            />
            <hr />
            <footer></footer>
          </article>
          <nav className="blog-post-nav">
          <p>Tags: {tags.map((tag, i, arr) => (<><TagDecorator tag={tag} /><span>{arr.length === i+1 ? `` : `, ` } </span> </>))} </p>
            <ul
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-between`,
                listStyle: `none`,
                padding: 0,
              }}
            >
              <li>
                {previous && (
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </Layout>
      )
    }
  }