import { useState } from "react"

function MyForm(props){
const [nameValue, setNameValue] = useState('');
const [messageValue, setMessageValue] = useState('');
const [countryValue, setCountryValue]=useState('');
const[genderValue,setGenderValue]=useState('');

const handleName = (event) => {
    setNameValue(event.target.value);
}

const handleMessage = (event) => {
    setMessageValue(event.target.value);
}

const handleCountry = (event) => {
    setCountryValue(event.target.value);
    
}

const handleGender = (event) => {
    setGenderValue(event.target.value);
    
}






const handleSubmit = (event) => {
    event.preventDefault();
    let message = `이름 : ${nameValue}\n메세지 : ${messageValue}\n여행갈 나라:${countryValue}\n성별:${genderValue}`;
    alert(message);
}





return (
    <form onSubmit={handleSubmit}>
<label>이름</label>
<input type="text" value={nameValue} onChange={handleName} /><br />
<hr />

<label>메세지</label>
<textarea value={messageValue} onChange={handleMessage}></textarea><br />

<label>여행갈 나라는</label>
<select value ={countryValue} onChange={handleCountry}>
        <option>외국</option>
        <option>멀리</option>
        <option>부탄</option>
        <option>한국</option>
</select>
<label>성별</label>
<input type='radio' name='gender' value='male' onChange={handleGender} />남자
<input type='radio' name='gender' value='female'onChange={handleGender} />여자

<hr />
<button type='submit'>전송</button>
    </form>
)
}

export default MyForm;
