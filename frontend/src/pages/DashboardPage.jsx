import React from "react";
import { MdInsertLink, MdContentCopy, MdDateRange } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosStats } from "react-icons/io";

function DashboardPage() {
  return (
    <>
      <main className="min-h-screen pt-24 bg-[#F3F4F6]">
        {/* section 1 */}
        <section>
          <div className="flex justify-between px-90 items-center">
            <h1 className="font-medium text-xl">My Links</h1>
            <h1 className="text-[#64748b]">TOTAL ACTIVE</h1>
          </div>

          <div className="flex justify-between px-90 items-center">
            <p className="text-[#64748b]">
              Manage and track your shortened digital assets
            </p>
            <p className="text-[#004ac6] font-bold text-2xl">124</p>
          </div>

          <div className="px-90 mt-6">
            <input
              type="text"
              className="shadow p-2 w-full rounded bg-white"
              placeholder="Search by name or URL..."
            />
          </div>
        </section>

        {/* section 2 */}
        <section>
          <div className="px-90 mt-6 pb-6">
            <div className="bg-white p-6 rounded">
              <div className="flex items-center gap-2">
                <MdInsertLink className="w-6 h-6 mt-1" />
                <p className="text-[#004ac6] font-medium">shrt.lnk/aB3x9</p>
              </div>

              <div className="flex justify-between items-center">
                <p className="text-[#434655]">
                  https://wwww.architecturaldigest.com/story/modern-mini...
                </p>
                <div className="flex gap-2">
                  <button className="p-2 bg-[#acbfff] rounded cursor-pointer">
                    <MdContentCopy />
                  </button>
                  <button className="p-2 shadow rounded cursor-pointer">
                    <RiDeleteBin6Line />
                  </button>
                </div>
              </div>

              <div className="flex gap-2">
                <div className="flex">
                  <MdDateRange className="w-6 h-6 text-[#94a3b8]" />
                  <p className="text-[#94a3b8] font-medium">OCT 24, 2023</p>
                </div>
                <div className="flex">
                  <IoIosStats className="w-6 h-6 text-[#94a3b8]" />
                  <p className="text-[#94a3b8] font-medium">1.2K CLICKS</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded mt-6">
              <div className="flex items-center gap-2">
                <MdInsertLink className="w-6 h-6 mt-1" />
                <p className="text-[#004ac6] font-medium">shrt.lnk/aB3x9</p>
              </div>

              <div className="flex justify-between items-center">
                <p className="text-[#434655]">
                  https://wwww.architecturaldigest.com/story/modern-mini...
                </p>
                <div className="flex gap-2">
                  <button className="p-2 bg-[#acbfff] rounded cursor-pointer">
                    <MdContentCopy />
                  </button>
                  <button className="p-2 shadow rounded cursor-pointer">
                    <RiDeleteBin6Line />
                  </button>
                </div>
              </div>

              <div className="flex gap-2">
                <div className="flex">
                  <MdDateRange className="w-6 h-6 text-[#94a3b8]" />
                  <p className="text-[#94a3b8] font-medium">OCT 24, 2023</p>
                </div>
                <div className="flex">
                  <IoIosStats className="w-6 h-6 text-[#94a3b8]" />
                  <p className="text-[#94a3b8] font-medium">1.2K CLICKS</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded mt-6">
              <div className="flex items-center gap-2">
                <MdInsertLink className="w-6 h-6 mt-1" />
                <p className="text-[#004ac6] font-medium">shrt.lnk/aB3x9</p>
              </div>

              <div className="flex justify-between items-center">
                <p className="text-[#434655]">
                  https://wwww.architecturaldigest.com/story/modern-mini...
                </p>
                <div className="flex gap-2">
                  <button className="p-2 bg-[#acbfff] rounded cursor-pointer">
                    <MdContentCopy />
                  </button>
                  <button className="p-2 shadow rounded cursor-pointer">
                    <RiDeleteBin6Line />
                  </button>
                </div>
              </div>

              <div className="flex gap-2">
                <div className="flex">
                  <MdDateRange className="w-6 h-6 text-[#94a3b8]" />
                  <p className="text-[#94a3b8] font-medium">OCT 24, 2023</p>
                </div>
                <div className="flex">
                  <IoIosStats className="w-6 h-6 text-[#94a3b8]" />
                  <p className="text-[#94a3b8] font-medium">1.2K CLICKS</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded mt-6">
              <div className="flex items-center gap-2">
                <MdInsertLink className="w-6 h-6 mt-1" />
                <p className="text-[#004ac6] font-medium">shrt.lnk/aB3x9</p>
              </div>

              <div className="flex justify-between items-center">
                <p className="text-[#434655]">
                  https://wwww.architecturaldigest.com/story/modern-mini...
                </p>
                <div className="flex gap-2">
                  <button className="p-2 bg-[#acbfff] rounded cursor-pointer">
                    <MdContentCopy />
                  </button>
                  <button className="p-2 shadow rounded cursor-pointer">
                    <RiDeleteBin6Line />
                  </button>
                </div>
              </div>

              <div className="flex gap-2">
                <div className="flex">
                  <MdDateRange className="w-6 h-6 text-[#94a3b8]" />
                  <p className="text-[#94a3b8] font-medium">OCT 24, 2023</p>
                </div>
                <div className="flex">
                  <IoIosStats className="w-6 h-6 text-[#94a3b8]" />
                  <p className="text-[#94a3b8] font-medium">1.2K CLICKS</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* section 3 */}
        <section>
          <div className="px-90 pb-12 flex justify-between items-center">
            <div>
              <p className="text-lg">{"<"} Prev Page</p>
            </div>

            <div className="flex items-center gap-4">
              <p className="bg-[#cad6ff] rounded py-2 px-4">1</p>
              <p>Of</p>
              <p className="rounded">5</p>
            </div>

            <div>
              <p className="text-lg">Next Page {">"}</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default DashboardPage;
