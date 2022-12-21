import { headerCompanent } from "./headerCompanent.js";
import { sidebarCompanent } from "./sidebarCompanent.js";

let allData = {

    myAccaunt: {
        firstName: "Ismoiljon",
        lastName: "Abdulloev",
        login: "abdulloev.19",

    },
// All Posts
    allPosts: [
        
    {
      login: "accauntlogin",
      post: [
        {
          photoSrc: "",
          title: "Описание поста...",
          like: 0,
          soundname: "Оригинальная аудиодорожка",
          comment: [
            {
              accauntLogin: "",
              comment: "",
            },
          ],
        },
      ],
    },


    {
      login: "accauntlogin",
      post: [
        {
          photoSrc: "",
          title: "Описание поста...",
          like: 0,
          soundname: "Оригинальная аудиодорожка",
          comment: [
            {
              accauntLogin: "",
              comment: "",
            },
          ],
        },
      ],
    },



  ],
// All Posts

};

let myapp = {
  data() {
    return allData;
  },
  components: {
    "header-companent": headerCompanent,
    "sidebar-companent": sidebarCompanent,
  },
};

Vue.createApp(myapp).mount("#app");
