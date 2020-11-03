const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const { cloudinary } = require('../../cloudinary/cloudinary');

const authentication = require('../../middleware/authentication');

//@route            POST /api/user/:user_id
//@desc             Get a user by id
//@access           public
router.get('/user/:user_id', async (req, res) => {
  try {
    const user = await User.findById(req.params.user_id);
    if (!user) return res.status(400).json({ msg: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

//@route            PUT /api/user/:user_id
//@desc             Edit a user's avatar
//@access           private
router.put('/user/avatar', authentication, async (req, res) => {
  try {
    const userId = req.user.id;
    const { avatar } = req.body;

    console.log('this is from be', req.files.avatar);

    const user = await User.findById(userId);
    console.log(user.name);
    if (!user) return res.status(400).json({ msg: 'User not found' });

    console.log(req.body.avatar);
    const uploadAvatar = await cloudinary.uploader.upload(req.files.avatar.tempFilePath, {
      upload_preset: 'team_pumpkin',
    });
    // image processed by the cloudinary server and this is where you need to send the url to front end and save to db as well/
    console.log('this is url', uploadAvatar.url);
    // const uploadAvatar = 'avatar test';
    avatar = uploadAvatar.url;
    await user.save();
    res.status(200).json(user.avatar);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
