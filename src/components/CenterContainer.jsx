import styles from "../components/CenterContainer.module.css";

const CenterContainer = (props) => {
  return <div className={styles.centerContainer}>{props.children}</div>;
};
export default CenterContainer;
