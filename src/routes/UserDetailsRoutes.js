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

module.exports = router;
