function findProduct(code) {

  return fetch('https://vzemxm88c1.execute-api.us-east-1.amazonaws.com/prod/products?code=' + encodeURIComponent(code)).
    then(r => {
      if (r.ok) alert("Code is valid. redeem at redeem.supercell.com");

      if(r.status === 404)
        alert('No product found for code ' + code);
      else if(r.status === 400)
        alert('Your code is invalid. Please try again. If you continue to experience this, please contact your code distributor.');
      else
        alert('HTTP error, status = ' + r.status);
    });
}

function bsapi(url) {
  // a throwaway token, hello there by the way
  return fetch('https://api.brawlstars.com/v1/' + encodeURIComponent(url)', {
    headers: {"authorization": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjI1NGJiNDFlLTc3YTAtNDMzNC04MWE2LTIyNWQ0ZDkwNTZiZiIsImlhdCI6MTU5ODIwMDUwNywic3ViIjoiZGV2ZWxvcGVyL2Y5NzFlZWZkLWI3OGMtNWEyZS0yNGEzLTNlZjdmMzc0ZDBjZCIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiMTg1LjE5OS4xMDguMTUzIiwiOTQuNTQuMTc3LjI5Il0sInR5cGUiOiJjbGllbnQifV19.m1E6tY9-SOgvh_x-YfsBT3rq6uyPkBWBoemx8z6HMHgxxQ2rHLtCBRb3jOPUBDZrbFItdvU56IcysjOmIoBerA"
).then(r => {
      if (r.ok) document.write(r.json());
      else
        alert('HTTP error, status = ' + r.status);
    });
}



}