import React, { Fragment, useEffect, useState } from "react";
import moment from "moment";
import { baseInfo, companys, projects } from "../../myData";
import DetailTitle from "../DetailTitle";
import Icon from "../Icon";
import styles from "./index.scss";

const Time = ({ time: { start, end }, className }) => (
  <div className={className}>
    {moment(start).format("YYYY.MM")} - {moment(end).format("YYYY.MM")}
  </div>
);

const Resume = () => {
  const { photo, name, mobile, email, wechat, sex, selfAppraisal } = baseInfo;
  const [isPrint, setIsPrint] = useState(true);
  useEffect(() => {
    // console.log("call \"isPrint(flag:Boolean)\" see more");
    // window["isPrint"] = (flag) => {
    //   setIsPrint(flag);
    // };
  }, []);
  return (
    <div className={styles.resume}>
      <div className={styles.header}>
        <div className={styles.title}>
          <div className={styles.cn}>
            {"个人简历".split("").map((each, index) => (
              <Fragment key={each}>
                {index !== 0 && <div className={styles.split}></div>}
                <span>{each}</span>
              </Fragment>
            ))}
          </div>
          <div className={styles.en}>PERSONAL RESUME</div>
        </div>
      </div>
      <div className={styles.info}>
        <img className={styles.avatar} src={photo} />
        <div className={styles.base_info}>
          <div className={styles.name}>{name}</div>
          <div className={styles.base_info_items}>
            <div className={styles.base_info_item}>
              <Icon code="icon-nansheng" color="#000000" size={16} />:
              <span className={styles.content}>{sex}</span>
            </div>
            <div className={styles.base_info_item}>
              <Icon code="icon-dianhua" color="#000000" size={24} />:
              <span className={styles.content}>{mobile}</span>
            </div>
            <div className={styles.base_info_item}>
              <Icon code="icon-weixin" color="#000000" size={24} />:
              <span className={styles.content}>{wechat}</span>
            </div>
            <div className={styles.base_info_item}>
              <Icon code="icon-youxiang" color="#000000" size={24} />:
              <span className={styles.content}>{email}</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.detail}>
        <DetailTitle code="icon-jiaoyubeijing" title="教育经历" />
        <div className={styles.edu}>
          {baseInfo.education.map(({ time, school, qualification }) => (
            <div className={styles.item} key={school}>
              <div className={styles.school}>{school}</div>
              <div className={styles.qualification}>{qualification}</div>
              <Time className={styles.time} time={time} />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.detail}>
        <DetailTitle code="icon-gongzuojingyan" title="工作经历" />
        <div className={styles.companys}>
          {companys.map(({ name, job, position, time }) => (
            <div className={styles.item} key={name}>
              <div className={styles.top}>
                <div className={styles.name}>{name}</div>
                <Time className={styles.time} time={time} />
              </div>
              <div className={styles.position}>{position}</div>
              <div className={styles.job}>{job}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.detail}>
        <DetailTitle code="icon-xiangmujingyan" title="项目经历" />
        <div className={styles.projects}>
          {projects.map(({ name, job, technology, description }) => (
            <div className={styles.item} key={name}>
              <div className={styles.top}>
                <div className={styles.name}>{name}</div>
                {/* <Time className={styles.time} time={time} /> */}
              </div>
              <div className={styles.technology}>
                {technology.map((each) => (
                  <div className={styles.item} key={each}>
                    {each}
                  </div>
                ))}
              </div>
              <div className={styles.job}>个人职责：{job}</div>
              <div className={styles.description}>项目简介：{description}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.detail}>
        <DetailTitle code="icon-aihao" title="自我评价" />
        <div className={styles.self_appraisal}>
          {selfAppraisal.map((each) => (
            <div className={styles.item} key={each}>
              {each}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Resume;
