# jQuery-lighbox
jQuery lightbox for MA1

## How to use the plugin: 

Download the jquery.lightbox.js file from the js folder and place it in your own js folder. 
Make sure you have jQuery linked in your HTML file and include the plugin below in <script> tags.

### HTML
The HTML you want to use looks like this: 
```
<a class="lightbox-activate" href="images/ct230r-big.jpg">
  <img src="images/ct230r.jpg" alt="CT230R Evo vexel">
</a>
```
The image path in the `<a>` tag will be the large image placed in the lightbox and the path in the `[img]` tag will be the thumbnail. 

### CSS
You will need two CSS classes: 

```
#lightbox {
    width:100%;
    height:100%;
    position:fixed;
    top:0;
    right: 0;
    bottom: 0;
    left:0;
    text-align: center;
    background: rgba(0,0,0,.7); /* Adjust lightbox opacity here, last digit is the darkness */
```
and 
```
#lightbox img {
   max-width: 80%; /* Adjust the max width of the image in the lightbox */
}
```
it could also be helpful to style the close text: 
```
#lightbox span {
    color: #eee; /* Adjust close text colour */
    cursor: pointer;
}
```
and that's pretty much it. 
