const router = require('express').Router();
const postController = require('../controllers/postController');
const { isAuthenticated } = require('../middleware/authentication');

router.use(isAuthenticated);

router.route('/posts')
    .post(postController.create)
    .get(postController.show);

router.route('/posts/:id')
    .put(postController.modify)
    .delete(postController.remove);

module.exports = router;