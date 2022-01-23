import { Howl } from 'howler';
import React, {useState} from 'react';
import Alive from './audio/alive.mp3';
import myTime from './audio/myTime.mp3';
import Etp1 from './etp1';
import Etp2 from './etp2';
import Etp3 from './etp3';
import Etp4 from './etp4';
import Etp5 from './etp5';
import Etp6 from './etp6';


export const MultiStepForm = () =>{

    // Modifica o conteúdo do site com base no valor
    const [page, setPage] = useState(0);

    // Modifica o texto do site com base no valor do useState
    const formTitles = ['Olá, que prazer ter você aqui!', 
    'Para começar, como você se chama?', 
    'E de onde você está?',
    'Quais são seus gostos musicais?',
    'E por último, qual seu sistema operacional?',
    'Seus dados estão corretos?'
    ]

    // Altera os arquivos clicando no botão
    const PageDisplay = () =>{
        if(page === 0){
            return <Etp1/>;
        }
        else if(page === 1){
            return <Etp2 formData={formData} setFormData={setFormData}/>;
        } else if(page ===2){
            return <Etp3 formData={formData} setFormData={setFormData}/>;
        } else if(page ===3){
            return <Etp4 formData={formData} setFormData={setFormData}/>;
        } else if(page ===4){
            return <Etp5 formData={formData} setFormData={setFormData}/>;
        } else{
            return <Etp6 formData={formData} setFormData={setFormData}/>
        }
        
    }

    function nextPage(){
        if(page === 0){

            if(document.getElementById('start-audio').className === 'start'){
                if(document.getElementById('image-song').className === 'alive'){

                    // Inicia a música no site
                    <script src="/path/to/howler.js"></script>
                    var audio = new Howl({
                        src: [Alive],
                        html5: true,
                        volume: 0.5,
                    })
                    var play = audio.play();
                    audio.fade(0.5, 0, 200000, play)
    
                    document.getElementById('start-audio').className = 'stop'   
                } else{
                    // Inicia a música no site
                    <script src="/path/to/howler.js"></script>
                    var audio = new Howl({
                        src: [myTime],
                        html5: true,
                        volume: 0.5,
                    })
                    var play = audio.play();
                    audio.fade(0.5, 0, 200000, play)
    
                    document.getElementById('start-audio').className = 'stop'
                }
                
            }else{
                console.log(false);
            }

            document.getElementById('start-audio').src = "https://img.icons8.com/ios-glyphs/90/000000/pause--v1.png";
            document.getElementById('start-audio').id = 'stop-audio';

            document.getElementById('div-status').style.animationName = 'simulation-music';
            document.getElementById('div-status').style.animationDuration = '200s';

            setPage ((currPage) => currPage + 1)
        }else if(page === 1){
            if(formData.nome.length <= 1 || formData.sobrenome.length <= 1){
                document.getElementById('btn-init').style.display = 'none';
                document.getElementById('btn-login').style.display = 'none';
                document.getElementById('div-alert-not-continue').style.display = 'grid';                
            } else{
                setPage ((currPage) => currPage + 1)
                document.getElementById('btn-init').value = true;
            }
        }else if(page === 2){
            if(formData.cidade.length <= 1 || formData.cep.length <= 1 || 
                formData.numero.length <= 1 || formData.logradouro.length <= 1 || 
                formData.bairro.length <= 1){
                document.getElementById('btn-init').style.display = 'none';
                document.getElementById('btn-login').style.display = 'none';
                document.getElementById('div-alert-not-continue').style.display = 'grid';
                     
            } else{
                setPage ((currPage) => currPage + 1)
                document.getElementById('btn-init').value = true;
            }
        }else if(page === 3){
            if(formData.preferenciaMusical.length <= 1){
                document.getElementById('btn-init').style.display = 'none';
                document.getElementById('btn-login').style.display = 'none';
                document.getElementById('div-alert-not-continue').style.display = 'grid';                
            } else{
                setPage ((currPage) => currPage + 1)
                document.getElementById('btn-init').value = true;
            }
        }else if(page === 4){
            if(formData.sistemaOperacional.length <= 1){
                document.getElementById('btn-init').style.display = 'none';
                document.getElementById('btn-login').style.display = 'none';
                document.getElementById('div-alert-not-continue').style.display = 'grid';                
            } else{
                setPage ((currPage) => currPage + 1)
                document.getElementById('btn-init').value = true;
            }
        } else{}
    }

    function alert(){
        alert('Formulário Enviado')
    }

    //Modifica o texto do botão com base no valor do useState
    const ButtonText1 = () =>{
        if(page === 0){
            return 'Iniciar Cadastro';
        }
        else if(page === 5){
            return 'Finalizar';
        } else{
            return 'Próximo';
        }
    }
    
    //Modifica o texto do botão com base no valor do useState
    const ButtonText2 = () =>{
        if(page === 0){
            return 'Já tenho conta';
        }
        else{
            return 'Voltar';
        }
    }


    //Armazena as informações
    const [formData, setFormData] = useState({
        nome: '',
        sobrenome: '',
        pais: '',
        cep: '',
        logradouro: '',
        bairro: '',
        numero: '',
        cidade: '',
        preferenciaMusical: '',
        sistemaOperacional: '',
    })

    function nextAudio(){
        document.getElementById('image-song').src = 'https://images.genius.com/156b4a91c9bc060b82eb60ae00612abd.486x486x1.png';
        document.getElementById('name-song').innerHTML = 'My Time';
        document.getElementById('name-song').style.marginTop = '57%';
        document.getElementById('artist-song').innerHTML = 'The Caliber';
        document.getElementById('image-song').className = 'myTime'
    };
    function initAudio(){
        document.getElementById('start-audio').src = "https://img.icons8.com/ios-glyphs/90/000000/pause--v1.png";
        document.getElementById('div-status').style.animationName = 'simulation-music';
        document.getElementById('div-status').style.animationDuration = '200s';
        if(document.getElementById('start-audio').className === 'start'){
            if(document.getElementById('image-song').className === 'alive'){

                // Inicia a música no site
                <script src="/path/to/howler.js"></script>
                var audio = new Howl({
                    src: [Alive],
                    html5: true,
                    volume: 0.5,
                })
                var play = audio.play();
                audio.fade(0.5, 0, 200000, play)

                document.getElementById('start-audio').className = 'stop'   
            } else{
                // Inicia a música no site
                <script src="/path/to/howler.js"></script>
                var audio = new Howl({
                    src: [myTime],
                    html5: true,
                    volume: 0.5,
                })
                var play = audio.play();
                audio.fade(0.5, 0, 200000, play)

                document.getElementById('start-audio').className = 'stop'
            }
        }else{
            audio.volume = 0;
        } 
    }
    function backAudio(){
        document.getElementById('image-song').src = 'https://th.bing.com/th/id/OIF.JDCZJxXWl9ZbfMbAw85ZNQ?pid=ImgDet&rs=1';
        document.getElementById('name-song').innerHTML = 'Alive';
        document.getElementById('name-song').style.marginTop = '32%';
        document.getElementById('artist-song').innerHTML = 'Zerb, Mevil, Calvin Duo';
        document.getElementById('image-song').className = 'Alive'
    };

    console.log(formData);

    return ( 
        <body>
            <div className='background-total'>
                <aside className='background-exb-info'>
                    <img src='https://cdn.dribbble.com/users/987878/screenshots/15250265/media/c0147031402f5a688e35f9afaaea2ba9.jpg?compress=1&resize=1200x900&vertical=top' className='icon'/>
                    <h1 id='title'>
                        {formTitles[page]}
                    </h1>
                    <section className='sc'>
                        <form className='form-multiple-etp' method='get' action='.'>
                        {PageDisplay()}
                        </form>
                        <section className='buttons'>
                            <button id='btn-init'  onClick={(nextPage)}>
                                {ButtonText1()}
                            </button>
                            <span id='div-alert-not-continue'>
                            <img src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/48/fa314a/external-computer-error-alert-notification-with-alertness-warning-basic-bold-tal-revivo.png"/>
                                <p>Preencha os espaços corretamente</p>
                            </span>
                            <button id='btn-login' disabled={page ===0} onClick={() => setPage ((currPage) => currPage - 1)}>
                                {ButtonText2()}
                            </button>    
                        </section>
                        
                    </section>
                </aside>


                <aside className='background-image'>
                    <section className='top-menu'>
                        <ul>
                            <li>Home</li>
                            <li>FAQ</li>
                            <li>Como Funciona?</li>
                            <li>Sobre Nós</li>
                        </ul>    
                    </section>
                    <section className='footer-decoration'>
                        <p>Vocês estão cantando:</p>
                        <section>
                            <img id='image-song' className='alive' src='https://th.bing.com/th/id/OIF.JDCZJxXWl9ZbfMbAw85ZNQ?pid=ImgDet&rs=1'></img>
                            <div className='text'>
                                <h2 id='name-song'>Alive</h2>
                                <h3 id='artist-song'>Zerb, Mevil, Calvin Duo</h3>
                            </div>
                            <div className='icons'>
                                <img id='back-audio' onClick={backAudio} src="https://img.icons8.com/ios-glyphs/30/000000/end--v1.png" className='img1'/>
                                <img id='start-audio' onClick={initAudio} src="https://img.icons8.com/ios-filled/50/000000/circled-play.png" className='start'/>
                                <img id='next-audio' onClick={nextAudio} src="https://img.icons8.com/ios-glyphs/30/000000/end--v1.png"/>
                            </div>
                        </section>
                        <div className='barer'>
                            <div id='div-status'></div>
                        </div>
                    </section>
                </aside>
            </div>    
        </body>
        
    )
}

export default MultiStepForm;