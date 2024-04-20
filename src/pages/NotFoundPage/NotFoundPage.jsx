import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";
const NotFoundPage = () => {
  return (
    <div>
      <p className={css.notfound}>Sorry, this psge not found</p>
      <Link className={css.goHome} to="/">
        Go Home 🏠
      </Link>
    </div>
  );
};

export default NotFoundPage;
