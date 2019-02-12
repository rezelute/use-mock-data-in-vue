import Vue from 'vue'
import Vuex from 'vuex'
import client from 'api-client'

Vue.use(Vuex)

export default new Vuex.Store({
   state: {
      posts: []
   },
   mutations: {
      setPosts(state, posts)
      {
         console.log("OK.", posts);
         state.posts = posts;
         console.log("POSTS: ", this.state);
      }
   },

   actions: {
      fetchPosts({ commit })
      {
         return client
            .fetchPosts()
            .then(posts =>
            {
               console.log("ACTION:", posts);
               commit('setPosts', posts)
            })
      }
   }
})
