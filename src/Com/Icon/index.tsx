import React from "react";
import styles from "./index.scss";
// import px2rem from "postcss-plugin-px2rem";
const Icon = ({
  src = "",
  code = "#000000",
  size = 10,
  color = "",
  ...props
}) => {
  // size = px2rem({ remUnit: 10 });
  return (
    <>
      {src && <img {...props} src={src} className={styles.icon} alt="" />}
      {code && (
        <span
          className={`iconfont ${code} ${styles.icon}`}
          style={{
            fontSize: `${size}px`,
            color,
            lineHeight: `${size}px`,
            zIndex: 1,
            position: "relative",
            ...props.style,
          }}
        ></span>
      )}
    </>
  );
};
export default Icon;
