## Clayton Game Corner - CGC
### `Live Link`
https://clayton-game-corner.nrclayton.now.sh/
### `API`
Repo: https://github.com/nclayt0n/clayton-game-corner-api
### `Summary`
Clayton Game Corner is a blog, tailored for the client to be able to (view)GET (create)POST (update)PATCH & (delete)DELETE Game Reviews and Upcoming Game Dates. The user will be able to view(GET) Game reviews where game_type is Tabletop on the tabletop game page, and Game reviews where game_type is Video on the Video Game Review page. Also view(GET) Upcoming Game Dates in asc order on the Upcoming Games Page. The Client can (update)PATCH their welcome text on the admin Landing Page, and user can view(GET) the welcome text on the Clayton Game Corner Landing Page.

### `Demo Credentials`
To get to and test the admin pages go to 
<br/>
https://clayton-game-corner.nrclayton.now.sh/admin and you will be routed to the admin login page where email and password will be required.
Email is case-sensitive so type it exactly as is below.
<br/>
email: admin@test.com
password: testP@ssw0rd
<br/>
Once logged in you will land on the admin Landing Page where you can view and update current welcome paragraph. Once logged in you can also now see the Nav bar Admin links as well. To add/update/delete Reviews or Upcoming Dates go to Admin Game Reviews or Admin Upcoming Game Dates.

CGC Landing Page/Admin Landing Page are both currently set up to GET and POST bio from the users table where id is 2-test user. So you can update and view the welcome text and fully try out the admin pages. Enjoy!

### `Technologies`
Technologies used in this project include;<br/>
Front-End: React, Html, CSS
deployed using ZEIT Now<br/>
Back-End: Node.js, Express, PostgreSQL
deployed using Heroku

### `Screenshots`

<img src='/src/images/Home.png' alt='Home Page'width='250'>
<img src='/src/images/admin-review.png' alt="Admin Game Review" width='250'>
<img src='/src/images/review.png' alt='Game Review Page' width='250'>
<img src='/src/images/admin-upcoming.png' alt='Admin Upcoming Game Page' width='250'>
<img src='/src/images/upcoming.png' alt='Upcoming Page' width='250'>

