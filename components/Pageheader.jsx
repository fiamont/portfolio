import style from "../styles/Pageheader.module.css";

const PageHeader = (props) => {
  return (
    <div className={style.Container}>
      <h2 className={style.pageheader}>{props.title}</h2>
    </div>
  );
};

export default PageHeader;
