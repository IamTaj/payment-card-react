import React, { useState } from 'react'
import './payment.css';


export default function Payment() {
  const [errors, setErrors] = useState({});
  const [isFlipped, setIsFlipped] = useState(true);

  
  const [data, setData] = useState(
    { 
      plotno:"", 
      street:"",
      landmark:"",
      city:"",
      state:"",
      pincode:"",
      country:"",
      CardNumber:"", 
      c:"",
      al:"", 
      Expiry:"", 
      CardHolderName:"" 
    })
    const [temp, setTemp] = useState({tmpCardNo:"",tmpC:"",tmpal:"",tmpExpiry:"", tmpCHN:""})

    const CardNo =(x) =>{
      setTemp({
        ...temp,
        tmpCardNo:x.target.alue,
      })
    }
    const C =(x) =>{
      setTemp({
        ...temp,
        tmpC:x.target.alue,
      })
    }
    const al =(x) =>{
      setTemp({
        ...temp,
        tmpal:x.target.alue,
      })
    }
    const Exp =(x) =>{
      setTemp({
        ...temp,
        tmpExpiry:x.target.alue,
      })
    }
    const CHN=(x) =>{
      setTemp({
        ...temp,
        tmpCHN:x.target.alue,
      })
    }

    const show =(x) =>{
      //console.log(x);
      x.preentDefault();
      setData({
        ...data,
        CardNumber: temp.tmpCardNo,
        c: temp.tmpC,
        al: temp.tmpal,
        Expiry: temp.tmpExpiry,
        CardHolderName: temp.tmpCHN,
      })
    }
    const flip = () =>{
      setIsFlipped(preisFlipped => !preisFlipped);
    }
  
    const alidate = () =>{
      const {plotno, street,landmark,city,state,pincode,country} = data;
      const error = {};
      if(!plotno){
        error.plotno = "Please enter a plot number"
      }
      if(!street){
        error.street = "Please proide a street name"
      }
      else if(!/^[A-Za-z]+( [A-Za-z]+)*$/.test(street)){
        error.street = "Please enter a alid street name of 2 words"
      }
      if(!landmark){
        if(landmark.length<3)
        error.landmark = "Please proide a land mark"
      }
      else if(!isNaN(landmark)){
        error.landmark = "Please enter the landmark in alphabets only"
      }
      if(!city){
        error.city = "Please enter a city name"
      }
      else if(city.includes(" ")){
        error.city = " Please enter the city name in one word"
      }
      if(!state){
        error.state = "Please enter a state name"
      }
      else if(!isNaN(state)){
        error.state = "Please enter the state in alphabets"
      }
      if(!pincode){
        error.pincode = "Please enter a pincode"
      }
      else if(isNaN(pincode)){
        error.pincode = "Please enter the pincode in numbers"
      }
      if(!country){
        error.country = "Please enter a alid country"
      }
      else if(!isNaN(country)){
        error.country = "Please enter the country name in alphabets only"
      }
      return error;
    }

    const handleChange = (eent) => {
      const { name, alue } = eent.target;
      setData((formData) => ({ ...formData, [name]: alue }));
      setErrors((errors) => ({ ...errors, [name]: "" }));
    };

    const handleSubmit = (eent) => {
      eent.preentDefault();
      const error = alidate();
      setErrors(error);
      if (Object.keys(error).length === 0) {
      
        console.log(data)
      };
    }
  

  return (
    <>
    <di className="container">
      <di className='form'>
        <di className="address">
        <h2>ADDRESS FORM</h2>
        <form onSubmit={handleSubmit}>
        <di className="mb-3">
            <label for="formGroupExampleInput" className="form-label">Plot No</label>
            
            <input 
            type="number" 
            className="form-control" 
            id="plotno" 
            name='plotno' 
            placeholder="Plotno" 
            onChange={handleChange}/>
            <p className='error'> {errors.plotno} </p>
            </di>

            <di className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">Street</label>
            <input 
            type="text" 
            className="form-control" 
            id="street" 
            name='street' 
            placeholder="Street" 
            onChange={handleChange}/>
            <p className="error"> {errors.street} </p>
            </di>

            <di className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">LandMark</label>
            <input 
            type="text" 
            className="form-control" 
            id="landmark" 
            name='landmark' 
            placeholder="LandMark" 
            onChange={handleChange}/>
            <p className="error"> {errors.landmark} </p>
            </di>
            
            <di className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">City</label>
            <input type="text" className="form-control" id="city" name='city' placeholder="City"onChange={handleChange}/>
            <p className="error"> {errors.city} </p>
            </di>
            <di className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">State</label>
            <input type="text" className="form-control" id="state" name='state' placeholder="State" onChange={handleChange}/>
            <p className="error"> {errors.state} </p>
            </di>
            <di className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">Pincode</label>
            <input type="text" className="form-control" id="pincode" name='pincode' placeholder="Pincode" onChange={handleChange}/>
            <p className="error"> {errors.pincode} </p>
            </di>
            <di className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">Country</label>
            <input type="text" className="form-control" id="country" name='country' placeholder="Country" onChange={handleChange}/>
            <p className="error"> {errors.country} </p>
            </di>
            <button type="submit" id='submit' className="btn btn-secondary">Set Address</button>
        </form>
          </di>
        
        <di className="credit">
        <h2>CARD DETAILS</h2>

        <form onSubmit={show}>
          <di className="mb-3">
            <label for="formGroupExampleInput" className="form-label">Card Number</label>
            <input type="text" minLength={19} maxLength={19} className="form-control" id="cardnumber" placeholder="XXXX XXXX XXXX XXXX" name='cardnumber' pattern='[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}'  onChange={CardNo} required/>
          </di>
          <di className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">C</label>
            <input type="text" maxLength={3} className="form-control" id="c" placeholder="C" onChange={C} pattern="[0-9]*"required/>
          </di>
          <di className="mb-3">
              <label for="formGroupExampleInput2" className="form-label">alid From</label>
              <input type="text" className="form-control" id="expiry-mm" placeholder="MM/YY" pattern='[0-9]{2}/[0-9]{2}'  onChange={al} required/>
          </di>
          <di className="mb-3">
              <label for="formGroupExampleInput2" className="form-label">Expiry</label>
              <input type="text" className="form-control" id="expiry-mm" placeholder="MM/YY" pattern='[0-9]{2}/[0-9]{2}' onChange={Exp} required/>
          </di>
          <di className="mb-3">
              <label for="formGroupExampleInput2" className="form-label">Card Holder Name</label>
              <input type="text" className="form-control" id="chn" placeholder="Card Holder Name" onChange={CHN} required/>
          </di>
          <button type="submit" id='submit' className="btn btn-secondary">Add Card</button>
        </form>

      </di>
      </di>
      <di className="card-display">
        
        <di className="flip-card">
        <p className="heading"><h4>irtual Card</h4></p>
        <di className='atmcard'>
          {isFlipped?
          <di className="flip-card-inner">
            <di className="upper">
              <p className='bank-name'>XXXX Bank</p>
              <p className='card-type'>DEBIT CARD</p>
            </di>
            <di className="mid">
              <di className='chip'><img src="https://w7.pngwing.com/pngs/169/83/png-transparent-integrated-circuit-smart-card-card-chip-electronics-text-rectangle.png" height="50px"/></di>
              <di className='logo'><img src="https://www04.wellsfargomedia.com/assets/images/icons/212x131/contactless-indicator_212x131.png" height={"40px"} /></di>
            </di>
            <di className="cardno">
            <input type="text" maxLength={19} className="form-control" id="cardname" placeholder="XXXX XXXX XXXX XXXX" alue={data.CardNumber} readOnly/>
            </di>
            <di className="card-alid">
            <di><p className='al'>alid From : <input className='expiry' placeholder='MM/YY' alue={data.al} readOnly/></p></di>
              <di><p className='exp'>alid Thru : <input className='expiry' placeholder='MM/YY' alue={data.Expiry} readOnly/></p></di>
            </di>
            <di className="chn">
            <input type="text" className="form-control" id="chn" placeholder="Card Holder Name" alue={data.CardHolderName.toUpperCase()}readOnly/>
            </di>
            </di>
            :
          <di className="flip-card-back">
            <di className='black-border'>____________________________________</di>
            <br />
            <di className="c">
              <di className="bird"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCdgSj2JgBBoWEUR49kYkloNEFuxn3ZPUIPw&usqp=CAU" width="45px" /></di>
              <input type="text"  maxLength={3} className="c-1" id="c" placeholder="C" alue={data.c}  readOnly/>
            </di>
            <di className="down-info">
              <di className="info">This card is the property of XXXX Bank to it must be returned upon request or if found. The use of this card will be goerned by our Banking Agreement. If found, please return to any branch of XXXX Bank </di> 
              <di className="help">
                <p>Helpline Numbers:</p>
                <ul>
                  <li>6601 4444/3940 4444 - Ahmedabad,Bengaluru, Chennai, Delhi, Hyderabad, Kolkata, Mumbai, Pune</li>
                  <li>6601 4444 - Allahbad, Amritsar, Bhubneshwar, Indore, Jalandhar, Kanpur, Lucknow, Ludhiana, Patna</li>
                  <li>3940 444 - Bhopal, Chnadigarh, Jaipur, Nagpur, Surat</li>
                  <li>011-6601 4444 - Gurgaon, Noida, Dehradun</li>
                  <li>022-66014444 - Guwahati, Cuttack, Mysore</li>
                </ul> 
              </di>
            </di>
          </di>
          }
          </di>
          
        </di>
     
        <di className='Button'>
        <button onClick={flip} className="btn btn-secondary">Flip</button>
        </di>
      </di>
    </di>
   </>
  )
}

