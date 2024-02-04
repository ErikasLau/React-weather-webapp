const time = (unix_time, timezone) => {
    const localDate = new Date((unix_time + timezone) * 1000);
    const formattedTime = localDate.toISOString().substring(11, 16)
  
    return formattedTime;
  };
  
  const currTime = (timezone) => {
    const localDate = new Date(Date.now() + timezone*1000)
    const formattedTime = localDate.toISOString().substring(11, 19)
  
    return formattedTime
  }

  export default {time, currTime}