const express = require('express');

const route = express.Router();

const db = require('../model/model_widgets.js');

route.get('/', (req, res, next) => {
  db.findAll((err, data) => {
    if (err) return res.send('Error all widget!');
    res.render('all', {
      title: 'Все виджеты',
      route_url: '/widgets',
      arrData: data,
    });
  });
});

route.get('/add', (req, res, next) => {
  res.render('add', {
    title: 'Новый виджет',
    route_url: '/widgets',
  });
});

route.post('/add', (req, res, next) => {
  db.add(req.body, (err, data) => {
    if (err) return res.send('Ошибка при добавлении!');
    res.redirect('/widgets/');
  });
});

route.get('/delete/:id', (req, res, next) => {
  db.find(parseInt(req.params.id), (err, data) => {
    if (err || !data) return res.send('Ошибка при удалении!');
    res.render('delete', {
      title: 'Удалить виджет',
      route_url: '/widgets',
      data,
    });
  });
});

route.post('/delete/:id', (req, res, next) => {
  db.delete(parseInt(req.params.id), (err, data) => {
    if (err || !data) return res.send('Ошибка при удалении!');
    res.redirect('/widgets/');
  });
});

route.get('/added/:id', (req, res, next) => {
  db.find(parseInt(req.params.id), (err, data) => {
    if (err || !data) return res.send('Ошибка при редактировании!');
    res.render('added', {
      title: 'Редактировать виджет',
      route_url: '/widgets',
      id: 'data.id',
      data,
    });
  });
});

route.post('/added', (req, res, next) => {
  db.edit(req.body, (err, data) => {
    if (err) return res.send('Ошибка при добавлении!');
    res.redirect('/widgets/');
  });

});

module.exports = route;

