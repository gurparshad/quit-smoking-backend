const express = require("express");
const router = express.Router();
const { UserDetails, User } = require("../../models");

// add user Details
router.post("/api/1.0/userDetails/:userId", async (req, res) => {
  const { userId } = req.params;
  const {
    packetCost,
    cigarettesInPack,
    cigarettesEachDay,
    years,
    currency,
    quitDate,
  } = req.body;
  try {
    const user = await User.findOne({ where: { id: userId } });
    const result = await UserDetails.create({
      packetCost,
      cigarettesInPack,
      cigarettesEachDay,
      years,
      currency,
      quitDate,
      userId: user.id,
    });
    return res.json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

// get user details by user Id
router.get("/api/1.0/userDetails/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const result = await UserDetails.findOne({ where: { userId: userId } });
    return res.json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

// update user details by user id
router.patch("/api/1.0/userDetails/update/:userId", async (req, res) => {
  const { userId } = req.params;
  const {
    packetCost,
    cigarettesInPack,
    cigarettesEachDay,
    years,
    currency,
    quitDate,
  } = req.body;
  try {
    const user = await User.findOne({ where: { id: userId } });
    const result = await UserDetails.update(
      {
        packetCost,
        cigarettesInPack,
        cigarettesEachDay,
        years,
        currency,
        quitDate,
        userId: user.id,
      },
      { where: { userId: user.id } },
    );
    return res.json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

module.exports = router;
