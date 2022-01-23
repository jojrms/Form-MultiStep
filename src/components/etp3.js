import React, {useEffect, useState} from 'react';


function Etp3({formData, setFormData}){

    const [myData, setData] = useState([]); // crio um hook de estado para armazenar todo os items da minha busca

    // após eu crio um hook de efeito que me permite usar do DOM js em funções react.
    useEffect(() => {
        fetch('https://servicodados.ibge.gov.br/api/v1/localidades/paises') // faço a minha busca direto na api do IBGE atravéz desse link que eles disponibilizam na documentação
        .then((res) => res.json()) // transformo os arquivos em um json para ter acesso a eles
        .then((data) => {
            setData(data); // e novamente pegos esses dados e os envio para o meu hook de estado.
        });
    }, []);

    function removeAlert(){
        document.getElementById('btn-init').style.display = 'inherit';
        document.getElementById('btn-login').style.display = 'inherit';
        document.getElementById('div-alert-not-continue').style.display = 'none';
    }

    return (
        <div className='etp3'>
            <select className='select-country' value = {formData.pais} onChange={(event) => setFormData({...formData, pais: event.target.value})}>
                {myData.map((countryObj) => <option>{countryObj.nome}</option>)}
            </select>
            <section className='form1 cep'>
                <input id='cep' onClick = {removeAlert} type='text' maxLength={8} minLength={8} name='cep' placeholder='CEP' className='input-info' value = {formData.cep} onChange={(event) => setFormData({...formData, cep: event.target.value})}/> 
                <input id='cidade' onClick = {removeAlert} type='text' placeholder='Cidade' className='input-info' value = {formData.cidade} onChange={(event) => setFormData({...formData, cidade: event.target.value})}/> 
            </section>
            <section className='form2'>
                <input id='numero' onClick = {removeAlert} type='text' placeholder='Número' className='input-info' value = {formData.numero} onChange={(event) => setFormData({...formData, numero: event.target.value})}/> 
                <input id='logradouro' onClick = {removeAlert} type='text' placeholder='Logradouro' className='input-info' value = {formData.logradouro} onChange={(event) => setFormData({...formData, logradouro: event.target.value})}/> 
            </section>
            <input id='bairro' onClick = {removeAlert} type='text' placeholder='Bairro' className='input-info input-neighbourhood' value = {formData.bairro} onChange={(event) => setFormData({...formData, bairro: event.target.value})}/> 
        </div>
    )
}


export default Etp3;