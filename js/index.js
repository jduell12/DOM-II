// Your code goes here
/*[ ] Using your [index.js file](js/index.js), create 10 [unique event listeners](https://developer.mozilla.org/en-US/docs/Web/Events). using your creativity to make the Fun Bus site more interactive.  Here are some unique events you could try to use: 
	* [ ] `mouseover`
	* [ ] `keydown`
	* [ ] `wheel`
	* [ ] `drag / drop`
	* [ ] `load`
	* [ ] `focus`
	* [ ] `resize`
	* [ ] `scroll`
	* [ ] `select`
    * [ ] `dblclick`
     */

//gets the a links in the nav
const homeLink = document.querySelector('.nav-link:nth-of-type(1)');
const aboutLink = document.querySelector('.nav-link:nth-of-type(2)');
const blogLink = document.querySelector('.nav-link:nth-of-type(3)');
const contactLink = document.querySelector('.nav-link:nth-of-type(4)');

//add mouseover events on a links
let linkArray = [homeLink, aboutLink, blogLink, contactLink];

linkArray.forEach(item => item.addEventListener('mouseover', event => {
    event.target.style.color =  '#17A2B8';
    event.target.style.fontSize = '2rem';
}));

linkArray.forEach(item => item.addEventListener('mouseleave', event => {
    event.target.style.color = '#212529';
    event.target.style.fontSize = '1.6rem';
}));

//gets image elements
const imgs = document.getElementsByTagName('img');
imgArray = Array.from(imgs);

//add double click events on the imgs 
imgArray.forEach(function(item) {
    item.addEventListener('dblclick', function(event){
        if(event.currentTarget.style.transform !== 'scale(1.5)')
        {
            event.target.style.transform = 'scale(1.5)';
        } else {
            event.target.style.transform = 'none';
        }
        
    })
})