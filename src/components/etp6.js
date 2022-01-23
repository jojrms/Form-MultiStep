import React from 'react';

function Etp6({formData, setFormData}){

    //Guarda as opções em uma array
    const system = [
        'Windows',
        'Linux',
        'MacOS',
    ];

    const systemId = [
        'windows-system',
        'linux-system',
        'macos-system'
    ]
    
    function removeAlert(){
        document.getElementById('btn-init').style.display = 'inline-block';
        document.getElementById('btn-login').style.display = 'inline-block';
        document.getElementById('div-alert-not-continue').style.display = 'none';
    }

    function removeChecked(){

    }

    return (
        <div className='etp6'>
            <div className='exb-list'>
                <section id='sc1' className='sc1'>
                    <section>
                        <p1>Nome</p1>
                        <div className='span-info'>
                            <p>{formData.nome}</p>
                        </div>      
                    </section>
                    <section>
                        <p1>Sobrenome</p1>
                        <div className='span-info'>
                            <p>{formData.sobrenome}</p>
                        </div>      
                    </section>  
                </section>
                <section id='sc1' className='sc2'>
                    <section>
                        <p1>País</p1>
                        <div className='span-info'>
                            <p>{formData.pais}</p>
                        </div>      
                    </section>
                    <section>
                        <p1>Cidade</p1>
                        <div className='span-info'>
                            <p>{formData.cidade}</p>
                        </div>      
                    </section>  
                </section>
                <section id='sc1' className='sc3'>
                    <section>
                        <p1>CEP</p1>
                        <div className='span-info'>
                            <p>{formData.cep}</p>
                        </div>      
                    </section>
                    <section>
                        <p1>Bairro</p1>
                        <div className='span-info'>
                            <p>{formData.bairro}</p>
                        </div>      
                    </section>  
                </section>
                <section id='sc1' className='sc4'>
                    <section>
                        <p1>Logradouro</p1>
                        <div className='span-info'>
                            <p>{formData.logradouro}</p>
                        </div>      
                    </section>
                    <section>
                        <p1>Número</p1>
                        <div className='span-info'>
                            <p>{formData.numero}</p>
                        </div>      
                    </section>  
                </section>
                <section id='sc1' className='sc5'>
                    <section>
                        <p1>Gosto Musical</p1>
                        <div className='span-info'>
                            <p>{formData.preferenciaMusical}</p>
                        </div>      
                    </section>
                    <section>
                        <p1>Sistema Op.</p1>
                        <div className='span-info'>
                            <p>{formData.sistemaOperacional}</p>
                        </div>      
                    </section>  
                </section>
            </div>
        </div>
    )
}


export default Etp6;