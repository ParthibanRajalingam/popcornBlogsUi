import { Component, OnInit } from '@angular/core';
import { HttpCallsService } from '../http-calls.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detailed-blog',
  templateUrl: './detailed-blog.component.html',
  styleUrls: ['./detailed-blog.component.css']
})
export class DetailedBlogComponent implements OnInit {


getDetailedPost =[{
'uniqueBlogName' :  'Just_a_Standard_Format_Post',
'postedDate' :  'December 15, 2018',

"title": "10 People who died the most painful deaths",
    "categories": [
        "Interesting",
        "Interesting",
        "General Knowledge",
        "Creepy",
        "Weird",
        "History"
    ],
    "imageSrc": "http://localhost:3000/images/file_1550058331394_Saw-Bear-Trap.jpg",
    "intro": "There are million ways to die, starting from dying peacefully in sleep to death by a tortoise dropped to head by an eagle that had mistaken a bald head for a rock. Then there are deaths that will give you nightmares.The following are those kind of worst nightmares that will give you chills.",
    "contents": [
        {
            "type": "leadPara",
            "content": "There are million ways to die, starting from dying peacefully in sleep to death by a tortoise dropped to head by an eagle that had mistaken a bald head for a rock. Then there are deaths that will give you nightmares.The following are those kind of worst nightmares that will give you chills."
        },
        {
            "type": "h3Heading",
            "content": "10.Kyle McGarity(1977 to 2002)"
        },
        {
            "type": "descImage",
            "content": "http://localhost:3000/images/file_1550058358645_steam.jpg"
        },
        {
            "type": "simplePara",
            "content": "Heard of steam cooking.? This man was steam cooked to his death. Mr. McGarity fell about 15 feet into a manhole flooded with scalding hot water and filled with steam. It took several hours for workers to reduce the steam enough to pull Mr. McGarity's body from the manhole. He died of steam burns and scalding on 60 percent of his body."
        },
        {
            "type": "h3Heading",
            "content": "9.Ishikawa Goemon(\u200eAugust 24, 1558 - October 8, 1594)"
        },
        {
            "type": "descImage",
            "content": "http://localhost:3000/images/file_1550058390985_Ishikawa Goemon.jpg"
        },
        {
            "type": "simplePara",
            "content": "Ishikawa Goemon was a semi-legendary Japanese outlaw hero who stole gold and other valuables to give to the poor.He and his son were boiled alive in public after their failed assassination attempt on the Warring States-period warlord Toyotomi Hideyoshi."
        },
        {
            "type": "h3Heading",
            "content": "8.Robert-François Damiens; (Jan. 9, 1715, La Tieuloy, France\u2014died March 28, 1757, Paris)"
        },
        {
            "type": "descImage",
            "content": "http://localhost:3000/images/file_1550058428391_Robert-François Damiens  (Jan. 9, 1715, La Tieuloy, France\u2014died March 28, 1757, Paris).jpg"
        },
        {
            "type": "simplePara",
            "content": "French fanatic who in 1757 made an unsuccessful attempt on the life of King Louis XV.Condemned as a regicide, he was sentenced to be torn in pieces by horses in the Place de Grève. For four hours, before being put to death, he was barbarously tortured with red-hot pincers; and molten wax, lead, and boiling oil were poured into his wounds. After his death his house was razed to the ground, his brothers and sisters were ordered to change their names, and his father, wife, and daughter were banished from France."
        }
    ],
    "tags": [
        "death",
        "  quartering",
        "  torture",
        "  painful death"
    ],
    "authorName": "Parth",
    "authorImage": "http://localhost:3000/images/file_1550058253872_parth.jpg",
    "aboutAuthor": "Full Stack Developer, Blogger.",
    "postType": "text",
    "likes": 0,
    "comments": [],
    "mostFeaturedPost": "no",
    "featuredPost": "no",
    "published": false,
    "previousPost" :"",
    "nextPost" : ""

}];

detailedPost = this.getDetailedPost[0];
id: String;
loading: Boolean = true;
comments : any; 

  constructor(private http: HttpCallsService, private route: ActivatedRoute) { }

  ngOnInit() {

        this.route.queryParams
      .subscribe(params => {
        console.log(params); // {order: "popular"}

        this.id = params.id;
         // popular
      });
      this.http.getDetailedBlog(this.id).subscribe(data => {
      console.log(data);
      this.detailedPost = data[0];
      this.comments = data[0].comments;
      this.loading = false;
    }, error => {
      alert(error);
      this.loading = false;
    });
  }

}
