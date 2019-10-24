import '../styles/index.scss';
import anime from 'animejs';

console.log('webpack starterkit');


anime({
    targets:'div.box1',
    translateY:[
        {value:200, duration:500},
        {value:0, duration:800}
    ],
    rotate:{
        value:'1turn',
        easing:'easeInOutSine'
    }
});



