const Post = require('../models/post');

exports.getAllPosts = (req, res, next) => {
    Post.find().then(
        (posts) => {
          res.status(200).json(posts);
        }
      ).catch(
        (error) => {
          res.status(400).json({
            error: error
          });
        }
      );
};

exports.getOnePost = (req, res, next) => {
  Post.findOne({
    _id: req.params.id
  }).then(
    (post) => {
      res.status(200).json(post);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.createPost = (req, res, next) => {
  // On stocke les données envoyées par le front-end sous forme de form-data dans une variable en les transformant en objet js
  // Création d'une instance du modèle Sauce
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  // Sauvegarde de la sauce dans la base de données
  post.save()
    // On envoie une réponse au frontend avec un statut 201 sinon on a une expiration de la requête
    .then(() => res.status(201).json({
      message: 'Post créé !'
    }))
    // On ajoute un code erreur en cas de problème
    .catch(error => res.status(400).json({
      error
    }));
};