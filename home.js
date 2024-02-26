$(document).ready(()=>{
    $("#post-button-id").click(function (e){
        e.preventDefault();
           const today = new Date();
        const options = { month: 'short', day: 'numeric'};
        const formattedDate = today.toLocaleDateString('en-US', options);
        const tweetText = $("#textarea-tweet").val();
        if(tweetText) {
            const newTweet = {
                name: "Hemaharini SM",
                userName: "@imhemahere",
                tweetDate: formattedDate,
                content: tweetText,
                comment: 0,
                reshare : 0,
                like : 0
            };

            addTweetToFeed(newTweet);
            $("#textarea-tweet").val("");
        }

    function addTweetToFeed(tweet){
        const tweetContent = tweet.content.replace(/(#\w+)/g, '<span class="fill-blue">$1</span>').replace(/(@\w+)/g, '<span class="fill-blue">$1</span>');
        const imgs = tweet.img;
        
        const newTweetDate = `<div class="row p-b-1rem border-bottom" id="repost-tweets">
        <div class="col tweet-form-col-1 px-3 py-3">
            <div class="profile-user" style="background-image: url(../Twitter/images/name.png);"></div>
        </div>
        <!-- --------------- -->
        <div class="col">
            <div class="row">
                <div class="col">
                    <div class="row align-items-center" style="margin-top: 14px;">
                        <span class="width-fit px-1 f-15 f-weight-700">${tweet.name}</span>
                        <span class="width-fit px-1 d-flex align-items-center">
                            
                            <img src="../Twitter/images/verified.png">
                        </span>
                        <span class="width-fit px-1 color-1 f-weight-400 f-15">${tweet.userName}</span>
                        <span class="width-fit px-1 color-1 f-weight-400 f-15" style="margin-top: -7px;">.</span>
                        <span class="width-fit px-1 color-1 f-weight-400 f-15">${tweet.tweetDate}</span>
                        
                    </div>
                </div>
            </div>
            <!-- ------------------- -->
            <div class="row p-b-05rem">
                <div class="contents py-1 p-null">
                    <span class="f-15 f-weight-400">${tweetContent}</span>
                </div>
                <div>
                     <div class="imagePreview" style="width:500px;height:600px;"></div>
                </div>
                
            </div>
            <!-- -------------------- -->
            <div class="row">
                <div class="share-icons p-null" style="width: 510px;">
                    <span class="share-icon-span share-icon-span-1 color-1">
                        <button class="border-button" data-bs-toggle="modal" data-bs-target="#exampleModal"  id="comment-button">
                        <img src="../Twitter/images/comment.png">
                        </button>
                        <span class="f-13" id="comment-count">${tweet.comment}</span>
                    </span>
                    <span class="share-icon-span share-icon-span-1 color-1">
                        <button type="button" class="border-button p-null" id="repost-button"><span class="share-icon-svg">
                        <img src="../Twitter/images/retweet.png">
                        </span></button>
                        <span class="f-13" id="repost-count">${tweet.reshare}</span>
                    </span>
                    <span class="share-icon-span share-icon-span-1 color-1">
                        <span class="share-icon-svg" id="like-button">
                        <img src="../Twitter/images/like.png">
                        </span>
                        <span class="f-13" id="like-count">${tweet.like}</span>
                    </span>
                    
                    
                </div>
            </div>
        </div>
    </div>`;
    $("#tweets-col").prepend(newTweetDate);
        var lsType = $("#finput");
        readURL(lsType[0]);
         $('#finput').val('');
    }
    });

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $($('.imagePreview')[0]).css('background-image', 'url('+e.target.result +')');
            
        }
        reader.readAsDataURL(input.files[0]);
    }
    else {
         $($('.imagePreview')[0]).css("width", 0);
        $($('.imagePreview')[0]).css("height", 0);
    }
}

    $("#tweets-col").on("click", "#like-button", function(){
        const likeCountEle = $(this).siblings("#like-count");
        let likeCount = parseInt(likeCountEle.text());
        likeCount++;
        likeCountEle.parents('span').eq(0).addClass("fill-blue");
        likeCountEle.text(likeCount);
    });

    $("#tweets-col").on("click", "#comment-button", function(){
        const commentCountEle = $(this).siblings("#comment-count");
        let commentCount = parseInt(commentCountEle.text());
        commentCount++;
        commentCountEle.parents('span').eq(0).addClass("fill-blue");
        commentCountEle.text(commentCount);
    });

    $("#tweets-col").on("click", "#repost-button", function () {
        const today = new Date();
        const options = { month: 'short', day: 'numeric' };
        const formattedDate = today.toLocaleDateString('en-US', options);
    
        var $repostedTweet = $(this).closest("#repost-tweets").clone();
        $repostedTweet.find(".profile-user-1").removeClass("profile-user-1").addClass("hema-profile-background");
        $repostedTweet.find(".name").text("Hemaharini SM");
        $repostedTweet.find(".userName").text("@imhemahere");
        $repostedTweet.find(".tweet-date").text(formattedDate); 
    
        $repostedTweet.removeAttr("id");
    
        $("#tweets-col").prepend($repostedTweet);
    
        const repostCountEle = $(this).siblings("#repost-count");
        let repostCount = parseInt(repostCountEle.text());
        repostCount++;
        repostCountEle.parents('span').eq(0).addClass("fill-blue");
        repostCountEle.text(repostCount);
    });
    
        

    $("#post-button-comment").click(function (e){
        e.preventDefault();
        const commentText = $("#textarea-comment").val();
        if(commentText) {
            const newComment = {
                comment: commentText
            };
            addCommentToFeed(newComment);
            $("#textarea-comment").val("");
        }

        function addCommentToFeed(comment){
            const newCommentDate = `<div class="row" style="height: 65px;">
            <div class="col tweet-form-col-1 px-2 py-2" style="width: 8.666667%!important;">
                <div class="profile-user profile-user-comment" style="background-image: url(../Twitter/images/name.png);"></div>
            </div>
            <div class="col py-1">
                <div class="row" style="height: 70px;">
                    <div class="col">
                        <div class="row">
                            <span class="f-13 f-weight-400 p-null">@imhemahere</span>
                            <span class="p-null">${comment.comment}</span>
                        </div>
                        <div class="row" style="height: 36px;color: rgb(29, 155, 240);">
                        </div>
                    </div>
                </div>

            </div>
        </div>`;
        $("#feed-main-comment").append(newCommentDate);
    };
    });

});

