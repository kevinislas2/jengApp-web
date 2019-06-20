import { Header } from './app/header';
import '../src/style.css';
import './styles/scss/main.scss';

let header = new Header();
let firstHeading = header.getFirstHeading();
console.log(firstHeading);