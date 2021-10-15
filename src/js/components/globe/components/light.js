import { AmbientLight } from "three";

const createLight = () => {

    const light = new AmbientLight(0xffffff, 2.8)
    return light
}

export { createLight }