const express = require("express");
const {
  getAllMedicines,
  createMedicine,
  updateMedicine,
  deleteMedicine,
  getMedicineDetails,
} = require("../controllers/medicineController");

const router = express.Router();

router.route("/medicines").get(getAllMedicines);

router.route("/medicine/new").post(createMedicine);

router.route("/medicine/:id").put(updateMedicine).delete(deleteMedicine).get(getMedicineDetails);

module.exports = router;
