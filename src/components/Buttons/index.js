import './Buttons.css'

const Buttons = ( props) =>{
    const skins = props.skin

    const envia = (e) =>{
        var res = e.target.src.split('/img/')
        const final_res =  "/img/" + res[1]
        props.player_choice(final_res)
        
        const botChocie = Math.floor(Math.random() * 3)
        var bot = ''

        if(botChocie === 0){
            bot = skins.papel
            props.bot_choice(bot)
        }else if(botChocie === 1){
            bot = skins.tesoura
            props.bot_choice(bot)
        }else{
            bot = skins.pedra
            props.bot_choice(bot)
        }
        props.resultados(verificaVencedor(final_res, bot))

        function verificaVencedor(p1, bot){
            const venceu = "Você venceu!!!"
            const derrota = "Você perdeu!!!"
            const empate = "Empate!"

            console.log(props.placarAtual)
            if(p1 === bot){
                return empate
            }
            else if(p1 === skins.papel && bot === skins.pedra){
                props.placar({
                    "player": props.placarAtual.player + 1,
                    "bot": props.placarAtual.bot
                })
                return venceu
            }
            else if(p1 === skins.pedra && bot === skins.tesoura){
                props.placar({
                    "player": props.placarAtual.player + 1,
                    "bot": props.placarAtual.bot
                })
                return venceu
            }
            else if(p1 === skins.tesoura && bot === skins.papel){
                props.placar({
                    "player": props.placarAtual.player + 1,
                    "bot": props.placarAtual.bot
                })
                return venceu
            }else{
                props.placar({
                    "player": props.placarAtual.player,
                    "bot": props.placarAtual.bot + 1
                })
                return derrota
            }
        }

    }

    return (
        <div className="button-list">
            <button onClick={envia}><img src={skins.papel} alt="Papel" /></button>
            <button onClick={envia}><img src={skins.tesoura} alt="Tesoura" /></button>
            <button onClick={envia}><img src={skins.pedra} alt="Pedra" /></button>
        </div>
       

    )
}


export default Buttons