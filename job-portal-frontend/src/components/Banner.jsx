import React from "react";
import { easeInOut, motion } from "motion/react";
import team1 from "../assets/images/team1.png";
import team2 from "../assets/images/team2.png";
const Banner = () => {
  return (
    <div className="hero min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img src={team1} animate={{y:[50,80,50]}} transition={{
            duration:5,
            repeat:Infinity,
            repeatType:"reverse"
          }} className="max-w-60  mx-auto md:max-w-sm rounded-l-3xl border-teal-600 border-t-4 border-r-4 shadow-2xl" />
          <motion.img src={team2} animate={{x:[-30,-60,-30]}} transition={{
            duration:5,
            repeat:Infinity,
            repeatType:"reverse"
          }} className="max-w-60  mx-auto md:max-w-sm rounded-r-3xl border-teal-600 border-b-4 border-l-4 shadow-2xl" />
        </div>
        <div className="flex-1">
          <motion.h1
            animate={{
              x: 50, // Moves the text horizontally
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse", // Reverses the movement for a loop
            }}
            className="text-2xl md:text-4xl "
          >
            Get Latest{" "}
            <motion.span
              animate={{
                color: ["#FF0000", "#008080", "#0000FF"], // Using valid hex codes
              }}
              transition={{
                duration: 3, // Duration for the color change
                repeat: Infinity, // Repeats the color animation
              }}
              className="font-medium"
            >
              Jobs
            </motion.span>{" "}
            For You!
          </motion.h1>

          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
