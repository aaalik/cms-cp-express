import express from 'express';
import * as db from '../lib/db';

var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('admin/index', { title: 'Express' });
});

router.get('/alik', async(req, res) => {
    const getStatus = await db.testConnect();
    console.log(getStatus);
    res.send( getStatus);
});

router.get('/users', async(req, res, next) => {
    const tbl = 'user';
    const rows = await db.query(`SELECT * FROM ${tbl}`);
    console.log('Hai:',rows);
    res.render('admin/users', { 
        title: 'Express',
        rows: rows
    });
});

router.get('/users/addUser', (req, res, next) => {
    res.render('admin/addUser', { title: 'Express' });
});

router.get('/users/detailUser', (req, res, next) => {
    res.render('admin/detailUser', { title: 'Detail User' });
});

router.get('/category', (req, res, next) => {
    res.render('admin/category', { title: 'Category List' });
});

router.get('/category/addCategory', (req, res, next) => {
    res.render('admin/addCategory', { title: 'Add Category' });
});

router.get('/category/detailCategory', (req, res, next) => {
    res.render('admin/detailCategory', { title: 'Category Detail' });
});

router.get('/items', (req, res, next) => {
    res.render('admin/items', {title: 'Item List'});
});

router.get('/category/addItem', (req, res, next) => {
    res.render('admin/addItem', {title: 'Add Item'});
});

router.get('/category/detailItem', (req, res, next) => {
    res.render('admin/detailItem', {title: 'Item Detail'});
});

router.get('/updatePassword', (req, res, next) => {
    res.render('admin/updatePassword', { title: 'Change Password' });
});

router.get('/login', (req, res, next) => {
    res.render('login', { title: 'Login Admin' });
});

module.exports = router;
