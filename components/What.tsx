import React from "react";
import Image from "next/image";

function What() {
  return (
    <div>
      <div className="text-center mt-10">
        <h1 className="font-font font-medium text-3xl">What we do</h1>
      </div>

      <div className="grid space-x-3 text-center mt-24 lg:mt-36 md:px-28 px-10 lg:grid-cols-2 xl:grid-cols-4">
        <div className="px-10 pt-5">
          <Image
            width={50}
            height={50}
            className=" mr-auto ml-auto "
            src="/icons8-teenager-male-50.png"
            alt=""
          />
          <h1 className="text-xl font-font font-bold pt-3">Young People</h1>
          <p className="text-sm font-light font-font pt-3">
            It empowers and enables participants to lead themselves to greatness
            and adequately prepares them to lead others effectively.
          </p>
        </div>

        <div className="px-10 pt-5">
          <Image
            width={50}
            height={50}
            className=" mr-auto ml-auto "
            src="/icons8-family-50.png"
            alt=""
          />
          <h1 className="text-xl font-font font-bold pt-3">Parenting</h1>
          <p className="text-sm font-light font-font pt-3">
            We provide parents with researched information that will support
            their wards live principled lives, succession and leaving behind a
            legacy for their wards.
          </p>
        </div>
        <div className="px-10 pt-5">
          <Image
            width={50}
            height={50}
            className=" mr-auto ml-auto "
            src="/icons8-student-center-50.png"
            alt=""
          />
          <h1 className="text-xl font-font font-bold pt-3">Educators</h1>
          <p className="text-sm font-light font-font pt-3">
            Our programmes span personal, professional development and financial
            development of the teacher to become a highly effective individual
            hence better teacher.
          </p>
        </div>
        <div className="px-10 pt-5">
          <Image
            width={50}
            height={50}
            className=" mr-auto ml-auto "
            src="/icons8-manager-50.png"
            alt=""
          />
          <h1 className="text-xl font-font font-bold pt-2">
            Corporate Executive
          </h1>
          <p className="text-sm font-light font-font pt-3">
            We provide corporate training services in personal mastery, report
            writing, project management, goal setting, coaching and mentoring.
          </p>
        </div>
      </div>
    </div>
  );
}

export default What;
