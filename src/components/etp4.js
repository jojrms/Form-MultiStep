import React from 'react';

function Etp4({formData, setFormData}){

    //Guarda as opções em uma array
    const gostos = [
        'Rock',
        'Reggae',
        'Sertanejo',
        'Funk',
        'Axé',
        'Samba'
    ];
    function removeAlert(){
        document.getElementById('btn-init').style.display = 'inherit';
        document.getElementById('btn-login').style.display = 'inherit';
        document.getElementById('div-alert-not-continue').style.display = 'none';
    }

    return (
        <div className='etp4'>
            <div className='exb-list'>
                {/* Realiza um map da array e individualiza cada elemento */}
                {gostos.map((item, index) =>(
                    <div key={index}>
                        <span className='span-dec-input-checkbox'>
                            <input onClick={removeAlert} id='input-checkbox' value={item} type='checkbox'
                            onChange={(event) => setFormData({...formData, preferenciaMusical: event.target.value})}/>  
                            <span id='span-checked'></span>  
                        </span>
                        <span className='span-text'>{item}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default Etp4;