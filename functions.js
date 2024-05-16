const EmployeeRecordModel = require("./model/employeemodel");

const getEmployeeRecord = async (req, res) => {
  try {
    const EmployeeRecord = await employeeModel.find();

    if (employeeRecord.length > 0) {
      res.status(200).json(employeeRecord);
    } else {
      res.status(400).json({ message: "no items available" });
    }
  } catch (error) {
    console.log(error);
  }
};

const postEmployee = async (req, res) => {
  const { firstName, surName, sex, phone, email } = req.body;

  try {
    if (!name || !brand || !description || !price || !quantity) {
      res.status(400).json({ message: "missing required fields" });
    }

    const newEmployeeRecord = new employeeModel({
      firstName,
      surName,
      sex,
      phone,
      email,
    });

    await newemployeeRecord.save();

    return res.status(200).json(newEmployeeRecord);
  } catch (error) {
    console.log(error);
  }
};

const updateEmployeeRecord = async (req, res) => {
  const { id } = req.params;

  const { firstNmae, surNmae, sex, phone, email } = req.body;
  try {
    const updateRecordRequest = await EmployeeModel.findByIdAndUpdate(
      id,
      { firstName, surName, sex, phone, email },
      { new: true }
    );

    if (updateRecordRequest) {
      res.status(200).json({
        message: "Record updated successfully",
        updateRecordRequest,
      });
    } else {
      res.status(400).json({ message: "Record update not successful" });
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteEmployeeRecord = async (req, res) => {
  const { id } = req.params;

  try {
    const deleteRecordRequest = await EmployeeModel.findByIdAndDelete(id);

    if (deleteRecordRequest) {
      res.status(200).json({ message: "Employee deleted successfully" });
    } else {
      res.status(400).json({ message: "Employee deletion failed" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getEmployeeRecord,
  updateEmployeeRecord,
  deleteEmployeeRecord,
  postEmployeeRecord
};