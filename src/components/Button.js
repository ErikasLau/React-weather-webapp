const Button = ({cityName, city, setCity}) => {
    const handleOnclick = () => {
      if (cityName !== city){
        setCity(cityName)
      }
    }
    return(
      <button className="p-2 w-[9rem] m-[0.4rem] pr-4 pl-4 text-lg font-bold uppercase border-2 border-solid border-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors" onClick={handleOnclick}>{cityName}</button>
    )
  }

  export default Button