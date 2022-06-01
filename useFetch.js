import { useEffect, useRef, useState } from "react"

export const useFetch = ( url ) => {

    const isMounted = useRef(true)
    
    const [state, setState] = useState({ data: null, loading: true, error: null})


    useEffect(() => {   
        return () => {
            isMounted.current = false
        }  
    }, [])

    
    useEffect(() => {
        setState({ data: null, loading: true, error: null})

        // evitar que se cambie el estado si el componente se paro de renderizar (se desmonto)
        if(isMounted.current) {
            fetch(url)
                .then(resp => resp.json())
                .then(data => {
                    setState({
                        loading: false, 
                        error: null,
                        data        // data: data
                    })  
                })
                .catch(() => {
                    setState({
                        data: null,
                        loading: false,
                        error: 'No se pudo cargar la info'
                    })
                })
        }
    }, [url])


    return state
}
