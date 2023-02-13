import React , {useState} from 'react'
import axios from 'axios';
import './Weather.css'
function Weather() {
    const [data,setData] = useState({})
    const [location,setLocation] = useState('')
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=24b45b99b6eeb3348b93f4f9fe88315f`;

    const searchLocation = (e) => {
        if(e.key === 'Enter') {
            axios.get(url).then((response) => {
                setData(response.data);
                console.log(response.data);
            })
            
        }

    }
  return (
    <>
        <div className="container">
            <div className="search">
                <input type="text" value={location} placeholder='Enter Location' onChange={e => setLocation(e.target.value)} onKeyPress={searchLocation} />
            </div>
            <div className="top">
                <div className="location">
                    <p>{data.name}</p>
                </div>
                <div className="temp">
                    {
                        data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null
                    }
                  
                </div>
                <div className="desc">
                   
                    {
                        data.main ? <p>{data.weather[0].description} </p> : null
                    }
                </div>
            </div>

           {data.name !== undefined && 
           
                <div className="bottom">
                    <div className="feels">
                        {
                            data.main ? <p>{data.main.feels_like}°F</p>  : null
                        }
                        
                        {
                            data.main ? <p>Feels Like</p>  : null
                        }
                    </div>
                    <div className="humidity">
                        {
                            data.main ? <p>{data.main.humidity}%</p>  : null
                        }
                        {
                            data.main ? <p>Humidity</p>  : null
                        }
                        
                    </div>
                    <div className="wind">
                        {
                            data.wind ? <p>{data.wind.speed} MPH</p>  : null
                        }
                        {
                            data.wind ? <p>Wind</p>  : null
                        }
                        
                    </div>  
                </div>           
           }
        </div>
    </>
  )
}

export default Weather
