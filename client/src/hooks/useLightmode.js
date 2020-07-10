import { useLocalStorage} from './useLocalStorage';
import { useEffect } from 'react'



export const useLightMode = (initalValue) => {

    const [ lightMode, setLightMode ] = useLocalStorage( 'lightMode', initalValue)

    useEffect(() => {
        lightMode ? document.querySelector('body').classList.add('light-mode') 
        : document.querySelector('body').classList.remove('light-mode')
    }, [lightMode])


    return [ lightMode, setLightMode ]

}

