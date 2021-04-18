// links to models
const User = require('./User')
const Post = require('./Post');

// set the associations between users and posts
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Post }