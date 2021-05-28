import React from "react";

// components

import Navbar from "./AuthNavbar";
import Footer from "./Footer";

export default function Landing() {
  return (
    <>
      <Navbar transparent />

      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://miro.medium.com/max/15904/0*l0m1kjPSi-DuIegt')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    About Summent
                  </h1>
                  <p className="mt-4 text-lg text-gray-300">
                    Summent is an online tool that automatically generates abstract summaries 
                    from patent documents using breakthrough machine learning techniques such  as
                    Sequence-to-Sequence learning.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-gray-300 -mt-24">
          <div className="container mx-auto px-4" >
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center zoom">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <h6 className="text-xl font-semibold">Why use Summent?</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                        Almost 80% of modern technical information is exclusive to  patents but they
                        remain an often overlooked ocean of knowledge that can be explored easily with Summent.  
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center zoom">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">                    
                    <h6 className="text-xl font-semibold">Why abstract summary?</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                       Abstractive summarization condenses information from the
                       original document into a novel summary with a different construct that 
                       is easier to read and understand.

                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center zoom">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <h6 className="text-xl font-semibold">How is it done?</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Summent uses Google's Pegasus, a Sequence-to-Sequence architecture 
                      which has achieved State-of-the-Art results in abstractive text summarization. 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Meet us</h2>
                <p className="text-lg leading-relaxed m-4 text-gray-600">
                  We are students of Pune Institute of Computer Technology who have
                  developed this product as our capstone project.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("./vishap.jpg")}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Vishap Malik</h5>
                    <div className="mt-6">
                      <button
                        className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      ><a href="https://www.linkedin.com/in/vishap-malik-b99a11191/" target="blank">
                        <i className="fab fa-linkedin"></i>
                        </a>
                      </button>
                      <button
                        className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      ><a href="https://www.facebook.com/vishap.kanwar.1" target="blank">
                        <i className="fab fa-facebook-f"></i>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("./sakshi.jpeg")}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Sakshi Tantak</h5>
                    
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      ><a href="https://www.linkedin.com/in/sakshitantak/" target="blank">
                        <i className="fab fa-linkedin"></i>
                        </a>
                      </button>
                      <button
                        className="bg-black text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      ><a href="https://twitter.com/sushiwithsakshi" target="blank">
                        <i className="fab fa-twitter"></i>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("./neel.jpeg")}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Neelanjney Pilarisetty</h5>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      ><a href="https://www.linkedin.com/in/neelanjney/" target="blank">
                        <i className="fab fa-linkedin"></i>
                        </a>
                      </button>
                      <button
                        className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      ><a href="https://twitter.com/Neelanjney" target="blank">
                        <i className="fab fa-twitter"></i>
                        </a>
                      </button>
                      <button
                        className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      ><a href="https://www.instagram.com/Neelanjney/" target="blank">
                        <i className="fab fa-instagram"></i>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
