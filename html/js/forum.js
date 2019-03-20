$(document).ready(function(){
    var forumContainer = $(".forum-container");
    var postCategorySelect = $("#category");

    // click event for leaving comments
    $(document).on("click", "button.comment", handlePostComment);

    // variable to hold our posts
    var posts;

    // code below handles forum posts for a specific category
    var url = window.location.search;
    var categoryId;
    if (url.indexOf("?category_id=") !== -1) {
        categoryId = url.split("=")[1];
        getPosts(categoryId);
      }
      else {
        getPosts();
      }
    //   gets posts from DB and updates views

    function getPosts(category){
        categoryId = category || "";
        if(categoryId){
            categoryId = "/?category_id=" + categoryId;
        }
        $.get("api/posts" + categoryId, function(data){
            console.log("Posts", data):
            posts=data;
            if(!posts || !posts.length){
                displayEmpty(category);
            }else{
                initializeRows();
            }
        });
    }
    // Handles appending posts inside of forum container
    function initializeRows(){
        forumContainer.empty();
        var postsToAdd= [];
        for (var i = 0; i < posts.length; i++) {
            postsToAdd.push(createNewRow(posts[i]));
          }
          forumContainer.append(postsToAdd);
    }
    // Constructs posts HTML
    function createNewRow(post){
        var formattedDate= new Date(post.createdAt);
            formattedDate= moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
        var postList = $("<ul>");
            postList.addClass("list-group");
        var title= post.title;
        var postListItem = $("<li class='list-group-item postTitle'>")
            postListItem.append(
                "<h3>" + title + "<h3>"
            );
        var commentBtn = $("<button>");
            commentBtn.text("Leave comment");
            commentBtn.addClass("comment btn btn-light")
            postListItem.append(commentBtn);

        var postBody = $("<p>");
            postBody.text(post.body);
            postListItem.append(postBody);

        var postDate = $("<h5>");
            postDate.text(formattedDate);
            postListItem.append(postDate);

        var postAuthor = $("<h5>");
            postAuthor.text("Post by: " + post.Author.name);
            postAuthor.css({
                float: "left",
            })
            postListItem.append(postAuthor);

        return postList;
    }
    // figures out which post we want to leave a comment on and takes to appropriate URL
    function handlePostComment() {
        var currentPost = $(this)
          .parent()
          .parent()
          .data("post");
        window.location.href = "/cms?post_id=" + currentPost.id;
      }
    //   Displays a message when selected category is not found in topics
    function displayEmpty(id) {
        var partial = "";
        if (id) {
          partial = " for category #" + id;
        }
        forumContainer.empty();
        var messageH2 = $("<h2>");
        messageH2.css({ "text-align": "center", "margin-top": "50px" });
        messageH2.html("Sorry no posts for this topic yet" + partial);
        forumContainer.append(messageH2);
      }
})