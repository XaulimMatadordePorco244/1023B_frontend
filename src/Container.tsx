import { useState } from "react"

interface ContainerProps {
    nome: string
}
function Container(props: ContainerProps) {
    const [texto,setTexto] = useState("Texto antes de mudar")
    function mudar(){
        setTexto("Texto depois de mudar")
    }
    return (
        <>
            <h1>{props.nome}</h1>
            <p>{texto}</p>
            <button onClick={mudar}>Mudar</button>
        </>
    )
}

export default Container