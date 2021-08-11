# Share Space

Share Space is a social media influenced app, with its origin focused on connecting people with similar interests. 

Users can add/accept/deny friend requests, share photo posts and writing posts, like and comment other users writings/posts and comments.

## Check It Out Here

just follow the link: [ShareSpace](http://share-space-connect.herokuapp.com/) and join! start browsing posts, and making friends.


## Technologies Used:
A Full-Stack MERN App:

* React(hooks)
* JavaScript, 
* HTML/CSS, 
* Node, 
* Express, 
* MongoDB, 
* Mongoose, 
* Semantinc-ui


## Planning:

![Screen Shot 2021-08-10 at 8 57 31 PM](https://user-images.githubusercontent.com/16360065/128967356-eaf1440e-4a7b-4f70-a679-ae587b1f2127.png)


<img heignt='200px' src='https://imgur.com/12tU96H.png'>

## Routes:
        Users: base url= /api/users

* POST /signup - signup a new account

* POST /login - login to existing account, with auth tokens.

* POST /:username - get profile by username, if none exist, go to custom 404 page.


      Post/Writing: base url= /api/posts

* POST /create - create a photo post

* POST /createwriting - create a writing entry

* POST /updatewriting/:id - update a writing post the logged in user made

* POST /updatepostphoto/:id - update the comment of the photo post the logged in user made

* GET /show/:id show a post

* GET /writing/:id show a writing entry

* GET /delete/:id - delete a post the logged in user made

* GET /deletewriting/:id - delete a writing the logged in user made

* GET /mainphoto - feed of all posts by all users

* GET /mainwriting - feed of all writings by all users

      Likes: base url= /api/
* POST /comments/:id/likes - add a like to a comment

* DELETE /commentlikes/:id - remove a like from a comment

* POST /posts/:id/likes - add like to a post

* DELETE /likes/:id - remove a like from a post

* POST /writings.:id/likes - add a like to a writing entry

* DELETE /writinglikes/:id - remove a like from a writing entry

      Friends: base url= /api/friends

* GET /request/:id - send a request to a user

* GET /dent/:username - deny a friend request another user sent

* GET /approve/:username - approve a friend request sent by another user

* GET /remove/:username - remove friend from users friends list

      Comments: base url= /api/comments 
* GET /comment/:id - gets a comment

* POST /writing.:id/addcomment - add a comment to a writing entry

* POST /post/:id/addcomment - add a comment to a post

* DELETE /delete/:id delete a comment from a writing or post

* DELETE /comment/:id delete a comment

## IceBox
Next steps are to implement direct messages, as well as update for the profile and photo post components.

Additionally, i would like to add groups/forums and group posts/writings within that as well.

Once group/forum is established, i would also like to add an admin/moderator feature

## Screenshots

![home](https://user-images.githubusercontent.com/16360065/128965190-2a0867ff-a8bd-43ce-91e2-b01fc648e025.gif)
![friend request](https://user-images.githubusercontent.com/16360065/128964387-d23f70af-f95f-42f9-99bb-3ffd8c9f7d82.gif)
![accept friend](https://user-images.githubusercontent.com/16360065/128964465-388d13b8-b873-4c21-b792-feded85acf0f.gif)
![addingComment](https://user-images.githubusercontent.com/16360065/128964486-ae882a24-1af6-45c2-b86d-51d122ec8859.gif)



