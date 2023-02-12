import React from "react";
import Icon from "../Icon";
import styles from "./index.scss";

const DetailTitle = ({ code, title = "", ...props }) => {
  return (
    <div className={styles.detail_title}>
      <div className={styles.icon}>
        {/* <img {...props} src={src} alt="" /> */}
        <Icon code={code} size={30} color="#fff" />
      </div>
      <span className={styles.title}>{title}</span>
    </div>
  );
};
export default DetailTitle;
