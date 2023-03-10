import React, { useState } from "react";
import Image from "next/image";
import { AiFillCloseCircle } from "react-icons/ai";
import { IoFilterOutline } from "react-icons/io5";
import { IoMdDoneAll } from "react-icons/io";

import { motion } from "framer-motion";
import img7 from "../public/gyla.jpg";
import img8 from "../public/gyla22.jpg";
import img9 from "../public/gyla (1).jpg";
import img10 from "../public/gyla (4).jpg";
import img11 from "../public/gyla (5).jpg";
import img12 from "../public/gyla (6).jpg";
import img13 from "../public/gyla (7).jpg";
import img14 from "../public/gyla (8).jpg";
import img15 from "../public/gyla (9).jpg";
import img16 from "../public/gyla (10).jpg";
import img17 from "../public/gyla (11).jpg";
import img18 from "../public/gyla (12).jpg";
import img19 from "../public/gyla (13).jpg";
import img20 from "../public/gyla (14).jpg";
import img21 from "../public/gyla (15).jpg";
import img22 from "../public/gyla (16).jpg";
import img23 from "../public/gyla (17).jpg";
import img24 from "../public/gyla (18).jpg";
import img25 from "../public/gyla (19).jpg";
import img26 from "../public/gyla (20).jpg";
import img27 from "../public/gyla (21).jpg";
import img28 from "../public/gyla (22).jpg";
import img29 from "../public/gyla (23).jpg";
import img30 from "../public/gyla (24).jpg";
import img31 from "../public/gyla (25).jpg";
import img32 from "../public/gyla (26).jpg";
import img33 from "../public/gyla (27).jpg";
import img34 from "../public/gyla (28).jpg";
import img35 from "../public/gyla (29).jpg";
import img36 from "../public/gyla (30).jpg";
import img37 from "../public/gyla (31).jpg";
import img38 from "../public/gyla (32).jpg";
import img39 from "../public/gyla (33).jpg";
import img40 from "../public/gyla (34).jpg";
import img41 from "../public/gyla (35).jpg";
import img42 from "../public/gyla (78).jpg";
import img43 from "../public/gyla (37).jpg";
import img44 from "../public/gyla (38).jpg";
import img45 from "../public/gyla (39).jpg";
// import img46 from "../public/gyla (40).jpg";
// import img101 from "../public/gyla (53).jpg";
// import img102 from "../public/gyla (54).jpg";
// import img103 from "../public/gyla (55).jpg";
// import img104 from "../public/gyla (56).jpg";
// import img105 from "../public/gyla (57).jpg";
import img106 from "../public/gyla (58).jpg";
import img107 from "../public/gyla (59).jpg";
import img108 from "../public/gyla (60).jpg";
import img47 from "../public/camp (1).jpg";
import img48 from "../public/camp (4).jpg";
import img49 from "../public/camp (5).jpg";
import img50 from "../public/camp (6).jpg";
import img51 from "../public/camp (7).jpg";
import img52 from "../public/camp (8).jpg";
import img53 from "../public/camp (9).jpg";
import img54 from "../public/camp (10).jpg";
import img55 from "../public/camp (11).jpg";
import img56 from "../public/camp (12).jpg";
import img57 from "../public/camp (13).jpg";
import img58 from "../public/camp (14).jpg";
import img59 from "../public/camp (15).jpg";
import img60 from "../public/camp (16).jpg";
import img61 from "../public/camp (17).jpg";
import img62 from "../public/camp (18).jpg";
import img63 from "../public/camp (19).jpg";
import img64 from "../public/camp (20).jpg";
import img65 from "../public/camp (21).jpg";
import img66 from "../public/camp (22).jpg";
import img67 from "../public/camp (23).jpg";
import img68 from "../public/camp (24).jpg";
import img69 from "../public/camp (25).jpg";
import img70 from "../public/camp (26).jpg";
import img71 from "../public/camp (27).jpg";
import img72 from "../public/camp (28).jpg";
import img73 from "../public/camp (29).jpg";
import img74 from "../public/camp (30).jpg";
import img75 from "../public/camp (31).jpg";
import img76 from "../public/camp (32).jpg";
import img77 from "../public/camp (33).jpg";
import img78 from "../public/camp (34).jpg";
import img79 from "../public/camp (35).jpg";
import img80 from "../public/camp (36).jpg";
import img81 from "../public/camp (37).jpg";
import img82 from "../public/camp (38).jpg";
import img83 from "../public/camp (39).jpg";
import img84 from "../public/gyla (40).jpg";
import img85 from "../public/camp (25).jpg";
import img86 from "../public/camp (26).jpg";
import img87 from "../public/camp (27).jpg";
import img88 from "../public/camp (28).jpg";
import img89 from "../public/camp (29).jpg";
import img91 from "../public/camp (31).jpg";
import img92 from "../public/camp (32).jpg";
import img93 from "../public/camp (33).jpg";
import img94 from "../public/camp (34).jpg";
import img95 from "../public/camp (35).jpg";
import img96 from "../public/camp (36).jpg";
import img97 from "../public/camp (37).jpg";
import img98 from "../public/camp (38).jpg";
import img99 from "../public/camp (39).jpg";
import img100 from "../public/gyla (81).jpg";
import img109 from "../public/gyla (71).jpg";
import img110 from "../public/gyla (72).jpg";
import img111 from "../public/gyla (73).jpg";
import img112 from "../public/gyla (74).jpg";
import img113 from "../public/gyla (75).jpg";
import img114 from "../public/gyla (76).jpg";
import img115 from "../public/gyla (79).jpg";
function Gallery() {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");
  const [filter, setFilter] = useState("All");
  const [showMenu, setShowMenu] = useState(false);
  const data = [
    { id: 7, category: "Second", imgSrc: img7 },
    { id: 8, category: "Second", imgSrc: img8 },
    { id: 9, category: "Second", imgSrc: img9 },
    { id: 10, category: "Second", imgSrc: img10 },
    { id: 11, category: "Second", imgSrc: img11 },
    { id: 12, category: "Second", imgSrc: img12 },
    { id: 55, category: "First", imgSrc: img55 },
    { id: 56, category: "First", imgSrc: img56 },
    { id: 57, category: "First", imgSrc: img57 },
    { id: 58, category: "First", imgSrc: img58 },
    { id: 13, category: "Second", imgSrc: img13 },
    { id: 14, category: "Second", imgSrc: img14 },
    { id: 15, category: "Second", imgSrc: img15 },
    { id: 16, category: "Second", imgSrc: img16 },
    { id: 17, category: "Second", imgSrc: img17 },
    { id: 18, category: "Second", imgSrc: img18 },
    { id: 19, category: "Second", imgSrc: img19 },
    { id: 20, category: "Second", imgSrc: img20 },
    { id: 21, category: "Second", imgSrc: img21 },
    { id: 22, category: "Second", imgSrc: img22 },
    { id: 23, category: "Second", imgSrc: img23 },

    { id: 30, category: "Second", imgSrc: img30 },
    { id: 31, category: "first", imgSrc: img31 },
    { id: 32, category: "Second", imgSrc: img32 },
    { id: 33, category: "Second", imgSrc: img33 },
    { id: 34, category: "Second", imgSrc: img34 },
    { id: 35, category: "Second", imgSrc: img35 },
    { id: 63, category: "First", imgSrc: img63 },
    { id: 64, category: "First", imgSrc: img64 },
    { id: 65, category: "First", imgSrc: img65 },
    { id: 66, category: "First", imgSrc: img66 },
    { id: 67, category: "First", imgSrc: img67 },
    { id: 68, category: "First", imgSrc: img68 },
    { id: 69, category: "First", imgSrc: img69 },
    { id: 70, category: "First", imgSrc: img70 },
    { id: 71, category: "First", imgSrc: img71 },
    { id: 36, category: "Second", imgSrc: img36 },
    { id: 37, category: "Second", imgSrc: img37 },
    { id: 38, category: "Second", imgSrc: img38 },
    { id: 39, category: "Second", imgSrc: img39 },
    { id: 40, category: "Second", imgSrc: img40 },
    { id: 41, category: "Second", imgSrc: img41 },
    { id: 42, category: "Second", imgSrc: img42 },
    { id: 43, category: "Second", imgSrc: img43 },
    { id: 44, category: "Second", imgSrc: img44 },
    { id: 45, category: "Second", imgSrc: img45 },
    // { id: 46, category: "Second", imgSrc: img46 },
    { id: 47, category: "First", imgSrc: img47 },
    { id: 48, category: "First", imgSrc: img48 },
    { id: 49, category: "First", imgSrc: img49 },
    { id: 50, category: "First", imgSrc: img50 },
    { id: 51, category: "First", imgSrc: img51 },
    { id: 52, category: "First", imgSrc: img52 },
    { id: 53, category: "First", imgSrc: img53 },
    { id: 54, category: "First", imgSrc: img54 },
    { id: 59, category: "First", imgSrc: img59 },
    { id: 60, category: "First", imgSrc: img60 },
    { id: 61, category: "First", imgSrc: img61 },
    { id: 62, category: "First", imgSrc: img62 },
    { id: 72, category: "First", imgSrc: img72 },
    { id: 73, category: "First", imgSrc: img73 },
    { id: 74, category: "First", imgSrc: img74 },
    { id: 75, category: "first", imgSrc: img75 },
    { id: 76, category: "First", imgSrc: img76 },
    { id: 77, category: "first", imgSrc: img77 },
    { id: 78, category: "first", imgSrc: img78 },
    { id: 79, category: "first", imgSrc: img79 },
    { id: 24, category: "Second", imgSrc: img24 },
    { id: 25, category: "Second", imgSrc: img25 },
    { id: 26, category: "Second", imgSrc: img26 },
    { id: 27, category: "Second", imgSrc: img27 },
    { id: 28, category: "Second", imgSrc: img28 },
    { id: 29, category: "Second", imgSrc: img29 },
    { id: 80, category: "First", imgSrc: img80 },
    { id: 81, category: "First", imgSrc: img81 },
    { id: 82, category: "First", imgSrc: img82 },
    { id: 83, category: "First", imgSrc: img83 },
    { id: 84, category: "Second", imgSrc: img84 },
    { id: 85, category: "First", imgSrc: img85 },
    { id: 86, category: "First", imgSrc: img86 },
    { id: 87, category: "First", imgSrc: img87 },
    { id: 88, category: "First", imgSrc: img88 },
    { id: 89, category: "First", imgSrc: img89 },

    { id: 91, category: "First", imgSrc: img91 },
    { id: 92, category: "First", imgSrc: img92 },
    { id: 93, category: "First", imgSrc: img93 },
    { id: 94, category: "First", imgSrc: img94 },
    { id: 95, category: "First", imgSrc: img95 },
    { id: 96, category: "First", imgSrc: img96 },
    { id: 97, category: "First", imgSrc: img97 },
    { id: 98, category: "First", imgSrc: img98 },
    { id: 99, category: "First", imgSrc: img99 },
    { id: 100, category: "Second", imgSrc: img100 },
    // { id: 101, category: "Second", imgSrc: img101 },
    // { id: 102, category: "Second", imgSrc: img102 },
    // { id: 103, category: "Second", imgSrc: img103 },
    // { id: 104, category: "Second", imgSrc: img104 },
    // { id: 105, category: "Second", imgSrc: img105 },
    { id: 106, category: "Second", imgSrc: img106 },
    { id: 107, category: "Second", imgSrc: img107 },
    { id: 108, category: "Second", imgSrc: img108 },
    { id: 109, category: "Second", imgSrc: img109 },
    { id: 110, category: "Second", imgSrc: img110 },
    { id: 111, category: "Second", imgSrc: img111 },
    { id: 112, category: "Second", imgSrc: img112 },
    { id: 113, category: "Second", imgSrc: img113 },
    { id: 114, category: "Second", imgSrc: img114 },
    { id: 115, category: "Second", imgSrc: img115 },
  ];

  const getImg = (imgSrc: string) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  const filterImages = (category: string) => {
    setFilter(category);
    setShowMenu(false);
  };

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <Image
          loading="lazy"
          width={10000}
          height={10000}
          src={tempImgSrc}
          alt="image"
          className="Image"
        />
        <AiFillCloseCircle onClick={() => setModel(false)} />
      </div>
      <div className="flex flex-col justify-center space-y-2 lg:mb-4 mt-8 font-font ">
        <div className="relative inline-block text-left p-5">
          <div>
            <button
              type="button"
              className="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-purple-500 hover:text-white"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
              onClick={() => setShowMenu(!showMenu)}
            >
              <span>Filter Images</span>
              <IoFilterOutline className="-mr-1 ml-2 h-5 w-5" />
            </button>
            <div
              className={showMenu ? "block" : "hidden"}
              aria-labelledby="menu-button"
            >
              <motion.div
                initial={{
                  y: -5,
                  opacity: 0,
                }}
                transition={{ duration: 0.3 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="py-3 xl:flex xl:space-x-2"
              >
                <button
                  className={`${
                    filter === "All" ? "bg-purple-500 text-white " : ""
                  } block px-4 py-2 text-sm  border  border-purple-5  border-purple-500  hover:bg-purple-500 hover:text-white 00 w-[250px] mb-2`}
                  onClick={() => filterImages("All")}
                >
                  All
                  {filter === "All" && (
                    <IoMdDoneAll className="h-5 w-5 inline-block ml-2" />
                  )}
                </button>
                <button
                  className={`${
                    filter === "First" ? "bg-purple-500 text-white " : ""
                  } block px-4 py-2 text-sm border bottom-1 border-purple-500  hover:bg-purple-500 hover:text-white w-[250px] mb-2`}
                  onClick={() => filterImages("First")}
                >
                  Summercamp
                  {filter === "First" && (
                    <IoMdDoneAll className="h-5 w-5 inline-block ml-2" />
                  )}
                </button>
                <button
                  className={`${
                    filter === "Second" ? "bg-purple-500 text-white " : ""
                  } block px-4 py-2 text-sm  border bottom-1 border-purple-500  hover:bg-purple-500 hover:text-white w-[250px] mb-2 `}
                  onClick={() => filterImages("Second")}
                >
                  GYLA
                  {filter === "Second" && (
                    <IoMdDoneAll className="h-5 w-5 inline-block ml-2" />
                  )}
                </button>
                {/* <button
                  className={`${
                    filter === "Third" ? "bg-purple-500 text-white  " : ""
                  } block px-4 py-2 text-sm border border-purple-500 w-[250px] hover:bg-purple-500 hover:text-white xl:mb-2 `}
                  onClick={() => filterImages("Third")}
                >
                  Learning to learn
                  {filter === "Third" && (
                    <IoMdDoneAll className="h-5 w-5 inline-block ml-2" />
                  )}
                </button> */}
              </motion.div>
            </div>
          </div>
        </div>

        <div className="gallery">
          {data.map((item) => {
            if (filter === "All" || item.category === filter) {
              return (
                <div
                  className="pics"
                  key={item.id}
                  onClick={() => getImg(item.imgSrc.src)}
                >
                  <Image
                    loading="lazy"
                    width={10000}
                    height={10000}
                    src={item.imgSrc}
                    alt="image"
                    className="py-2"
                  />
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </>
  );
}
export default Gallery;
