import Footer from "../components/Footer";
import Header from "../components/Header";
import Message from "../components/ui/Message";

const ErrorPage = () => {
  return (
    <>
      <Header />
        <Message 
        title="Page not found!" 
        msg="Sorry, this page does not exist."
        src="/evergreen-interiors"
        linkText="Go back to the homepage"
        />
      <Footer />
    </>
  )
}

export default ErrorPage;