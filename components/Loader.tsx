// import React, { useEffect } from "react";
// import { motion, Variants } from "framer-motion";

// const container = {
//   show: {
//     transition: {
//       staggerChildren: 0.35,
//     },
//   },
// };

// const item = {
//   hidden: { opacity: 0, y: 200 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       ease: [0.6, 0.02, 0.05, 0.95],
//       duration: 1.6,
//     },
//   },
//   exit: {
//     opacity: 0,
//     y: -200,
//     transition: {
//       ease: "easeInOut",
//       duration: 0.8,
//     },
//   },
// };

// const itemMain = {
//   hidden: { opacity: 0, y: 200 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       ease: [0.6, 0.01, 0.3, 0.95],
//       duration: 1.6,
//     },
//   },
// };

// // const Load = ({ setLoading }) => {
// //   useEffect(() => {
// //     const timer = setTimeout(() => {
// //       setLoading(false);
// //     }, 4000);
// //     return () => clearTimeout(timer);
// //   });
// // };

// function Loader({ setLoading }) {
//   return (
//     <div className="absolue top-0 left-0 -z-100 h-screen loader">
//       <motion.div className=" pt-[300px] max-w-7xl mx-auto ">
//         <motion.div
//           variants={container}
//           onAnimationComplete={() => setLoading(false)}
//           initial="hidden"
//           animate="show"
//           exit="exit"
//           className="flex items-center gap-10"
//         >
//           <motion.img
//             variants={item}
//             className="w-[300px] h-[500px]"
//             src="/image (2).jpg"
//             alt=""
//           />
//           <motion.div variants={itemMain}>
//             <motion.img src="/image (4).jpg" alt="" layoutId="main-1" />
//           </motion.div>
//           <motion.img
//             variants={item}
//             className="w-[300px] h-[500px] "
//             src="/image (3).jpg"
//             alt=""
//           />
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }

// export default Loader;
