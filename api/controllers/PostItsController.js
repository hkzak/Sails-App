/**
 * PostItsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    list: function(req, res) {
        // res.view('list');
        PostIts.find({}).exec(function(err, postIts) {
            //console.log(res)
            if (err) {
                res.send(500, { error: 'Database Error' });
            }
            res.view('list', { postIts: postIts });
        });
    }

};