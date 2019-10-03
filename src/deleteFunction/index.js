export default  ( id, deleteStaffById ) =>{
    var qs = require("querystring");
    var http = require("http");
    var options = {
      "method": "DELETE",
      "hostname": [
       "127.0.0.1:2000/api/staffs"
      ],
      "headers": {
        "Content-Type": "application/x-www-form-urlencoded",
        "cache-control": "no-cache",
        "mode":'cors'
      }
    };
    var req = http.request(options, function (res) {
    var chunks = [];
      res.on("data", function (chunk) {
        chunks.push(chunk);
      });
    
      res.on("end", function () {
        var body = Buffer.concat(chunks);
        deleteStaffById(body.toString())
      });
    });  
    req.write(qs.stringify({ id: `${id}`, undefined: undefined }));
    req.end();
    
}