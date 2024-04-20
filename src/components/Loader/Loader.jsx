import { CirclesWithBar } from "react-loader-spinner";
import css from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={css.loader}>
      <CirclesWithBar
        className={css.load}
        height="80"
        width="80"
        color="rgb(43, 109, 180)"
        outerCircleColor="rgb(43, 109, 180)"
        innerCircleColor="rgb(43, 109, 180)"
        barColor="rgb(43, 109, 180)"
        ariaLabel="circles-with-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
