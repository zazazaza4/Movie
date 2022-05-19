import Spinner from '../components/spinner/spinner';
import ErrorMessage from '../components/errorMessage/errorMessage'

const setContext = (process, Component, data) => {
    switch (process) {
        case 'waiting':
            return  <Spinner/>
        case 'loading':
            return <Spinner/>
        case 'error':
            return <ErrorMessage/>
        case 'confirmed':
            return <Component data={data} />
        default:
            throw new Error(`Unexpected process state =(`);
    }
}

export default setContext;