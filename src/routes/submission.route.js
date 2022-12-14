const { Router } = require('express');
const { celebrate, Joi } = require('celebrate');
const SubmissionController = require('../controllers/submission.controller');
const { isCurrentUser, isAuth } = require('../middlewares');

const route = Router();

module.exports = app => {
  app.use('/s', route);

  route.post(
    '/:formId',
    celebrate({
      body: Joi.object({
        data: Joi.object().required(),
      }),
    }),
    SubmissionController.create
  );
};
