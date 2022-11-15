# Image Slider

==============

### Description

1. Create a simple image carousel
2. It should contain arrows on each side to advance the image forward or backward.
3. It should automatically move forward every 5 seconds.
4. It should contain the little navigation circles at the bottom that indicate which slide you are on (and they should be click-able to advance to that particular slide).

### TODOS

1. Think about how you would set up the different elements within the site.
2. Set up a very wide div which will contain the individual “slides”
   of each image. By appropriately positioning that div inside a container
   div (which acts like a picture frame), you can choose which slide is
   visible at any given time.
3. Once you have the slider positioned properly, build functions for “next”
   and “previous” which will advance to the next or previous slide accordingly.
   Make the transitions smooth using simple effects.
4. Set up arrow buttons which activate those functions and play with cycling
   through the images.
5. Add in some navigation dots at the bottom of the slides. Make a horizontal
   series of empty circles with CSS immediately below the slideshow. Each circle
   represents a slide, so whenever a new slide is activated, its corresponding
   circle gets filled in so you can tell where in the show you are. Make each circle
   link to that particular slide, so you can click on the circle and it will jump
   to that slide.
6. Add a timeout which advances the slides every 5 seconds.
