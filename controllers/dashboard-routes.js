const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: {
                user_id: req.session.user_id        // renders posts by this user
            },
            include: [ { model: User } ]
        });

        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('dashboard', {                   // renders dashboard handlebar
            posts,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;