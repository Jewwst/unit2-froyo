window.onload = function() {
    let flavors = prompt('Strawberry', 'Vanilla', 'coffee', )
    processFlavors(flavors);
  };
  
  function processFlavors(flavors) {
  
    let flavorArray = flavors.split(',');
  
    let flavorCount = {};
  
    for (let i = 0; i < flavorArray.length; i++) {
      let flavor = flavorArray[i].trim();
  
      if (flavor in flavorCount) {
        flavorCount[flavor]++;
      } 
      else {
        flavorCount[flavor] = 1;
      }
      }
      console.table(flavorCount);
    }