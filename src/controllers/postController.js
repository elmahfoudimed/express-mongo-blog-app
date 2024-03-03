const Post = require('../models/Post');

const create = async (req, res, next) => {
    try {
        const post = req.body;
        post.author = req.user._id;

        await Post.create(post);
        res.send('Post created successfully.');
    } catch (error) {
        next(error);
    }
}

const show = async (req, res, next) => {
    try {
        const posts = await Post.find({ author: req.user._id });
        if (posts)
            res.send(posts);
        else
            res.send('No posts found!');
    } catch (error) {
        next(error);
    }
};

const modify = async (req, res, next) => {
    try {
        const id = req.params.id;
        const { title, content } = req.body;
        const post = await Post.findOneAndUpdate(
            { _id: id },
            {
                $set: {
                    title: title,
                    content: content
                }
            }
        );
        if (post)
            res.send('Post updated successfully.');
        else
            res.send('No posts found!');
    } catch (error) {
        next(error);
    }
};

const remove = async (req, res, next) => {
    try {
        const id = req.params.id;
        const post = await Post.findOneAndDelete({ _id: id });
        if (post)
            res.send('Post deleted successfully.');
        else
            res.send('No posts found!');
    } catch (error) {
        next(error);
    }
};

module.exports = { create, show, modify, remove };