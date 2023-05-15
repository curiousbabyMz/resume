import React, { useEffect, useRef, useState } from "react";
import styles from "./index.scss";
import dots from "./temp1";
import box from "./temp2";
import tweenTest from "./temp3";
import lines from "./temp4";
import font from "./temp5";
import planes from "./tempForPlanes";
import objectGeo from "./tempForObj";
import { ThreeRunner, threeInit } from "./three";

const ThreejsDemo = () => {
  const sceneEleRef = useRef(document.createElement("div"));
  const sceneRef = useRef<any>();
  const [temp, setTemp] = useState("objectGeo");

  const tempList: { [key: string]: ThreeRunner } = {
    dots,
    box,
    tweenTest,
    lines,
    font,
    planes,
    objectGeo,
  };

  const init = () => {
    sceneRef.current = threeInit({
      ele: sceneEleRef.current,
      width: 800,
      height: 500,
    });
    // sceneRef.current?.resetScene();
    // sceneRef.current?.loadTemp(temps['temp1']);
  };

  useEffect(() => {
    if (!sceneRef.current) {
      init();
    }
  }, []);

  useEffect(() => {
    if (temp) {
      sceneRef.current?.resetScene();
      sceneRef.current?.loadTemp(tempList[temp]);
    }
  }, [temp]);

  return (
    <div className={styles.threejs_demo}>
      <div className={styles.temp_list}>
        {Object.keys(tempList).map((key) => (
          <div
            className={styles.temp_item}
            onClick={() => setTemp(key)}
            key={key}
          >
            {key}
          </div>
        ))}
      </div>
      <div className={styles.scene} ref={sceneEleRef}></div>
    </div>
  );
};
export default ThreejsDemo;
