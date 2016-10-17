// Empty JS for your own code to be here

var overbust = document.getElementById('overbust');
var underbust = document.getElementById('underbust');
var resultdisplay = document.getElementById('Results');
var RHeader = document.getElementById('RHeader');


var sizeMost ={
  "gc2b":{
    XXS:[23,30],
    XS:[30,32],
    S:[32,34],
    M:[34,36],
    L:[36,38],
    XL:[38,40],
    XXL:[40,42],
    XXXL:[42,44],
    XXXXL:[44,47],
    XXXXXL:[47,52]
  },
  "T_Kingdom": {
    S:[28,30],
    M:[31,33],
    L:[34,36],
    XL:[37,39],
    XXL:[40,42]
  },

  "Underworks" : {
    XS: [29,31],
    S: [32,34],
    M: [35,39],
    L: [40,43],
    XL: [44,47],
    XXL: [48,51],
    XXXL: [52,55],
    XXXXL:[56,59]
  },
  "Peecock_VMLB8390_VFLB580" : {
    S: [25,27],
    M: [28,30],
    L: [31,33],
    XL: [34,36],
    XXL: [37,39]
  },
  "Peecock_MLB290_MLB490" :{
    S: [28,30],
    M: [31,33],
    L: [34,36],
    XL: [37,39],
    XXL: [40,42],
    XXXL:[43,45]
  }
}
var sizeDanae = {
  "Danae" : {
    XS:[27,28.5],
    S: [30,31.5],
    M: [33,34.5],
    L: [36,37.5],
    XL: [39,40/5],
    XXL: [42,43.5]
  }
}

overbust.addEventListener("keypress",function(e){
  var key = e.keyCode ;
  var results = null;
  if(key===13){
    e.preventDefault();
    try {
      var size = parseFloat(e.target.value);
      console.log("Size is ", size);
      results = search(sizeMost, size);
    } catch (err) {
      window.alert("Put in a proper number please");
    }
    if(results){
      console.log("There are results");
      var ul = document.createElement('ul');
      ul.className='list-group results';
      if(results.length>0){
        results.forEach(function(result){
          var listitem = document.createElement('li');
          ul.appendChild(listitem);
          listitem.className='list-group-item';
          listitem.innerText = "Brand: " + result.brand + " , Size : " + result.size
        });
      }
      resultdisplay.appendChild(ul);
      resultdisplay.style="display: block"
    } else {
      console.log("nothing")
    }
  }
});
underbust.addEventListener("keypress",function(e){
  var key = e.keyCode ;
  var results = null;
  if(key===13){
    e.preventDefault();
    try {
      var size = parseFloat(e.target.value);
      console.log("Size is ", size);
      results = search(sizeDanae, size);
    } catch (err) {
      window.alert("Put in a proper number please");
    }
    if(results){
      console.log("There are results");
      var ul = document.createElement('ul');
      ul.className='list-group results';
      if(results.length>0){
        results.forEach(function(result){
          var listitem = document.createElement('li');
          ul.appendChild(listitem);
          listitem.className='list-group-item';
          listitem.innerText = "Brand: " + result.brand + " , Size : " + result.size
        });
      } else {
        RHeader.innerText = "Nothing found "
      }
      resultdisplay.appendChild(ul);
      resultdisplay.style="display: block"
    } else {
      console.log("nothing")
    }
  }

})
function uniq(a) {
    return a.sort(function(a,b){
      return a.brand - b.brand
    }).filter(function(item, pos, ary) {
        return !pos || item != ary[pos - 1];
    })
}

function search(sizeCharts,size){
  if ( isNaN(size)){
    throw new Error("Incorrect Input");
  }
  var results = Object.keys(sizeCharts).reduce(function(arr,brand){
    //get every size key in brand object
    Object.keys(sizeCharts[brand]).forEach(function(sizeRange){
      if(sizeCharts[brand][sizeRange][0]<= size && size <= sizeCharts[brand][sizeRange][1]){
        arr.push({brand: brand , size: sizeRange });
      }
    })
    return arr;
  },[]);
  return uniq(results);
}
function test(size){
  var res = search(sizeMost, size);
  console.log(res);
}
//test(33);
