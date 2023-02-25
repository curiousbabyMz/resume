import React, { Fragment, useEffect, useState } from "react";
import moment from "moment";
import { baseInfo, companys, projects } from "../../myData";
import DetailTitle from "../DetailTitle";
import Icon from "../Icon";
import styles from "./index.scss";

const Time = ({ time: { start, end }, className }) => (
  <div className={className}>
    {moment(start).format("YYYY.MM")} -{" "}
    {moment().format("YYYY.MM.DD HH:MM") ===
    moment(end).format("YYYY.MM.DD HH:MM")
      ? "至今"
      : moment(end).format("YYYY.MM")}
  </div>
);
window.moment = moment;

const Resume = () => {
  const { photo, hobby, name, mobile, email, wechat, sex, selfAppraisal } =
    baseInfo;
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
        <img className={styles.banner} src={require("../../imgs/banner.png")} />
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
          <div className={`${styles.hobby} ${styles.base_info_items}`}>
            <div className={styles.base_info_item}>
              <Icon code="icon-aihao" color="#da5353" size={24} />：
            </div>
            {hobby.map((each, index) => (
              <div className={styles.base_info_item} key={index}>
                {each}
              </div>
            ))}
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
          {projects.map(
            ({ name, job, technology, description, contribution }) => (
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
                <div className={styles.description}>
                  <div className={styles.label}>项目简介：</div>
                  <div className={styles.content}> {description}</div>
                </div>
                <div className={styles.job}>
                  <div className={styles.label}>个人职责：</div>
                  <div className={styles.content}> {job}</div>
                </div>
                <div className={styles.contribution}>
                  <div className={styles.label}>工作成果：</div>
                  <div className={styles.content}>
                    {contribution.map((each) => (
                      <div key={each}>{each}</div>
                    ))}
                  </div>
                </div>
              </div>
            )
          )}
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
