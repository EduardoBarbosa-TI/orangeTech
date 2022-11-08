import { useState, useCallback} from "react"

const Teste = () => {
    const [name, setName] = useState('Eduardo');
    const [age, setAge] = useState(26);

    const handleChangeName = useCallback(() =>{
        console.log('Alterou o nome');
        setName(prev => prev === 'Eduardo' ? 'João' : 'Eduardo')
    }, [])

    const handleChange = useCallback(() =>{
        const newAge = 10 * age;
        console.log(newAge, age);
        setAge(prev => prev === '26' ? '32' : '26')
    }, [age])

    return (
    <div>
        <p>
            idade:{age}
        </p>
        <br/>
        <p>
            Nome:{name}
        </p>
        <button onClick={handleChange}>Alterar Idade</button>
        <br/>
        <button onClick={handleChangeName}>Alterar Nome</button>
    </div>
  )
}


export { Teste }