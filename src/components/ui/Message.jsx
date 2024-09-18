/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const Message = ({title, msg, src, linkText}) => {
  return (
    <section className='message-container'>
      <h1>{title}</h1>
      <p>{msg}</p>
      <Link to={src}>{linkText}</Link>
    </section>
  )
}

export default Message;