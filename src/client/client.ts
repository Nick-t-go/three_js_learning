import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const scene = new THREE.Scene()
scene.background = new THREE.Color(0xff0880)

const camera = new THREE.PerspectiveCamera(
    75,
    1,
    0.1,
    1000
)
const camera2 = new THREE.OrthographicCamera(-2,2,2,-2)
camera.position.z = 2
camera2.position.z = 2

//Can set canvas in html and do something like this
const canvas1 = document.getElementById('c1') as HTMLCanvasElement
const renderer1 = new THREE.WebGL1Renderer({canvas: canvas1})
renderer1.setSize(200, 200)

const canvas2 = document.getElementById('c2') as HTMLCanvasElement
const renderer2 = new THREE.WebGL1Renderer({canvas: canvas2})
renderer2.setSize(200, 200)

const canvas3 = document.getElementById('c3') as HTMLCanvasElement
const renderer3 = new THREE.WebGL1Renderer({canvas: canvas3})
renderer3.setSize(200, 200)

const canvas4 = document.getElementById('c4') as HTMLCanvasElement
const renderer4 = new THREE.WebGL1Renderer({canvas: canvas4})
renderer4.setSize(200, 200)


const renderer = new THREE.WebGLRenderer()
// renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setSize(200, 200)
document.body.appendChild(renderer.domElement)

new OrbitControls(camera, renderer.domElement)

const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshBasicMaterial({
    color: 0xfff,
    wireframe: true,
})

const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

// window.addEventListener('resize', onWindowResize, false)
// function onWindowResize() {
//     camera.aspect = window.innerWidth / window.innerHeight
//     camera.updateProjectionMatrix()
//     renderer.setSize(window.innerWidth, window.innerHeight)
//     render()
// }

function animate() {
    requestAnimationFrame(animate)

    cube.rotation.x += 0.01
    cube.rotation.y += 0.01

    render()
}

function render() {
    renderer.render(scene, camera)
    renderer1.render(scene, camera2)
    renderer2.render(scene, camera)
    renderer3.render(scene, camera)
    renderer4.render(scene, camera)
}

animate()
