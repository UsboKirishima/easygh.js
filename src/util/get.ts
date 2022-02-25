import http from "node:http";
import https from "node:https";

export function get(url) {
    if (url.includes('https')) {
        https.get(url, r => {
            r.setEncoding('utf8');
            let body = "";

            r.on('data', function (chunk) {
                body += chunk;
            })

            r.on('end', () => {
                return JSON.parse(body)
            })
        })
    } else {
        if (url.includes('http')) {
            http.get(url, r => {
                r.setEncoding('utf8');
                let body = "";

                r.on('data', function (chunk) {
                    body += chunk;
                })

                r.on('end', () => {
                    return JSON.parse(body)
                })
            })
        } else {
            // Err....
        }
    }
}