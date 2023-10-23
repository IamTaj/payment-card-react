import React, { useState } from 'react'
import './payment.css';


export default function Form() {
  const [errors, setErrors] = useState({});
  const [isFlipped, setIsFlipped] = useState(true);
  const [ErrMsg, setErrMsg] = useState(false);

  
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
      cvv:"",
      Val:"", 
      Expiry:"", 
      CardHolderName:"" 
    })
    const [temp, setTemp] = useState({tmpCardNo:"",tmpCVV:"",tmpVal:"",tmpExpiry:"", tmpCHN:""})

    const CardNo =(x) =>{
      setTemp({
        ...temp,
        tmpCardNo:x.target.value,
      })
    }
    const CVV =(x) =>{
      setTemp({
        ...temp,
        tmpCVV:x.target.value,
      })
    }
    const Val =(x) =>{
      setTemp({
        ...temp,
        tmpVal:x.target.value,
      })
    }
    const Exp =(x) =>{
      setTemp({
        ...temp,
        tmpExpiry:x.target.value,
      })
    }
    const CHN=(x) =>{
      setTemp({
        ...temp,
        tmpCHN:x.target.value,
      })
    }

    const show =(x) =>{
      //console.log(x);
      x.preventDefault();
      setData({
        ...data,
        CardNumber: temp.tmpCardNo,
        cvv: temp.tmpCVV,
        Val: temp.tmpVal,
        Expiry: temp.tmpExpiry,
        CardHolderName: temp.tmpCHN,
      })
    }
    const flip = () =>{
      setIsFlipped(previsFlipped => !previsFlipped);
    }
    const handleChange = (event) => {
      const { name, value } = event.target;
      setData((formData) => ({ ...formData, [name]: value }));
     let Err="";
      switch(name){
        case "plotno":
          if(!/^[0-9\b]+$/.test(value)){
           setErrMsg("Please enter the plot number in numerics");
          }else {
            setErrMsg("")
          }
          break;
          case "street":
            if(value?.match(/^[a-zA-Z ]*$/)){
              setErrMsg("")
            }
            else{
              setErrMsg("Please provide a valid street name")
            }
            break;
          case "landmark":
            if(value?.match(/^[a-zA-Z\s]+$/g)){
              setErrMsg("")
            }
            else{
              setErrMsg("Please enter the landmark in alphabets only")
            }
            break;

            case "city":
              if(value?.match(/^[a-zA-Z]*$/)){
              setErrMsg("")
              }
              else{
                setErrMsg("Please provide a valid city name");
              }
            break;

            case "state":
              if(value?.match(/^[a-zA-Z ]*$/)){
                setErrMsg("")
              }
              else{
                setErrMsg("Please provide a valid state name")
              }
              break;

              case "pincode":
                if(value?.match(/^[0-9]{5}$/)){
                  setErrMsg("")
                }
                else{
                  setErrMsg("Please enter the pincode in numerics and it must be 6 digits")
                }
                break;

              case "country":
                if(value?.match(/^[a-zA-Z ]*$/)){
                  setErrMsg("")
                }
                else{
                  setErrMsg("Please provide a valid country name")
                }
                break;
          default:
            setErrMsg("");    
      }
      setData({...data,[name]:value,[`${name}Err`]:ErrMsg})
    };
    const handleSubmit = (event) => {
      event.preventDefault();
        console.log(data)
      };
  return (
    <>
    <div className="container">
      <div className='form'>
        <div className="address">
        <h2>ADDRESS FORM</h2>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label for="formGroupExampleInput" className="form-label">Plot No</label>
            
            <input 
            type="text" 
            className="form-control" 
            id="plotno" 
            name='plotno' 
            placeholder="Plotno" 
            value={data.plotno}
            onChange={handleChange}/>
            <p className='error'> {data.plotnoErr} </p>
            </div>

            <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">Street</label>
            <input 
            type="text" 
            className="form-control" 
            id="street" 
            name='street' 
            placeholder="Street" 
            onChange={handleChange}/>
            <p className="error"> {data.streetErr} </p>
            </div>

            <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">LandMark</label>
            <input 
            type="text" 
            className="form-control" 
            id="landmark" 
            name='landmark' 
            placeholder="LandMark" 
            onChange={handleChange}/>
            <p className="error"> {data.landmarkErr} </p>
            </div>
            
            <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">City</label>
            <input type="text" className="form-control" id="city" name='city' placeholder="City"onChange={handleChange}/>
            <p className="error"> {data.cityErr} </p>
            </div>
            <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">State</label>
            <input type="text" className="form-control" id="state" name='state' placeholder="State" onChange={handleChange}/>
            <p className="error"> {data.stateErr} </p>
            </div>
            <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">Pincode</label>
            <input type="text" className="form-control" id="pincode" name='pincode' placeholder="Pincode" onChange={handleChange}/>
            <p className="error"> {data.pincodeErr} </p>
            </div>
            <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">Country</label>
            <input type="text" className="form-control" id="country" name='country' placeholder="Country" onChange={handleChange}/>
            <p className="error"> {data.countryErr} </p>
            </div>
            <button type="submit" id='submit' className="btn btn-secondary">Set Address</button>
        </form>
          </div>
        
        <div className="credit">
        <h2>CARD DETAILS</h2>

        <form onSubmit={show}>
          <div className="mb-3">
            <label for="formGroupExampleInput" className="form-label">Card Number</label>
            <input type="text" minLength={16} maxLength={16} className="form-control" id="cardnumber" placeholder="XXXX XXXX XXXX XXXX" name='cardnumber' pattern='[0-9]{16}' onChange={CardNo} required/>
          </div>
          <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">CVV</label>
            <input type="text" maxLength={3} className="form-control" id="cvv" placeholder="CVV" onChange={CVV} pattern="[0-9]{3}*"required/>
          </div>
          <div className="mb-3">
              <label for="formGroupExampleInput2" className="form-label">Valid From</label>
              <input type="month" className="form-control" id="expiry-mm" placeholder="MM/YY" onChange={Val} min="2017-02" required/>
          </div>
          <div className="mb-3">
              <label for="formGroupExampleInput2" className="form-label">Expiry</label>
              <input type="month" className="form-control" id="expiry-mm" placeholder="MM/YY"  onChange={Exp} min="2021-02" required/>
          </div>
          <div className="mb-3">
              <label for="formGroupExampleInput2" className="form-label">Card Holder Name</label>
              <input type="text" className="form-control" id="chn" placeholder="Card Holder Name" onChange={CHN} pattern="[a-zA-Z ]+$" required/>
          </div>
          <button type="submit" id='submit' className="btn btn-secondary" >Add Card</button>
        </form>

      </div>
      </div>
      <div className="card-display">
        
        <div className="flip-card">
        <p className="heading"><h4>Virtual Card</h4></p>
        <div className='atmcard'>
          {isFlipped?
          <div className="flip-card-inner">
            <div className="upper">
              <p className='bank-name'>XXXX Bank</p>
              <p className='card-type'>DEBIT CARD</p>
            </div>
            <div className="mid">
              <div className='chip'><img src="https://w7.pngwing.com/pngs/169/83/png-transparent-integrated-circuit-smart-card-card-chip-electronics-text-rectangle.png" height="50px"/></div>
              <div className='logo'><img src="https://www04.wellsfargomedia.com/assets/images/icons/212x131/contactless-indicator_212x131.png" height={"40px"} /></div>
            </div>
            <div className="cardno">
            <input type="text" maxLength={16} className="form-control" id="cardname" placeholder="XXXX XXXX XXXX XXXX" value={data.CardNumber} readOnly/>
            </div>
            <div className="card-valid">
            <div><p className='val'>Valid From : <input className='expiry' placeholder='MM/YY' value={data.Val} readOnly/></p></div>
              <div><p className='exp'>Valid Thru : <input className='expiry' placeholder='MM/YY' value={data.Expiry} readOnly/></p></div>
            </div>
            <div className="chn">
            <input type="text" className="form-control" id="chn" placeholder="Card Holder Name" value={data.CardHolderName.toUpperCase()}readOnly/>
            </div>
            </div>
            :
          <div className="flip-card-back">
            <div className='black-border'>____________________________________</div>
            <br />
            <div className="cvv">
              <div className="bird"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCdgSj2JgBBoWEUR49kYkloNEFuxn3ZPUIPw&usqp=CAU" width="45px" /></div>
              <input type="text"  maxLength={3} className="cvv-1" id="cvv" placeholder="CVV" value={data.cvv}  readOnly/>
            </div>
            <div className="down-info">
              <div className="info">This card is the property of XXXX Bank to it must be returned upon request or if found. The use of this card will be governed by our Banking Agreement. If found, please return to any branch of XXXX Bank </div> 
              <div className="help">
                <p>Helpline Numbers:</p>
                <ul>
                  <li>6601 4444/3940 4444 - Ahmedabad,Bengaluru, Chennai, Delhi, Hyderabad, Kolkata, Mumbai, Pune</li>
                  <li>6601 4444 - Allahbad, Amritsar, Bhubneshwar, Indore, Jalandhar, Kanpur, Lucknow, Ludhiana, Patna</li>
                  <li>3940 444 - Bhopal, Chnadigarh, Jaipur, Nagpur, Surat</li>
                  <li>011-6601 4444 - Gurgaon, Noida, Dehradun</li>
                  <li>022-66014444 - Guwahati, Cuttack, Mysore</li>
                </ul> 
              </div>
            </div>
          </div>
          }
          </div>
          
        </div>
     
        <div className='Button'>
        <button onClick={flip} className="btn btn-secondary">Flip</button>
        </div>
      </div>
    </div>
   </>
  )
}

