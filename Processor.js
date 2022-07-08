const fs = require('fs');



class Processor{

  static Process(data){

      var div = data.split('\r\n')
      var rows = []
     
      div.forEach(row => {
          var arr = row.split(',')
          rows.push(arr)

      })

      return rows;


  }

}

module.exports = Processor;