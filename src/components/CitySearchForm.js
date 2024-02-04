import { useState } from "react";

const CitySearchForm = ({ setCity }) => {
    const [search, setSearch] = useState("");
  
    const handleSubmit = (e) => {
      e.target[0].blur();
      e.preventDefault();
  
      if (search !== "") {
        setCity(search.trimEnd().trimStart());
      }
    };
  
    const handleOnChange = (event) => {
      setSearch(event.target.value);
    };
  
    return (
      <div className=" bg-gray-200 border-solid border-gray-600 rounded-md border-2 p-3 m-auto max-w-[40rem]">
        <h1 className="text-4xl font-bold pb-2">Paieška</h1>
        <form
          onSubmit={handleSubmit}
          className="flex justify-center content-center items-stretch"
        >
          <input
            type="search"
            value={search}
            onChange={handleOnChange}
            placeholder="Įveskite miesto pavadinimą..."
            className="max-w-md p-2 rounded-md border-solid border-2 border-black w-full"
          />
          <button className="bg-gray-300 p-2 pr-7 pl-7 rounded-md border-solid border-2 border-black hover:bg-gray-400 transition-colors">
            <img src={require("../search.svg").default} className="h-4" alt="search"></img>
          </button>
        </form>
      </div>
    );
  };

  export default CitySearchForm