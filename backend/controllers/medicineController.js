const Medicine = require("../models/medicineModel");
const ErrorHandler = require("../utils/errorhandler");
const catchErrors = require("../middleware/catchErrors");
const ApiFeatures = require("../utils/apifeatures");

exports.createMedicine = catchErrors(async (req, res, next) => {
  const medicine = await Medicine.create(req.body);

  res.status(201).json({
    success: true,
    medicine,
  });
});

exports.getAllMedicines = catchErrors(async (req, res) => {
  const resultPerPage = 5;
  const medicineCount = await Medicine.countDocuments();
  const apiFeatures = new ApiFeatures(Medicine.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);

  const medicines = await apiFeatures.query;

  res.status(200).json({
    success: true,
    medicines,
    medicineCount
  });
});

exports.getMedicineDetails = catchErrors(async (req, res, next) => {
  let medicine = await Medicine.findById(req.params.id);

  if (!medicine) {
    return next(new ErrorHandler("Medicine Not Found", 404));
  }

  res.status(200).json({
    success: true,
    medicine,
  });
});

exports.updateMedicine = catchErrors(async (req, res, next) => {
  let medicine = await Medicine.findById(req.params.id);

  if (!medicine) {
    return next(new ErrorHandler("Medicine Not Found", 404));
  }

  medicine = await Medicine.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    medicine,
  });
});

exports.deleteMedicine = catchErrors(async (req, res, next) => {
  const medicine = await Medicine.findById(req.params.id);

  if (!medicine) {
    return next(new ErrorHandler("Medicine Not Found", 404));
  }

  await medicine.remove();

  res.status(200).json({
    success: true,
    message: "Xoa Thanh Cong",
  });
});
