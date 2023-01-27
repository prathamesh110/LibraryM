import React from 'react'

import topbg from '../assets/top-deco.png'
import bottombg from '../assets/bottom-deco.png'
import Header from '../components/Header'

const AboutUs = () => {
  return (
    <>
      <div className="w-full h-full">
        <div>
          <div className="absolute z-10 w-full h-full overflow-y-hidden">
            <div className=" grid grid-rows-2">
              <div className="flex justify-end">
                <img
                  className="w-48 h-48 md:w-64 md:h-64"
                  src={topbg}
                  alt=""
                ></img>
              </div>

              <div className="flex items-end  pt-48 md:pt-32 ">
                <img
                  className="w-48 h-48 md:w-64 md:h-64"
                  src={bottombg}
                  alt=""
                ></img>
              </div>
            </div>
          </div>
          <div className="absolute z-20 w-full h-full">
            <div className="">
              <div className="h-2/6">
                <Header />
              </div>
              <div className="h-4/6 flex justify-center py-4">
                <div className="h-2/4 w-3/4  flex justify-center items-center ">
                  <div className=" text-[#9D8189]">
                    <div className="flex items-end">
                      <h1 className="text-6xl mx-2">ARCHIVE</h1>
                      <span>
                        <h1 className="text-3xl">THE LIBRARY</h1>
                      </span>
                    </div>
                    <div className="flex justify-center mx-3 my-2">
                      <h2 className="text-xl">
                        A library is a collection of materials, books or media
                        that are accessible for use and not just for display
                        purposes. A library provides physical (hard copies) or
                        digital access (soft copies) materials, and may be a
                        physical location or a virtual space, or both. A
                        library's collection can include printed materials and
                        other physical resources in many formats such as DVD, CD
                        and cassette as well as access to information, music or
                        other content held on bibliographic databases.
                      </h2>
                    </div>
                    <div className="flex justify-center mx-3 my-2">
                      <h2 className="text-xl">
                        A library, which may vary widely in size, may be
                        organized for use and maintained by a public body such
                        as a government; an institution such as a school or
                        museum; a corporation; or a private individual. In
                        addition to providing materials, libraries also provide
                        the services of librarians who are trained and experts
                        at finding, selecting, circulating and organizing
                        information and at interpreting information needs,
                        navigating and analyzing very large amounts of
                        information with a variety of resources.
                      </h2>
                    </div>
                    <div className="flex justify-center mx-3 my-2">
                      <h2 className="text-xl">
                        Library buildings often provide quiet areas for
                        studying, as well as common areas for group study and
                        collaboration, and may provide public facilities for
                        access to their electronic resources; for instance:
                        computers and access to the Internet. The library's
                        clientele and services offered vary depending on its
                        type: users of a public library have different needs
                        from those of a special library or academic library, for
                        example. Libraries may also be community hubs, where
                        programs are delivered and people engage in lifelong
                        learning. Modern libraries extend their services beyond
                        the physical walls of a building by providing material
                        accessible by electronic means, including from home via
                        the Internet.
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs