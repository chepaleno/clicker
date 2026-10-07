import { useContext, useEffect } from "react"
import { ClickerContext } from "../context/ClickerContext"

const useLocalStorage = () => {
    const { crabText, chisloClicovPoText, dmgLvl, castleLvl, count, shell, bossCount, freeMod } = useContext(ClickerContext)

    useEffect(() => {
        localStorage.setItem('clickerSave', JSON.stringify({ crabText, chisloClicovPoText, dmgLvl, castleLvl, count, shell, bossCount, freeMod })) 
    }, [count, shell, castleLvl, dmgLvl, bossCount, freeMod])

}

export default useLocalStorage