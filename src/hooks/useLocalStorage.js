import { useContext, useEffect } from "react"
import { ClickerContext } from "../context/ClickerContext"

const useLocalStorage = () => {
    const { crabText, setCrabText, chisloClicovPoText, dmgLvl, castleLvl, count, setCount } = useContext(ClickerContext)

    useEffect(() => {
        localStorage.setItem('save', ( count ))
    }, [count])


}

export default useLocalStorage