# *8GIF


## What is 8GIF & Why we created it?

    - 8GIF is a gif sharing app, that works to post gif for user around the world And we believe that sharing a gif could make the world a      better place. The idea to make 8GIF it's self cross our mind in 2019, so three of us try to make it happen.


## How to post a gif

    - To post a gif user must insert title on input title form, then select a gif from user's local storage

## How to share a gif to user's Twitter of Facebook

    - This is steps to share a gif: 
    1 => User must click Twitter or Facebook logo under the gif
    2 => If user already sign in go to step 4, if not go to step 3
    3 => User must sign in to user's social media
    4 => After that, user just follow post method on user's Facebook or Twitter


## Method

### findAll

    - Method        : get
    - URL           : http://localhost:3000/gif


### Post gif

    - Method        : POST
    - URL           : http://localhost:3000/gif
    - Input Format  : 
            1. title    : String
            2. gif      : 

### Share a gif to Facebook

    - URL           : https://www.facebook.com/sharer/sharer.php?u=' + $url, 'facebook-popup
    - Input Format  : 
            1. url    : String */ gif url from Google cloud Storage 

### Share a gif to Twitter

    - URL           : https://twitter.com/share?url=' + $url, 'twitter-popup
    - Input Format  : 
            1. url    : String */ gif url from Google cloud Storage 