

// 4_axios / weather.js

/*
    fetch : 
    axios :
*/
import axios from "axios";
import { useEffect, useState } from "react";

const App = ()=>{

        const[temp,setTemp] =useState('');
        const[desc,setDesc] =useState('');
        const [humidity ,setHumidity] =useState('');

    useEffect(()=>{

        axios.get('http://api.openweathermap.org/data/2.5/weather?q=Seoul,KR&appid=1db47184ebbc18af53fd996be840d270')
            .then(result => {
                console.log(result.data);
            
            setTemp(result.data.main.temp)
               setDesc(result.data.weather[0].description)
               setHumidity(result.data.main.humidity)

    }).catch(err => console.log(err))

},[])



    return(
        <div>
            {/* 온도 날씨 습도 화면에 출력 */}
            <p>온도:{temp}</p>
            <p>날씨 :{desc}</p>
            <p>습도:{humidity}</p>

        </div>
    )
}

export default App;