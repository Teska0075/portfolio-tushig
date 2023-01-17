import React from "react";
import styles from "./style.module.scss";
import { Typewriter } from "react-simple-typewriter";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

const Hero = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.HeroItem}>
        <div>
          <h1>Hello My name is Tushig</h1>
          <h1>
            I am a{" "}
            <span style={{ color: "#ddff00" }}>
              <Typewriter
                words={["Web Developer", "UI Desginer", "Software Engineer"]}
                loop={false}
              ></Typewriter>
            </span>
          </h1>
          <div className={styles.Icons}>
            <SocialIcon network="facebook"></SocialIcon>
            <SocialIcon network="instagram"></SocialIcon>
            <SocialIcon network="twitter"></SocialIcon>
            <SocialIcon network="youtube"></SocialIcon>
            <SocialIcon network="google"></SocialIcon>
          </div>
        </div>
      </div>
      <div className={styles.HeroItem}>
        <motion.div
        // initial={{ x: 0 }}
        // animate={{ x: 1500 }}
        // transition={{ duration: 10 }}
        >
          <div className={styles.ImgContainer}>
            <img src="https://cdn.discordapp.com/attachments/1027153692945825845/1063023430322114570/118149552_126221815851654_6049707491926780689_n.png"></img>
          </div>
        </motion.div>

        {/* <Spline scene="https://prod.spline.design/7JhsyO21PxBF59TH/scene.splinecode" /> */}
      </div>
    </div>
  );
};

export default Hero;
