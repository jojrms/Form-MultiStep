import React from 'react';

function Etp5({formData, setFormData}){

    function removeAlert(){
        document.getElementById('btn-init').style.display = 'inherit';
        document.getElementById('btn-login').style.display = 'inherit';
        document.getElementById('div-alert-not-continue').style.display = 'none';
    }


    return (
        <div className='etp5'>
            <div className='exb-list'>
                {/* <div>
                    <span className='span-dec-input-radio'>
                        <input onClick={(removeAlert)(removeAll)} id='Windows' className='radio' value='Windows' type='radio' onChange={(event) => setFormData({...formData, sistemaOperacional: event.target.value})}/>  
                    </span>
                    <span className='span-text'>Windows</span>    
                </div>
                <div>
                    <span className='span-dec-input-radio'>
                        <input onClick={(removeAlert)(removeAll2)} id='Linux' className='radio' value='Linux' type='radio' onChange={(event) => setFormData({...formData, sistemaOperacional: event.target.value})}/>  
                    </span>
                    <span className='span-text'>Linux</span>    
                </div>
                <div>
                    <span className='span-dec-input-radio'>
                        <input onClick={(removeAlert)(removeAll3)} id='MacOS' className='radio' value='MacOS' type='radio' onChange={(event) => setFormData({...formData, sistemaOperacional: event.target.value})}/>  
                    </span>
                    <span className='span-text'>MacOS</span>    
                </div> */}

                <div>
                    <label className='input-radio'>
                        <input  onClick={removeAlert} id='radio-input' name='radio' value='Windows' type='radio' onChange={(event) => setFormData({...formData, sistemaOperacional: event.target.value})}/>
                        Windows
                    </label>
                    </div>
                    <div>
                    <label  className='input-radio'>
                        <input  onClick={removeAlert} id='radio-input' name='radio' value='Linux' type='radio' onChange={(event) => setFormData({...formData, sistemaOperacional: event.target.value})}/>
                        Linux
                    </label>
                    </div>
                    <div>
                    <label  className='input-radio'>
                        <input  onClick={removeAlert} id='radio-input' name='radio' value='MacOS' type='radio' onChange={(event) => setFormData({...formData, sistemaOperacional: event.target.value})}/>
                        MacOS
                    </label>
                    </div>
            </div>
        </div>
    )
}


export default Etp5;