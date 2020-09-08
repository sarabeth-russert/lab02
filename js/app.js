'use strict'

$.ajax('data/page-1.json', {method: 'GET', dataType: 'JSON'})
  .then(hornedCreature => {
    hornedCreature.forEach(animal => {
      new Horned(animal).render();
    })
  })

// constructor

function Horned(object) {
  this.imagePath = object.image_url;
  this.title = object.title;
  this.description = object.description;
  this.keyWord = object.keyword;
  this.horns = object.horns;
}

Horned.prototype.render = function() {

  const myTemplate = $('#photo-template').html();
  const $newSection = $(`<section>${myTemplate}</section>`);

  $newSection.find('h2').text(this.title);
  $newSection.find('p').text(this.description);
  $newSection.find('image').attr('src', this.imagePath);
  
  $('main').append($newSection);

}