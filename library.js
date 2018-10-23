function easyHTTP() {
    this.http = new XMLHttpRequest();
}

// make and http get request
easyHTTP.prototype.get = function(url, callback) {
    this.http.open('GET', url, true);
    this.http.onload = () => {
        if (this.http.status === 200) {
            callback(this.http.responseText);
        } else {
            callback('Error: ' + this.http.status);
        }
    }
    this.http.send();
}



// make an http post request
easyHTTP.prototype.post = function(url, data, callback) {
        this.http.open('POST', url, true);
        this.http.setRequestHeader('content-type', 'application/json');
        this.http.onload = () => {
            callback(null, this.http.responseText);
        }
        this.http.send(JSON.stringify(data));
    }
    // make and http PUT request
easyHTTP.prototype.put = function(url, data, callback) {
        this.http.open('PUT', url, true);
        this.http.setRequestHeader('content-type', 'application/json');
        this.http.onload = () => {
            callback(null, this.http.responseText);
        }
        this.http.send(JSON.stringify(data));
    }
    // make and http delete request
easyHTTP.prototype.delete = function(url, callback) {
    this.http.open('DELETE', url, true);
    this.http.setRequestHeader('content-type', 'application/json');
    this.http.onload = () => {
        callback(null, 'POST DELETED');
    }
    this.http.send(JSON.stringify(data));
}