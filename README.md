# Responsive Front End Website for Vangia Cosmetics using React JS
This project is a single page web front end for Vangia Cosmetics using the React JS framework. I created this project as an exercise to develop front end skills

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Credit](#credit)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

- Build out the project to the designs provided
- Adding slider for the testimonial section

### Screenshot

![Design overview for Vangia Cosmetics landing page](./src/images/header-vangia.png)

### Links
- [Live Site URL](https://vangia-front-end-web.vercel.app/)

### Credit
- [Figma Web Design & UI Kit i used for this project is published by Dmm Kreativ](https://ui8.net/dmm-kreativ/products/uniquepages?status=7)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [React JS](https://reactjs.org/) - JS library
- [React Icons](https://react-icons.github.io/react-icons/) - JS library to add icons
- [Swiper js](https://swiperjs.com/) - JS library that creates modern touch sliders with hardware-accelerated transitions


### What I learned

I learned a simple way to add slider function in testimonial section using swiper js library

Code snippets, see below:
```js
<Swiper className='swiper'
            breakpoints={{
                // width >= 300
                300: {
                    slidesPerView: 1,
                    spaceBetween: 70
                },
                // width >= 600
                600: {
                    slidesPerView: 1,
                    spaceBetween: 100
                },
                // width >= 1000
                1000: {
                    slidesPerView: 2,
                    spaceBetween: 130
                }
            }}
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={120}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
```

![Overview for testimonials section](./src/images/testimonials.png)


### Continued development
The development of this project can be continued by adding functionality to the cart, and implementing infinite scrolling in the product section

### Useful resources
- [UI/UX Design Resources](https://ui8.net/) - This website provide many UI/UX design some are free. I really liked this website and will use it going forward.
- [Tutorial adding slider for testimonials section](https://www.youtube.com/watch?v=iIwALoXqJ5c&t=847s) - This is an amazing youtube tutorial which helped me finally understand slider js.


## Author

- Github - [Shabrina Putri](https://github.com/shabrina12/)
- Instagram - [@shabputri_](https://www.instagram.com/shabputri_/)

