import style from "../styles/Pageheader.module.css";

const PageHeader = (props) => {
  return (
    <div className={style.Container}>
      <h2 className={style.h2}>{props.title}</h2>
      {/* <hr className={style.hr} /> */}
    </div>
  );
};

export default PageHeader;
