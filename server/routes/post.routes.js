import { Router } from 'express';
import * as PostController from '../controllers/post.controller';
const router = new Router();

// Get all Posts
router.route('/posts').get(PostController.getUniversities);

// Get one post by cuid
router.route('/posts/:cuid').get(PostController.getUniversity);

// Add a new Post
router.route('/posts').post(PostController.addUniversity);

// Delete a post by cuid
router.route('/posts/:cuid').delete(PostController.deleteUniversity);

// Show unis by country
router.route('/posts/:country').get(PostController.getUniByCountry);


export default router;
