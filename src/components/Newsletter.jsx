const Newsletter = () => {
  return (
    <section className="newsletter">
        <div className="dark-bg">
            <article className="newsletter-content">
                <h2>Subscribe to our newsletter</h2>
                <p>Receive infos about new products, trends, discounts and more on your email!</p>
                <form>
                    <input type="email" name="email" id="email" required />
                    <input type="submit" value="subscribe" />
                </form>
            </article>
        </div>
    </section>
  )
}

export default Newsletter;