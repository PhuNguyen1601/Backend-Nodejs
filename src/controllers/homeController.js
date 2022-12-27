import db from "../models/index";
import CRUDService from "../services/CRUDService";

let getCRUD = async (req, res) => {
  return res.render("crud.ejs");
};
let postCRUD = async (req, res) => {
  try {
    let message = await CRUDService.createNewUser(req.body);
    return res.send("post crud from server");
  } catch (e) {
    console.log(e);
  }
};

let displayCRUD = async (req, res) => {
  let data = await CRUDService.getAllUser();
  return res.render("displayCRUD.ejs", {
    dataTable: data,
  });
};

let getEditCRUD = async (req, res) => {
  let userId = req.query.id;
  if (userId) {
    let userData = await CRUDService.getUserInfoById(userId);
    return res.render("editCRUD.ejs", {
      user: userData,
    });
  } else {
    return res.send("User not found!");
  }
};

let putCRUD = async (req, res) => {
  let data = req.body;
  let allUsers = await CRUDService.updateUserData(data);
  return res.render("displayCRUD.ejs", {
    dataTable: allUsers,
  });
};

let delCRUD = async (req, res) => {
  let id = req.query.id;
  if (id) {
    await CRUDService.delUserById(id);
    return res.send("Delete the user success!");
  } else {
    return res.send("User not found!");
  }
};

module.exports = {
  getCRUD: getCRUD,
  postCRUD: postCRUD,
  displayCRUD: displayCRUD,
  getEditCRUD: getEditCRUD,
  putCRUD: putCRUD,
  delCRUD: delCRUD,
};
