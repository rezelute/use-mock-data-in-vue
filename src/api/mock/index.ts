//import posts from './data/posts'
import posts from './data/posts.json';

const fetch = (mockData: any, time = 0) =>
{
   return new Promise((resolve) =>
   {
      setTimeout(() =>
      {
         console.log("RESOLVED: ", mockData);
         resolve(mockData)
      }, time)
   })
}

export default {
   fetchPosts()
   {
      console.log("posts in API folder: ", posts);
      return fetch(posts, 1000) // wait 1s before returning posts
   }
}
