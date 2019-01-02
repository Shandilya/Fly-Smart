
var options1 = {
  shouldSort: true,
  threshold: 0.4,
  maxPatternLength: 32,
  keys: [{
    name: 'iata',
    weight: 0.5
  }, {
    name: 'name',
    weight: 0.3
  }, {
    name: 'city',
    weight: 0.2
  }]
};

var fuse1 = new Fuse(airports, options1)

var ac1 = $('#arrairport')
  .on('click', function(e1) {
    e1.stopPropagation();
  })
  .on('focus keyup', search)
  .on('keydown', onKeyDown);

var wrap1 = $('<div>')
  .addClass('arrairport-wrapper')
  .insertBefore(ac1)
  .append(ac1);

var list1 = $('<div>')
  .addClass('arrairport-results')
  .on('click', '.arrairport-result', function(e1) {
    e1.preventDefault();
    e1.stopPropagation();
    selectIndex1($(this).data('index'));
  })
  .appendTo(wrap1);

$(document)
  .on('mouseover', '.arrairport-result', function(e1) {
    var index1 = parseInt($(this).data('index'), 10);
    console.log("index :" +index1)
    if (!isNaN(index1)) {
      list1.attr('data-highlight', index1);
    }
  })
  .on('click', clearResults1);

function clearResults1() {
  results1 = [];
  numResults1 = 0;
  list1.empty();
}

function selectIndex1(index1) {
  if (results1.length >= index1 + 1) {
    ac1.val(results1[index1].iata);
    clearResults1();
  }  
}

var results1 = [];
var numResults1 = 0;
var selectedIndex1 = -1;

function search(e1) {
  if (e1.which === 38 || e1.which === 13 || e1.which === 40) {
    return;
  }
  
  if (ac1.val().length > 0) {
    results1 = _.take(fuse1.search(ac1.val()), 7);
    numResults1 = results1.length;
    
    var divs1 = results1.map(function(r1, i1) {
        return '<div class="arrairport-result" data-index="'+ i1 +'">'
             + '<div><b>'+ r1.iata +'</b> - '+ r1.name +'</div>'
             + '<div class="arrairport-location">'+ r1.city +', '+ r1.country +'</div>'
             + '</div>';
     });
    
    selectedIndex1 = -1;
    list1.html(divs1.join(''))
      .attr('data-highlight', selectedIndex1);

  } else {
    numResults1 = 0;
    list1.empty();
  }
}

function onKeyDown(e1) {
  switch(e1.which) {
    case 38: // up
      selectedIndex1--;
      if (selectedIndex1 <= -1) {
        selectedIndex1 = -1;
      }
      list1.attr('data-highlight', selectedIndex1);
      break;
    case 13: // enter
      selectIndex1(selectedIndex1);
      break;
    case 9: // enter
      selectIndex1(selectedIndex1);
      e1.stopPropagation();
      return;
    case 40: // down
      selectedIndex1++;
      if (selectedIndex1 >= numResults1) {
        selectedIndex1 = numResults1-1;
      }
      list1.attr('data-highlight', selectedIndex1);
      break;

    default: return; // exit this handler for other keys
  }
  e1.stopPropagation();
  e1.preventDefault(); // prevent the default action (scroll / move caret)
}
