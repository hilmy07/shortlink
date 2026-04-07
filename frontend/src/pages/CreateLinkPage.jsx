import React from "react";
import { Link } from "react-router";
import { LiaEyeSolid } from "react-icons/lia";
import { GiElectric } from "react-icons/gi";

function CreateLinkPage() {
  return (
    <>
      <main className="min-h-screen bg-[#F3F4F6] pt-24 pb-12">
        <div className="px-90">
          <Link
            to="/dashboard"
            className="text-[#004ac6] font-medium hover:text-blue-500"
          >
            {"<"} Back to Dashboard
          </Link>

          <h1 className="text-2xl mt-4 font-medium">Create New Short Link</h1>
          <p className="mt-2">
            Transform your long URLs into clean, manageable assets.
          </p>
        </div>

        <div className="px-90 mt-8">
          <form className="bg-white p-8 rounded">
            <div>
              <label htmlFor="url" className="font-medium">
                Destination URL *
              </label>
              <br />
              <input
                type="text"
                id="url"
                className="p-2 border border-[#c3c6d7] w-full mt-2 rounded"
              />
              <p className="text-[#434655]">
                Ensure your URL starts with http:// or https://
              </p>
            </div>

            <div className="mt-4">
              <label htmlFor="slug" className="font-medium">
                CUSTOM SLUG (OPTIONAL)
              </label>
              <br />
              <input
                type="text"
                id="slug"
                className="p-2 border border-[#c3c6d7] w-full mt-2 rounded"
              />
              <p className="text-[#434655]">
                Leave blank to generate a random unique identifier.
              </p>
            </div>

            <div className="mt-10 rounded border-[#b4c5ff] bg-[#dbe1ff] p-6">
              <div className="flex items-center gap-4">
                <LiaEyeSolid className="w-6 h-6 text-[#004ac6]" />
                <p className="text-[#004ac6] font-medium">LIVE PREVIEW</p>
              </div>
              <p className="ml-10">
                Your short link will be:{" "}
                <span className="text-[#004ac6]">
                  https://short.link/my-custom-slug
                </span>
              </p>
            </div>

            <div className="flex gap-4 mb-4">
              <button className="flex items-center gap-2 mt-6 text-white bg-[#004ac6] rounded px-6 py-2 cursor-pointer">
                <p>Create Link</p>
                <GiElectric />
              </button>

              <button className="flex items-center gap-2 mt-6 rounded px-10 py-2 cursor-pointer shadow">
                <p>Cancel</p>
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default CreateLinkPage;
