/**
 * @file
 * @date 2022-08-11
 * @author zhuxiaojiao
 * @lastModify zhuxiaojiao 2022-08-11
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React from "react";
import style from "./style.scss";
import img1 from "~/Assets/img1.jpeg";
import img2 from "~/Assets/img2.jpg";
import img3 from "~/Assets/img3.png";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Home: React.FC = (): JSX.Element => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  /* <------------------------------------ **** STATE END **** ------------------------------------ */
  /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
  /************* This section will include this component parameter *************/
  /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
  /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
  return (
    <div>
      <h1>这是Home页面</h1>
      <div className={style.img_wrap}>
        <img src={img1} />
        <img src={img2} />
        <img src={img3} />
      </div>
    </div>
  );
};
export default Home;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
