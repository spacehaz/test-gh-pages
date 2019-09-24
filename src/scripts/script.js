import App from './app.js'
import '../styles/style.css'
import { sum } from 'super-helpers'

const myApp = new App('blue')
myApp.createApp()
console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(sum([1, 2, 3]))
