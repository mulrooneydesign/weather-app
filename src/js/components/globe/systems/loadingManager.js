import {LoadingManager} from 'three'

const loadingManager = () => { 
    
    manager = new LoadingManager()
    manager.onStart = () => {
        console.log('On start')
    }

    manager.onProgress = () => {
        console.log('On Progress')
    }

    manager.onError = () => {
    console.log('Error')
    }

    manager.onLoad = () => {
        console.log('Loading complete!')
    }

}

export { loadingManager }