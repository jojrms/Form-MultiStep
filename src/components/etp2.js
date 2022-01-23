import React from 'react';
import removeAlert from './MultiStepForm';


function Etp2({formData, setFormData}){

    function removeAlert(){
        document.getElementById('btn-init').style.display = 'inherit';
        document.getElementById('btn-login').style.display = 'inherit';
        document.getElementById('div-alert-not-continue').style.display = 'none';
    }


    return (
        <div className='etp2'>
                <section className='form1'>
                    <input id='input-name' onClick = {removeAlert} className='input-info' type='text' 
                    placeholder='Nome' value = {formData.nome} onChange={(event) => setFormData({...formData, nome: event.target.value})}></input> 
                    <input onClick = {removeAlert} className='input-info' type='text' placeholder='Sobrenome' value = {formData.sobrenome} onChange={(event) => setFormData({...formData, sobrenome: event.target.value})}></input>   
                </section>
        </div>
    )
}

export default Etp2;