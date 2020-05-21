class Post {
  constructor(title, link, author, img, category) {
    this.title = title;
    this.link = link;
    this.author = author;
    this.img = img;
    this.category = category;
  }
}

const app = new Vue({
  el: "#app",
  data: {
    header: "Collection of Development Resources",
    search: "",
    postList: [
      new Post(
        "Figma",
        "https://figma.com/",
        "Chris",
        "https://vuejs.org//images/logo.png",
        "Design"
      ),
      new Post(
        "React.js",
        "https://facebook.github.io/react/",
        "Tim",
        "https://daynin.github.io/clojurescript-presentation/img/react-logo.png",
        "Framework"
      ),
      new Post(
        "Angular.js",
        "https://angularjs.org/",
        "Sam",
        "https://angularjs.org/img/ng-logo.png",
        "Framework"
      ),
      new Post(
        "Ember.js",
        "http://emberjs.com/",
        "Rachel",
        "http://www.gravatar.com/avatar/0cf15665a9146ba852bf042b0652780a?s=200",
        "Framework"
      ),
      new Post(
        "Adobe XD",
        "https://www.meteor.com/",
        "Chris",
        "http://hacktivist.in/introduction-to-nodejs-mongodb-meteor/img/meteor.png",
        "Design"
      ),
      new Post(
        "Webmaker",
        "http://aurelia.io/",
        "Tim",
        "https://cdn.auth0.com/blog/aurelia-logo.png",
        "Tool"
      ),
      new Post(
        "Node.js",
        "https://nodejs.org/en/",
        "A. A. Ron",
        "https://code-maven.com/img/node.png",
        "Framework"
      ),
      new Post(
        "Pusher",
        "https://pusher.com/",
        "Alex",
        "https://avatars1.githubusercontent.com/u/739550?v=3&s=400",
        "Framwork"
      ),
      new Post(
        "Feathers.js",
        "http://feathersjs.com/",
        "Chuck",
        "https://cdn.worldvectorlogo.com/logos/feathersjs.svg",
        "Framwork"
      ),
      new Post(
        "ISO 8601",
        "https",
        "Frei",
        ".img",
        "Meta"
        ),
    ],
  },
  computed: {
    filteredList() {
      return this.postList.filter((post) => {
        return post.title.toLowerCase().includes(this.search.toLowerCase()) || post.category.toLowerCase().includes(this.search.toLowerCase()); /*Search function itterates both title and category*/
      });
    },
    categoryList() {
      for (post in postList) {
        console.log(post);
      }
    },
  },
});
