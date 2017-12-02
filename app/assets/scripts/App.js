import $ from 'jquery';
import BtnShadow from './modules/BtnShadow';
import StickyHeader from './modules/StickyHeader';
import ScrollUpNav from './modules/ScrollUpNav';

var btnShadow = new BtnShadow;

var stickyHeader = new StickyHeader();

var scrollUpNav = new ScrollUpNav($(".shape"), "0%");
var scrollUpNav = new ScrollUpNav($(".about-me__myimg"), "20%");
var scrollUpNav = new ScrollUpNav($(".headline"), "30%");
var scrollUpNav = new ScrollUpNav($(".cloud__left-cut"), "10%");
var scrollUpNav = new ScrollUpNav($(".headline__main-heading"), "30%");
var scrollUpNav = new ScrollUpNav($(".headline__sub-heading"), "5%");
var scrollUpNav = new ScrollUpNav($(".about-me__about--skills"), "5%");
var scrollUpNav = new ScrollUpNav($(".row__8-right"), "20%");
var scrollUpNav = new ScrollUpNav($(".cloud__bottom"), "10%");
var scrollUpNav = new ScrollUpNav($(".about-me__about--help"), "30%");

console.log("Astronaut animation will be added later for firefox browsers because of firefox transform properties are very complicated to write.");