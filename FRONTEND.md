# Locas In Love 

Frontend code structure for Locas In Love. 


---

### Stylesheets

````
app/
|
|- styles/
|  |- main.scss ______________________________ # bower:scss
|
|  |- modules/
|    |- _info.scss ___________________________ # 
|    |- _landing.scss ________________________ # 
|    |- _loading.scss ________________________ # 
|    |- _nav.scss ____________________________ # 
|    |- _news.scss ___________________________ # 
|    |- _photos.scss _________________________ # 
|    |- _tour.scss ___________________________ # 
|    |- _videos.scss _________________________ # 
|
|  |- base/
|    |- _animations.scss _____________________ # 
|    |- _base.scss ___________________________ # Base
|    |- _layout.scss _________________________ # 
|    |- _mixins.scss _________________________ # Useful mixins
|    |- _typo.scss ___________________________ # Typography
|    |- _vars.scss ___________________________ # Variables
|    |- _z.scss ______________________________ # Nav
````

### Javascripts

````
app/
|
|- scripts/
|  |- app.js _________________________________ # 
|
|  |- services/
|    |- canvas-service.js ____________________ # 
|    |- youtube-service.js ___________________ # 
|
|  |- directives/
|    |- canvas-rain.js _______________________ # 
|    |- nav-overlay.js _______________________ # 
|    |- nav-stuff.js _________________________ # 
|    |- player-controls.js ___________________ # 
|
|  |- controllers/
|    |- info.js ______________________________ # 
|    |- main.js ______________________________ # 
|    |- news.js ______________________________ # 
|    |- photos.js ____________________________ # 
|    |- tour-dates.js ________________________ # 
````