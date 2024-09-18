import { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Message from "../components/ui/Message";

const Purchases = () => {
  useEffect(() => {
    document.title = "My purchases"
  }, []);

  return (
    <>
      <Header />
        <Message msg="Nothing to see here yet." />
      <Footer />
    </>
  )
}

export default Purchases