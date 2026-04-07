import React from "react";
import { GiElectric } from "react-icons/gi";
import { RiTeamLine } from "react-icons/ri";
import { MdEditNote } from "react-icons/md";
import image from "../assets/image.png";
import icon from "../assets/icon.png";

function HomePage() {
  return (
    <>
      <main className="bg-[#F3F4F6] mt-16 min-h-screen">
        {/* section 1 */}
        <section>
          <h1 className="text-5xl pt-32 px-114 font-bold">
            Shorten URLs. <span className="text-[#2563e8]">Share Easily.</span>
          </h1>
          <div className="mt-4">
            <h2 className="text-center">
              Create short, memorable links for your team communications.
            </h2>
            <h2 className="text-center">
              Transform long, cumbersome URLs into powerful digital assets that
            </h2>
            <h2 className="text-center">drive engagement.</h2>
          </div>
          <div className="flex gap-8 px-146 mt-12">
            <button className="bg-[#2563e8] text-white rounded px-8 py-2 text-lg">
              Get Started
            </button>
            <button className="text-[#2563e8] font-bold text-lg shadow px-8 py-2">
              Learn More
            </button>
          </div>
          <div className="px-150 mt-8 flex gap-4">
            <div className="p-4 bg-white flex gap-4 rounded">
              <input type="text" className="bg-white shadow p-2" />
              <button className="text-white bg-[#004ac6] px-4 py-2 rounded">
                shorten
              </button>
            </div>
          </div>
        </section>

        {/* section 2 */}
        <section className="bg-[#f3f4f5] z-10 mt-12">
          <h1 className="text-xl text-[#004ac6] pl-12">
            ARCHITECTURAL FEATURES
          </h1>
          <h2 className="pl-12 text-2xl font-bold">
            Built for Enterprise Precision
          </h2>

          <div className="flex px-12 gap-6 py-12 w-full">
            <div className="bg-white px-6 py-8 w-200">
              <div className="bg-[#dbe1ff] w-10 flex items-center justify-center px-2 py-3 rounded">
                <GiElectric />
              </div>
              <h1 className="font-bold mt-4 text-xl">Easy Create</h1>
              <p>Instanly generate high-performance short</p>
              <p>links with a single click or through our</p>
              <p>surgical API endpoints.</p>
            </div>
            <div className="bg-white px-6 py-8 w-200">
              <div className="bg-[#dbe1ff] w-10 flex items-center justify-center px-2 py-3 rounded">
                <MdEditNote />
              </div>
              <h1 className="font-bold mt-4 text-xl">Custom Slugs</h1>
              <p>Maintain brand authority with readeble,</p>
              <p>custom link endings that resonate with</p>
              <p>your digital audience.</p>
            </div>
            <div className="bg-white px-6 py-8 w-200">
              <div className="bg-[#dbe1ff] w-10 flex items-center justify-center px-2 py-3 rounded">
                <RiTeamLine />
              </div>
              <h1 className="font-bold mt-4 text-xl">Team Ready</h1>
              <p>Collaborate across departments with</p>
              <p>shared workspaces, permissions, and</p>
              <p>unified analytics dashboards.</p>
            </div>
          </div>
        </section>

        <section className="p-8 bg-white">
          <div className="flex">
            {/* left content */}
            <div>
              <img src={image} alt="image" className="rounded h-100" />
            </div>

            {/* right content */}
            <div className="mt-10 ml-20">
              <h1 className="text-[#64748b]">Data Driven Insights</h1>
              <h2 className="text-2xl font-bold mt-2">
                Observe your link architecture in real time.
              </h2>
              <p className="text-[#434655] mt-2">
                Every click is a data point. Our dashboard provides surgical
                precision into
              </p>
              <p className="text-[#434655]">
                where your traffic originates, who is engaging, and how your
                team
              </p>
              <p className="text-[#434655]">
                communications are performing across the globe.
              </p>

              <div className="mt-6">
                <div className="flex gap-2">
                  <img src={icon} alt="icon" />
                  <p className="text-[#191c1d]">Geographic Distribution Maps</p>
                </div>
                <div className="flex gap-2 mt-2">
                  <img src={icon} alt="icon" />
                  <p className="text-[#191c1d]">Device & Browser Breakdown</p>
                </div>
                <div className="flex gap-2 mt-2">
                  <img src={icon} alt="icon" />
                  <p className="text-[#191c1d]">UTM Parameter Tracking</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default HomePage;
