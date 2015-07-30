var main = function(){
  var row = 9;
  var column = 8;
  var newRow = $('<tr/>');
  var newTd = $('<td/>');
  var aRow = $('<td/>');
  var aColumn = $('#table');
  //var newContent = $('<td/>').text('Something');
  //var anotherContent = $('<td/>').text('Oh there is something');
  //var image = newTd.append('<img src="card_1.jpg"/>');

  function createTable(row, column, aRow, aColumn){
    var complete ='';
    var buffer ='';
    var num = 65;
    for(var i = 0; i < column; i++) {
      buffer = '<tr>' + '<td>' + String.fromCharCode(num) + '</td>' + buffer;
      num++;
      for(var j = 0; j < row-1; j++){
          buffer += '<td/>';
      }
      complete = complete + buffer + '</tr>';
      buffer = '';
    }
    aColumn.append(complete);
}

  createTable(row, column, aRow, aColumn);
  //$('#table').append((newRow.append(newContent).append(anotherContent)));
  //$('#table').append($('<tr/>').append(image));
};

$(document).ready(main);
