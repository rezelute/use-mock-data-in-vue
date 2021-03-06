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
         console.log("MUTATION, posts are: ", posts);
         state.posts = posts;
         console.log("state is now: ", state.posts);
      }
   },

   actions: {
      fetchPosts({ commit })
      {
         return client
            .fetchPosts()
            .then(posts =>
            {
               console.log("ACTION, posts are: ", posts);
               commit('setPosts', posts)
            })
      }
   }
})
