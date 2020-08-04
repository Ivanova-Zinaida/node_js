module.exports = (data, callback) => {
  let json = new Object();
  let filename = new String();

  let arr  = data.toString().split('\n');

  arr.forEach((row, i) => {
    row = row.replace(/\r/,'');
    
    if (row.includes('Content-Disposition:')) {
      filename = `${row.split('="').pop().slice(0,-5)}.json`;
    }

    if (row.includes('GET')) {
      let header = row.split(' ');
        json['method'] = header[0];
        json['uri'] = header[1];
        json['protocol'] = header[2];
    } 

    else if (row.includes('HTTP/')) {
      let header = row.split(' ');
        json['protocol'] = header[0];
        json['status_code'] = header[1];
        json['status_message'] = header.splice(2).join(' ');
    }

    else if (i >= 4 && i < arr.length - 4) {
        let nw = row.split(': ');
        json[nw[0]] = nw[1];
    }

  });
  return callback(filename, JSON.stringify(json, null, '  '));
}
