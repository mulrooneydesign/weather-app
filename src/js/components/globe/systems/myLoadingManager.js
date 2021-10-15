import {LoadingManager, TextureLoader } from 'three'

const myLoadingManager = () => { 

    let manager = new LoadingManager()
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
        data.isLoaded = true
    }

    const textureLoader = new TextureLoader(manager)
    const earthColorTexture = textureLoader.load('./2k_earth_daymap.jpg')
    const earthNormalMap = textureLoader.load('./2k_earth_normal_map.jpg')

    const textures = {
        earthColorTexture,
        earthNormalMap
    }


    let data = {
        textures: textures,
        isLoaded: false
    }
    

    return data
}

export { myLoadingManager }