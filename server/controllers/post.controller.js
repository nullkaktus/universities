import University from '../models/university';
import cuid from 'cuid';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all posts
 * @param req
 * @param res
 * @returns void
 */
export function getUniversities(req, res) {
  University.find().sort('-dateAdded').exec((err, posts) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ posts });
  });
}

// Not checked if it is working
/**
 * Get universities by country
 * @param req
 * @param res
 * @returns void
 */
export function getUniByCountry(req, res) {
  University.find({ country: req.body.value }).exec((err, posts) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ posts });
  });
}

/**
 * Save a post
 * @param req
 * @param res
 * @returns void
 */
export function addUniversity(req, res) {
  if (!req.body.university.name || !req.body.university.country || !req.body.university.city) {
    res.status(403).end();
  }

  const newUniversity = new University(req.body.university);

  // Let's sanitize inputs
  newUniversity.name = sanitizeHtml(newUniversity.name);
  newUniversity.country = sanitizeHtml(newUniversity.country);
  newUniversity.city = sanitizeHtml(newUniversity.city);
  newUniversity.cuid = cuid();
  newUniversity.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ university: saved });
  });
}

/**
 * Get a single post
 * @param req
 * @param res
 * @returns void
 */
export function getUniversity(req, res) {
  University.findOne({ cuid: req.params.cuid }).exec((err, uni) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ uni });
  });
}

/**
 * Delete a post
 * @param req
 * @param res
 * @returns void
 */
export function deleteUniversity(req, res) {
  University.findOne({ cuid: req.params.cuid }).exec((err, uni) => {
    if (err) {
      res.status(500).send(err);
    }

    uni.remove(() => {
      res.status(200).end();
    });
  });
}
