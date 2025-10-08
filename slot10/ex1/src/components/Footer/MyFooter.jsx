import Button from "react-bootstrap/Button";
import "./Footer.css";

function MyFooter({ author, email, linkGithub }) {
  return (
    <footer>
      <p>Author: thanh</p>
      <p>Created by: ntthanh@gmail.com</p>
      <p>&copy; {new Date().getFullYear()} thanh. All rights reserved.</p>
      <Button
        variant="link"
        href={linkGithub}
        target="_blank"
      >
        My Link Github: {linkGithub}
      </Button>
    </footer>
  );
}

export default MyFooter;
