// text on overlay slides up
TweenMax.to(".overlay h1", 2, {
            opacity: 0,
            y: -60,
            ease: Expo.easeInOut
      })

// slides overlay up
TweenMax.to(".overlay", 2, {
     delay: 1,
     top: "-100%",
     ease: Expo.easeInOut
})

// slides 'logo' up
TweenMax.from(".logo", 1, {
            delay: 2.4,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      })

// animates nav links 1 at a time
TweenMax.staggerFrom(".nav ul li", 1, {
            delay: 2.4, opacity: 0, y: 20, ease: Expo.easeInOut
      }, 0.2)

// animates social links 1 at a time
TweenMax.staggerFrom(".social-media ul li", 1, {
      delay: 2.4, opacity: 0, y: 20, ease: Expo.easeInOut
}, 0.2)

// slides side strip up
TweenMax.from(".side-strip", 2, {
         delay: 2.4,
         opacity: 0,
         y: 40,
         ease: Expo.easeInOut
   })

// slides black row to left
TweenMax.from(".row", 2, {
       delay: 2.4,
       opacity: 0,
       x: 40,
       ease: Expo.easeInOut
 })

//slides row headers up
 TweenMax.from(".row h6", 2, {
           delay: 3,
           opacity: 0,
           y: 40,
           ease: Expo.easeInOut
     })

// slides row p up
TweenMax.from(".row p", 2, {
           delay: 3.2,
           opacity: 0,
           y: 20,
           ease: Expo.easeInOut
     })

// slides header up
TweenMax.from(".header h1", 2, {
           delay: 3.2,
           opacity: 0,
           y: 20,
           ease: Expo.easeInOut


     })

// slides header p up
TweenMax.from(".header p", 2, {
          delay: 3.4,
          opacity: 0,
          y: 20,
          ease: Expo.easeInOut
    })
    
// slides button up
    TweenMax.from(".header button", 2, {
            delay: 3.6,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      })
