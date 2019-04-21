import { Component, OnInit, Input } from '@angular/core';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular-6-social-login';
import { HttpCallsService } from '../http-calls.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  addCommentClicked = false;
  showLogin = false;

  profileId = '';
  name: string = localStorage.getItem('name');
  img: string = localStorage.getItem('image');
  date = new Date();
  id : string;
   @Input() comments: any;

  
  constructor(private socialAuthService: AuthService, private http: HttpCallsService, private route: ActivatedRoute) { }

  ngOnInit() {
            this.route.queryParams
      .subscribe(params => {
        console.log(params); // {order: "popular"}

        this.id = params.id;
         // popular
      });
  }

  removeCommentBox() {
    this.addCommentClicked = false;
   // this.showLoginReply = false;
    this.showLogin = false;
    let commentIndex = 0;
    for (const comment of this.comments) {
      // Removing Comment box here
      if (comment.commentText.length === 0) {
        this.comments.splice(commentIndex, 1);
      }
      // Removing Comment box for reply here

      let replyIndex = 0;
      for (const reply of comment.replies) {
        if (reply.commentText.length === 0) {
          comment.replies.splice(replyIndex, 1);
        }
        replyIndex++;
      }
      commentIndex++;
      // Adding Comment for reply ends box here
    }
  }

  onReply(commentId, replyId) {

    // Removing previously added comment box here
    this.removeCommentBox();
    this.onReplyCancel();

    if (commentId && replyId) {
      console.log(replyId + '<--Reply comment 3-->' + commentId);
      let commentIndex = 0;
      for (const comment of this.comments) {

        // Adding Comment box for reply here
        if (comment.commentId === commentId) {
          let replyIndex = 0;
          for (const reply of comment.replies) {
            if (reply.commentId === replyId) {
              if (!localStorage.getItem('name')) {
                reply.showLoginReply = true;
                console.log('Please login');
                return false;
              }
              comment.replies.splice(replyIndex + 1, 0,
                        new UserDetails(this.date.getTime(), localStorage.getItem('image'), localStorage.getItem('name'),
              localStorage.getItem('provider'),
              '', '', '', [], localStorage.getItem('id'), false)
              );
            }
            replyIndex++;
          }
        }
        commentIndex++;
        // Adding Comment for reply ends box here
      }
    } else {
      for (const comment of this.comments) {
        // Adding Comment box  here
        if (comment.commentId === commentId) {
          if (!localStorage.getItem('name')) {
             comment.showLoginReply = true;
            console.log('Please login');
            return false;
          }
          comment.replies.push(
            new UserDetails(this.date.getTime(), localStorage.getItem('image'), localStorage.getItem('name'),
              localStorage.getItem('provider'),
              '', '', '', [], localStorage.getItem('id'), false)
          );
        }
      }
      console.log('Comment-->' + commentId);
    }
  }

  onCancel() {
    this.removeCommentBox();
  }

  onPost(commentId, replyId, commentText) {
    this.addCommentClicked = false;
    console.log(commentText);
    const date = new Date();
    const formattedDate = date.toLocaleDateString('en-GB', { month: 'short', day: 'numeric', year: 'numeric' }).replace(/ /g, '-');
    const dateArray = formattedDate.split('-');
    const requiredDate = dateArray[1] + ' ' + dateArray[0] + ', ' + dateArray[2];
    const requiredTime = date.toTimeString();
    if (commentId && replyId) {
      let commentIndex = 0;
      for (const comment of this.comments) {

        if (comment.commentId === commentId) {
          let replyIndex = 0;
          for (const reply of comment.replies) {
            if (reply.commentId === replyId) {
              reply.commentId = Date.now() ;
              reply.commentText = commentText;
              reply.commentedTime = requiredDate + ' @ ' + requiredTime; // Construct Date in backend and display based on region
            }
            replyIndex++;
          }
        }
        commentIndex++;
        // Adding Comment for reply ends box here
      }
    } else {
      for (const comment of this.comments) {
        // Adding Comment box  here
        if (comment.commentId === commentId) {
          comment.commentId = Date.now();
          comment.commentText = commentText;
          comment.commentedTime = requiredDate + ' @ ' + requiredTime; // Construct Date in backend and display based on region
        }
      }
      console.log('Comment-->' + commentId);
    }
    this.http.putComment({'title': this.id, 'comments': this.comments}).subscribe( data =>{
      alert('comment saved successfully');
    },error =>{
      alert('error');
    });
    console.log(this.comments);
  }

  onAddComment() {
    if (!localStorage.getItem('name')) {
      this.showLogin = true;
      this.addCommentClicked = true;
      console.log('Please login');
      return false;
    }
    this.comments.push(
            new UserDetails(this.date.getTime(), localStorage.getItem('image'), localStorage.getItem('name'),
              localStorage.getItem('provider'),
              '', '', '', [], localStorage.getItem('id'), false)
      );

    // this.comments.push(JSON.parse(this.userInfo));
  }

  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform === 'facebook') {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialPlatform === 'google') {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform + ' sign in data : ', userData);
        this.addCommentClicked = false;
        this.showLogin = false;
        this.onReplyCancel();
        localStorage.setItem('email', userData.email);
        localStorage.setItem('id', userData.id);
        localStorage.setItem('image', userData.image);
        localStorage.setItem('name', userData.name);
        localStorage.setItem('provider', userData.provider);
        this.name = localStorage.getItem('name');
        // Now sign-in with userData
        // ...
      }
    );
  }
  onSignOut() {
    localStorage.removeItem('email');
    localStorage.removeItem('id');
    localStorage.removeItem('image');
    localStorage.removeItem('name');
    localStorage.removeItem('provider');
    this.name = localStorage.getItem('name');
    console.log('Sign out');
  }

  onReplyCancel() {
    for (const comment of this.comments) {
      comment.showLoginReply = false;
      for (const reply of comment.replies) {
        reply.showLoginReply = false;
      }
    }
  }

}
class UserDetails {
    commentId: number;
    imageSrc: string;
    userName: string;
    userSource: string;
    userLink: string;
    commentedTime: string;
    commentText: string;
    replies: Array<any>;
    profileId: string;
    showLoginReply: boolean;

    constructor(_commentId: number, _imageSrc: string, _userName: string, _userSource: string ,
     _userLink: string, _commentedTime: string,
     _commentText: string, _replies: Array<any>, _userProfileId: string, _showLoginReply: boolean) {
        return {
              commentId : _commentId,
    imageSrc : _imageSrc,
    userName : _userName,
    userSource : _userSource,
    userLink : _userLink,
    commentedTime : _commentedTime,
    commentText : _commentText,
    replies : _replies,
    profileId : _userProfileId,
    showLoginReply : _showLoginReply
        };
    }

}
