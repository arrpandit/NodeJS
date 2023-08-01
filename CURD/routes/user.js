const express = require("express");
const {
  haldleGetAllUsers,
  haldle_Add_user,
  GetUsersbyID,
  DeleteUsersbyID,
  patchUsersbyID
} = require("../controllers/users");

const router = express.Router();

router.route("/").get(haldleGetAllUsers).post(haldle_Add_user);

//user get by id
router
  .route("/:id")
  .get(GetUsersbyID)
  .patch(patchUsersbyID)
  .delete(DeleteUsersbyID);

module.exports = router;
