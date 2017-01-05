'use strict';

const baseUrl = 'http://www.henrikbackman.com',
      author = 'Henrik Backman',
      jobTitle = 'GUI developer',
      assetPath = '/assets/',
      touchIcon = '/henrikbackman.png';

module.exports = function() {
  return {
    port: process.env.PORT || '3000',
    'title': author,
    'site_title': 'Portfolio of ' + author,
    'subtitle': jobTitle + ' from Sweden',
    'assetPath': assetPath,
    'imagePath': assetPath + 'img/',
    'meta': {
      'description': 'Portfolio of ' + jobTitle + ' ' + author + ', former Hyper Island student',
      'keywords': 'CSS, HTML, Javascript, Hyper Island, GUI developer, Front-end developer',
      'og': {
        'site_name': 'henrikbackman.com',
        'title': 'Portfolio of ' + author,
        'description': 'Portfolio of ' + jobTitle + ' ' + author,
        'image': baseUrl + touchIcon,
        'url': baseUrl,
      },
      'gplus': 'https://plus.google.com/+HenrikBackman',
      'updated': '170105',
      'touch_icon': touchIcon,
    },
    'about': {
      'phone': {
        'compressed': '+46734481212',
        'formatted': '+46 (0)73-448 12 12',
      },
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
        'responsive': true,
        'title': 'HM.com',
        'url': 'http://www.hm.com',
        'image': 'hm.jpg',
        'description': 'Responsive ecommerce site',
        'company': {
          'name': 'H&M',
          'url': 'http://about.hm.com',
        },
        'year': '2017',
        'added': '170104',
        'techniques': [
          'SASS',
          'HTML5',
          'jQuery',
          'React',
          'JSON-LD',
          'Middleman',
          'Git',
        ],
      },
      {
        'responsive': true,
        'title': 'Köket.se',
        'url': 'http://www.koket.se',
        'image': 'koket.jpg',
        'description': 'Responsive recipe site',
        'company': {
          'name': 'TV4',
          'url': 'http://www.tv4gruppen.se',
        },
        'year': '2016',
        'added': '160125',
        'techniques': [
          'SASS',
          'HTML5',
          'jQuery',
          'Node.js',
          'AngularJs',
          'Inline SVGs',
          'MicroData',
          'Algolia',
          'Typeahead',
          'Gulp',
          'Git',
        ],
        'awards': [
          {
            'title': 'Swedish food site of the year',
            'category': 'Food websites',
            'year': '2016',
            'url': 'http://internetworld.idg.se/2.1006/1.653277/topp-100-matsajter',
            'placement': 'gold',
          },
          {
            'title': 'Swedish digital design award',
            'category': 'Editorial - Digital',
            'year': '2016',
            'url': 'http://www.designpriset.se/vinnare.php?year=2016#post-102363',
            'placement': 'silver',
          },
          {
            'title': 'Swedish publisher prize',
            'category': 'Information websites',
            'year': '2016',
            'url': 'http://publishingpriset.org/vinnare-2016/',
            'placement': 'gold',
          },
        ],
      },
      {
        'responsive': true,
        'title': 'Recept.nu',
        'url': 'http://www.recept.nu',
        'image': 'recept.jpg',
        'description': 'Responsive recipe site',
        'company': {
          'name': 'TV4',
          'url': 'http://www.tv4gruppen.se',
        },
        'year': '2015',
        'added': '150714',
        'techniques': [
          'SASS',
          'HTML5',
          'jQuery',
          'Node.js',
          'AngularJs',
          'Gulp',
          'Git',
        ],
      },
      {
        'responsive': true,
        'title': 'COS',
        'url': 'http://www.cosstores.com',
        'image': 'cos.jpg',
        'description': 'Responsive ecommerce site',
        'company': {
          'name': 'H&M',
          'url': 'http://about.hm.com',
        },
        'year': '2014',
        'added': '150714',
        'techniques': [
          'CSS3',
          'HTML5',
          'jQuery',
          'C#',
          'TFS',
        ],
      },
      {
        'responsive': true,
        'title': '& Other Stories',
        'url': 'http://www.stories.com',
        'image': 'stories.jpg',
        'description': 'Responsive ecommerce site',
        'company': {
          'name': 'H&M',
          'url': 'http://about.hm.com',
        },
        'year': '2014',
        'added': '150714',
        'techniques': [
          'CSS3',
          'HTML5',
          'jQuery',
          'C#',
          'TFS',
        ],
      },
      {
        'responsive': true,
        'title': 'Weekday',
        'url': 'http://www.weekday.com',
        'image': 'weekday.jpg',
        'description': 'Responsive ecommerce site',
        'company': {
          'name': 'H&M',
          'url': 'http://about.hm.com',
        },
        'year': '2014',
        'added': '150714',
        'techniques': [
          'CSS3',
          'HTML5',
          'jQuery',
          'C#',
          'TFS',
        ],
      },
      {
        'responsive': true,
        'title': 'Cheap Monday',
        'url': 'http://www.cheapmonday.com',
        'image': 'cheapmonday.jpg',
        'description': 'Responsive ecommerce site',
        'company': {
          'name': 'H&M',
          'url': 'http://about.hm.com',
        },
        'year': '2014',
        'added': '150714',
        'techniques': [
          'LESS',
          'HTML5',
          'jQuery',
          'C#',
          'TFS',
        ],
      },
      {
        'responsive': false,
        'title': '203 Web Group',
        'url': 'http://www.203webgroup.se',
        'image': '203-web-group.jpg',
        'company': {
          'name': '203 Creative',
          'url': 'http://www.203creative.se',
        },
        'year': '2012',
        'added': '150714',
        'techniques': [
          'CSS3',
          'HTML5',
          'jQuery',
          'PHP',
        ],
      },
      {
        'responsive': false,
        'title': 'Zuperbox',
        'url': 'http://www.zuperbox.se',
        'image': 'zuperbox.jpg',
        'description': 'Ecommerce site',
        'company': {
          'name': '203 Creative',
          'url': 'http://www.203creative.se',
        },
        'year': '2012',
        'added': '150714',
        'techniques': [
          'CSS3',
          'HTML5',
          'jQuery',
          'Magento',
        ],
      },
      {
        'responsive': false,
        'title': 'Sony Ericsson',
        'url': '',
        'image': 'robyn.jpg',
        'description': 'Campaign for Robyn on tour',
        'company': {
          'name': 'Locomotiv',
          'url': 'http://www.locomotiv.se',
        },
        'year': '2009',
        'added': '150714',
        'techniques': [
          'After Effects',
          'CSS',
          'HTML',
          'Flash',
        ],
      }
    ],
  };
};
