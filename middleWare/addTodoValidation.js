const validateAddTodo = (req, res, next) => {
    const {title, description, status, categoryName} = req.body;

    if (!title || !description || !categoryName || !status || !image){
        return res.json({
          msg: "Missing parameter",
          status: false,
        });
      }
      next()
 };

 module.exports = validateAddTodo;