class Api {
    constructor(options) {
    this.options = options;
    }

    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(res.status)
        }
        return res.json();
    }

    sendInfo(email, name, phone) {
        return fetch(this.options.baseUrl + "/feedback", {
            method: "POST",
            headers: this.options.headers,
            body: JSON.stringify({
                name: name,
                phone: phone,
                email: email,
            })
        }).then((res) => {
            return this._getResponseData(res);
        })
    }
}

export const api = new Api({
    baseUrl: "http://localhost:8080",
    headers: {
        "Content-Type": "application/json",
    }
})