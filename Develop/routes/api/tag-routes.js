const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  ProductTag.findAll({
    include:[Product]
      })
        .then(dbProducts => {
          res.json(dbProducts);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json({ msg: "an error occured", err });
        });
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Product.findByPk(req.params.id, { include: [Product]})
  .then(dbProducts => {
    res.json(dbProducts);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ msg: "an error occured", err });
  });

});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
