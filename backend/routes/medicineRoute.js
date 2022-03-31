const express = require("express");
const {
  getAllMedicines,
  createMedicine,
  updateMedicine,
  deleteMedicine,
  getMedicineDetails,
} = require("../controllers/medicineController");
const { isAuthenticatedUser,authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/medicines").get(getAllMedicines);

router.route("admin/medicine/new").post(isAuthenticatedUser,authorizeRoles("admin"), createMedicine);

router
  .route("admin/medicine/:id")
  .put(isAuthenticatedUser,authorizeRoles("admin"),updateMedicine)
  .delete(isAuthenticatedUser,authorizeRoles("admin"),deleteMedicine)
  
router.route("/medicine/:id").get(getMedicineDetails);

module.exports = router;
