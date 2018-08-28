import {numberFormat} from '../src/Utilities'
const MultiSum = function(array) {
    return function() {
     
      return {
        sum: 0,
        push(record,val) {
          if(val)
          {
             if (!isNaN(parseFloat(record[val]))) {
              this.sum += parseFloat(record[val]);
             }
          
          }else if(array&&array.length>0)
          {
              if(!isNaN(parseFloat(record[array[0]]))) {
              this.sum += parseFloat(record[array[0]]);
              }
         }
      },
        value() {
          return this.sum;
        },
        format: numberFormat(),
        isMultiVal:true,
      };
    };
  };

export default MultiSum;
