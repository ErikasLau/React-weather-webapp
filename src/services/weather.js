import axios from 'axios'
import Cookies from 'js-cookie';

const getAll = (city) => {
    return axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OWM_API_KEY}&units=metric`
      )
      .then((res) => res.data);
  };
  
  const getAllForecast = (city) => {
    return axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_OWM_API_KEY}&units=metric`
      )
      .then((res) => {
        Cookies.set('city', city)
        console.log(Cookies.get('city'))
        return res.data
      });
  };

  export default { getAll, getAllForecast }