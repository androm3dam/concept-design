function scope(index) {
  function get() {
    if (index == 3) index = 0
    else index++
  }
  return { get }
}

const interior = { index: 0 }
const visualization = { index: 0 }
const furniture = { index: 0 }

export var useInterior = scope(interior.index)
export const useVisualization = scope(visualization.index)
export const useFurniture = scope.bind(furniture)
