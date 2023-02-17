import Buttons from '../Buttons'
import './Jogos.css'
import React, { useState } from 'react';


const Jogos = () =>{
    const skins = [
        {
            "estilo": "Realista",
            "tesoura": "/img/realista/tesoura.png",
            "pedra": "/img/realista/pedra.png",
            "papel": "/img/realista/papel.png"
        },
        {
            "estilo": "Desenho",
            "tesoura": "/img/desenho/tesoura.png",
            "pedra": "/img/desenho/pedra.png",
            "papel": "/img/desenho/papel.png"
        },
        {
            "estilo": "Meme",
            "tesoura": "/img/meme/tesoura.png",
            "pedra": "/img/meme/pedra.png",
            "papel": "/img/meme/papel.png"
        },
        {
            "estilo": "Minecraft",
            "tesoura": "/img/minecraft/tesoura.png",
            "pedra": "/img/minecraft/pedra.png",
            "papel": "/img/minecraft/papel.png"
        },{
            "estilo": "Gon (Hunter X Hunter)",
            "tesoura": "/img/gon/tesoura.png",
            "pedra": "/img/gon/pedra.png",
            "papel": "/img/gon/papel.png"
        },{
            "estilo": "Fortnite",
            "tesoura": "/img/fortnite/tesoura.png",
            "pedra": "/img/fortnite/pedra.png",
            "papel": "/img/fortnite/papel.png"
        },{
            "estilo": "Real",
            "tesoura": "/img/real/tesoura.png",
            "pedra": "/img/real/pedra.png",
            "papel": "/img/real/papel.png"
        }
    ]

    const [escolha, setEscolha] = useState('')
    const [botEscolha, setBot] = useState('')
    const [status, setStatus] = useState('')
    const [placar, setPlacar] = useState({"player": 0, "bot": 0})
    const [skin, setSkin] = useState(0)


    console.log(`Player: ${placar.player}, BOT: ${placar.bot}`)

    

    return(
        <section className="jogo">
            <div className='placar'>
                <h2>Player: {placar.player}</h2>
                <h2>Bot: {placar.bot}</h2> 
            </div>
            <div className="escolhas">
                <div className="choice">
                    {escolha ? <img src={escolha} alt="Escolha do jogador!"/> : <h2>Faça a sua jogada!</h2> } 
                </div>
                    X
                <div className="choice">
                    {botEscolha ? <img src={botEscolha} alt="Escolha do BOT" /> :  <h2>BOT está aguardando a sua jogada!</h2> }
                </div>
            </div>
            <div className='Resultado'>
                {status === "Você venceu!!!" ? <span className='win'>{status}</span> 
                : status === "Você perdeu!!!" ? <span className='defeat'>{status}</span> 
                : <span className='draw'>{status}</span>
                } 
            </div>
            <div className="botoes">
                <Buttons skin={skins[skin]} 
                        player_choice={escolha => setEscolha(escolha)} 
                        bot_choice={escolha => setBot(escolha)}
                        resultados = {res => setStatus(res)}
                        placarAtual = {placar}
                        placar = {pnts => setPlacar(pnts)}
                />
            </div>
            <div className='select-estilo'>
                <select required onChange = {(e) => setSkin(e.target.value)}>
                    {skins.map((skin, i) => <option key={skin.estilo} value={i}>{skin.estilo}</option> )}
                </select>
            </div>
        </section>
    )
}


export default Jogos