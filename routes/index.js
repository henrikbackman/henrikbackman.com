var express = require('express');
var router = express.Router();

var author = 'Henrik Backman';

var data = {
  'title': author,
  'site_title': 'Portfolio of '+ author,
  'subtitle': 'GUI developer from Sweden',
  'assetPath': '/assets/',
  'imagePath': '/assets/img/',
  'meta': {
    'description': 'Portfolio of GUI developer ' + author + ', former Hyper Island student',
    'keywords': 'CSS, HTML, Javascript, Hyper Island, GUI developer, Front-end developer',
    'og': {
      'site_name': 'henrikbackman.com',
      'title': 'Portfolio of ' + author,
      'description': 'Portfolio of GUI developer ' + author,
      'image': 'http://www.henrikbackman.com/henrikbackman.png',
      'url': 'http://www.henrikbackman.com/',
    },
    'updated': '150417',
  },
  'about': {
    'phone': '+46 (0)73-448 12 12',
    'email': 'henrik.backman@gmail.com',
    'social': [
      {
        'name': 'LinkedIn',
        'url': 'http://se.linkedin.com/pub/henrik-backman/5/140/a4a',
      },
      {
        'name': 'GitHub',
        'url': 'https://github.com/henrikbackman',
      },
      {
        'name': 'Twitter',
        'url': 'https://twitter.com/HenrikBackman',
      },
    ],
  },
  'projects': [
    {
      'title': 'Köket.se',
      'url': 'http://www.koket.se',
      'image': 'koket.jpg',
      'description': 'Responsive recipe site at ',
      'company': {
        'name': 'TV4',
        'url': 'http://www.tv4gruppen.se',
      },
      'year': '2016',
      'added': '160125',
    },
    {
      'title': 'Recept.nu',
      'url': 'http://www.recept.nu',
      'image': 'recept.jpg',
      'description': 'Responsive recipe site at ',
      'company': {
        'name': 'TV4',
        'url': 'http://www.tv4gruppen.se',
      },
      'year': '2015',
      'added': '150714',
    },
    {
      'title': 'COS',
      'url': 'http://www.cosstores.com',
      'image': 'cos.jpg',
      'description': 'Responsive ecommerce site for ',
      'company': {
        'name': 'H&M',
        'url': 'http://about.hm.com',
      },
      'year': '2014',
      'added': '150714',
    },
    {
      'title': '& Other Stories',
      'url': 'http://www.stories.com',
      'image': 'stories.jpg',
      'description': 'Responsive ecommerce site for ',
      'company': {
        'name': 'H&M',
        'url': 'http://about.hm.com',
      },
      'year': '2014',
      'added': '150714',
    },
    {
      'title': 'Weekday',
      'url': 'http://www.weekday.com',
      'image': 'weekday.jpg',
      'description': 'Responsive ecommerce site for ',
      'company': {
        'name': 'H&M',
        'url': 'http://about.hm.com',
      },
      'year': '2014',
      'added': '150714',
    },
    {
      'title': 'Cheap Monday',
      'url': 'http://www.cheapmonday.com',
      'image': 'cheapmonday.jpg',
      'description': 'Responsive ecommerce site for ',
      'company': {
        'name': 'H&M',
        'url': 'http://about.hm.com',
      },
      'year': '2014',
      'added': '150714',
    },
    {
      'title': '203 Web Group',
      'url': 'http://www.203webgroup.se',
      'image': '203-web-group.jpg',
      'description': 'At ',
      'company': {
        'name': '203 Creative',
        'url': 'http://www.203creative.se',
      },
      'year': '2012',
      'added': '150714',
    },
    {
      'title': 'Zuperbox',
      'url': 'http://www.zuperbox.se',
      'image': 'zuperbox.jpg',
      'description': 'At ',
      'company': {
        'name': '203 Creative',
        'url': 'http://www.203creative.se',
      },
      'year': '2012',
      'added': '150714',
    },
    {
      'title': 'Sony Ericsson',
      'url': '',
      'image': 'robyn.jpg',
      'description': 'Campaign for Robyn on tour - at ',
      'company': {
        'name': 'Locomotiv',
        'url': 'http://www.locomotiv.se',
      },
      'year': '2009',
      'added': '150714',
    }
  ],
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Henrik Backman', data: data });
});

module.exports = router;
