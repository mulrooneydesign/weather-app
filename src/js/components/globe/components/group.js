import { Group, MathUtils } from 'three'

const createGroup = (items) => {
  const group = new Group()

  items.forEach((item) => {
    group.add(item)
  })

  const radiansPerSecond = MathUtils.degToRad(30)

  // this method will be called once per frame
  group.tick = (delta) => {
    group.rotation.y -= radiansPerSecond * delta * 0.25
  }

  return group
}

export { createGroup }
