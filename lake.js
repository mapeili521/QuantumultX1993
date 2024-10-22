[rewrite_local]
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/.+$) url script-response-body  https://raw.githubusercontent.com/mapeili521/QuantumultX1993/refs/heads/main/lake.js
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/.+$) url script-request-header  https://raw.githubusercontent.com/mapeili521/QuantumultX1993/refs/heads/main/lake.js
[mitm] 
hostname = api.revenuecat.com
*******************************/
let obj = {};

if(typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  obj.headers = $request.headers;
}else {
  let body = JSON.parse(typeof $response != "undefined" && $response.body || null);
  if(body && body.subscriber) {
    const product_id = "com.lake.coloring.sub.all1.promo2.yearly2";
    const entitlement = "standard";
    let data = {"expires_date": "2999-01-01T00:00:00Z","original_purchase_date":"2021-01-01T00:00:00Z","purchase_date": "2021-01-01T00:00:00Z","ownership_type": "PURCHASED","store": "app_store"};
    let subscriber = body.subscriber;
    subscriber.entitlements[(entitlement)] = subscriber.subscriptions[(product_id)] = data;        
    subscriber.entitlements[(entitlement)].product_identifier = product_id;   
    obj.body = JSON.stringify(body);
  } 
}

$done(obj);
