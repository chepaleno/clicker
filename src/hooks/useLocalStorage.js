import { useContext, useEffect, useRef, useState } from "react"
import { ClickerContext } from "../context/ClickerContext"

const useLocalStorage = () => {
    const { crabText, setCrabText, chisloClicovPoText, dmgLvl, castleLvl, count, setCount } = useContext(ClickerContext)
    const defaultSave = { crabText: "Привет, нажми на текст", count: 0, dmgLvl: 0, castleLvl: 0, chisloClicovPoText: 0 }
    // const realSave = { crabText: crabText, count: count, dmgLvl: dmgLvl, castleLvl: castleLvl, chisloClicovPoText: chisloClicovPoText }

    // const [save, setSave] = useState(() => {
    //     const isThereSave = localStorage.getItem('clickerSave')
    //     console.log(isThereSave)
    //     return isThereSave ? JSON.parse(isThereSave) : defaultSave
    // })
    // console.log(save.count)
    // setCount(save.count ? save.count : 0)

    useEffect(() => {
        localStorage.setItem('clickerSave', JSON.stringify({ crabText, chisloClicovPoText, dmgLvl, castleLvl, count })) 
    }, [count])

}

export default useLocalStorage