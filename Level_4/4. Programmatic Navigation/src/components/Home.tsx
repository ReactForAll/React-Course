import { useQueryParams } from "raviger";
import { useState } from "react";
import Logo from "../logo.svg";
import { formData } from "../types/form";
import { getLocalForms } from "../utils/storageUtils";

const savedForms: formData[] = getLocalForms();
export default function Home() {
  const [{ search }, setQuery] = useQueryParams();
  const [searchString, setSearchString] = useState("");
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="flex items-center justify-center h-full">
        <img
          className="h-48 w-48"
          src={Logo}
          alt="logo"
          style={{ animation: "spin 2s infinite linear" }}
        />
        <p className="text-xl">
          Welcome to Level 4 of the{" "}
          <span className="font-bold text-gray-800">React Typescript</span>{" "}
          Course{" "}
        </p>
      </div>
      <h1 className="text-2xl font-bold text-gray-800">Saved Forms</h1>
      <div className="flex flex-wrap items-center justify-center p-4">
        {/* Search Bar */}
        <form
          className="w-full"
          onSubmit={(e) => {
            e.preventDefault();
            setQuery({ search: searchString });
          }}
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-search"
              >
                Search
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-search"
                name="search"
                value={searchString}
                onChange={(e) => setSearchString(e.target.value)}
                type="search"
                placeholder="Search"
              />
            </div>
          </div>
        </form>
        {savedForms
          .filter(
            (form) =>
              form.title?.toLowerCase().includes(search.toLowerCase()) || false
          )
          .map((form) => (
            <a
              href={`/form/${form.id}`}
              className="bg-gray-200 shadow-lg rounded-xl p-4 m-4"
            >
              <h2 className="text-xl">{form.title}</h2>
            </a>
          ))}
      </div>
    </div>
  );
}
