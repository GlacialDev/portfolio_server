const mongoose = require('mongoose');
const formidable = require('formidable');
const fs = require('fs');
const path = require('path');
const http = require('request');

const apiOptions = {
  server: "http://localhost:3000"
}

module.exports.getAdminMyWorks = function(req, res) {
  res.render('pages/admin', { title: 'Админка' , adress: 'my-works'});
}

module.exports.addSlides = function(req, res) {
  let form = new formidable.IncomingForm();
  let upload ='public/upload/slider';
  let fileName = path.join(upload, 'avatar.jpg');


  form.uploadDir = path.join(process.cwd(), upload);
  // console.log(form.uploadDir);
  form.parse(req, function(err, fields, files) {
    // console.log("parsing done");
    // console.log(res);
    if(err) return res.redirect('/admin-my-works');

    if(!fields.name || !fields.techs) {
      fs.unlink(files.photo.path);
      return res.redirect('/admin-my-works');
    }

    fileName = path.join(upload, files.photo.name);
    // console.log(fileName);

    fs.rename(files.photo.path, fileName, function(err) {
      if (err) {
        // console.log(err);
        fs.unlink(fileName);
        fs.rename(files.photo.path, fileName);
      }
    })

    // module.exports.addSlides = function(req, res) {
      const pathApi = '/api/add/slide';
      const requestOptions = {
        url: apiOptions.server + pathApi,
        method: 'POST',
        json: {
          name: files.photo.name,
          techs: fields.techs
        } 
      };
      http(requestOptions, function(error, response, body) {
        res.redirect('/admin-my-works');
      });
    // }
  });
}