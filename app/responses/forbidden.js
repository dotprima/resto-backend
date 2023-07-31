module.exports = function (data) {

    var error = new Error();

    error.message = "Forbidden";
    error.status = 401;
    error.success = false;

    if (data instanceof Error) {
        error.message = data.message;
    } else if (data) {
        error.message = data
    }

    this.res.status(error.status);

    if (this.req.isAPI) {
        return this.res.json(error);
    }

    return this.res.render("errors/401", error);
};
