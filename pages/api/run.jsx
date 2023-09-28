import axios from "axios";

export default (req, res) => {
    var config = {
        method: 'post',
        url: 'https://api.codex.jaagrav.in',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            res.status(200).json(response.data);
        })
        .catch(function (error) {
            res.status(200).json(error);
        });
}