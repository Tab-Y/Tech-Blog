const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {

    res.render('new-post', {
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
})

router.get('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        { model: User },
      ],
    });

    const commentData = await Comment.findAll({
      where: {
        post_id: req.params.id
      },
      include: [
        { model: User },
        { model: Post },
      ],
    })
    
    const posts = postData.get({ plain: true });

    const comments = commentData.map((data) => data.get({ plain:true }));   
 
    res.render('single-post', {
      ...posts,
      ...comments,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', withAuth, async (req, res) => {
    try {
        const newPost = await Post.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });
        if (!postData) {
            res.status(404).json({ message: "Sorry, there was not post found with this id."})
        }
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;