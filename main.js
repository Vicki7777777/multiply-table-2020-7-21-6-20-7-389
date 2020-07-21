function createMultiplyTable(start, end) {

  if(IsVaild(start, end)){
    return GetMutiplicationTable(start, end);
  }else{
    return null;
  }
}


function IsVaild(start, end){
  var flag = true;
  if(start > end){
    flag = false;
  }
  if(start >= 1000 || start <= 1 || end >= 1000 || end <= 1){
    flag = false;
  }
  return flag;
}

function GetMutiplicationTable(start, end){
  var result = new Array();
  for(let i = start;i<=end;i++){
    let str = PrintLine(start,i)
    if(str){
      result.push(str);
    }
  }
  console.log(result)
    return result.join("\n");
}

function PrintLine(lineStart, lineEnd){
  let str = "";
  for(let i = lineStart;i<=lineEnd;i++){
    str += +i+"*"+lineEnd+"="+(i*lineEnd);
    str += (i == lineEnd?'':'\t');
  }
  return str;
}

/* function Getexpression(multiplicand,multiplier){

} */
module.exports = {
  createMultiplyTable,
};
