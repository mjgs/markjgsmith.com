const profile = {
  name: 'Mark',
  domains: {
    homepage: process.env.DOMAIN_HOMEPAGE,
    services: process.env.DOMAIN_SERVICES
  },
  venture: 'software services',
  pricing: 'https://blog.markjgsmith.com/pricing',
  email: {
    sender: 'donotreply@markjgsmith.com',
    receiver: 'markjgsmith@gmail.com'
  },
  social: {
    blog: 'https://blog.markjgsmith.com',
    linkblog: 'https://links.markjgsmith.com',
    twitter: 'https://twitter.com/markjgsmith',
    github: 'https://github.com/mjgs',
    linkedIn: 'https://linkedin.com/in/markjgsmith',
    instagram: 'https://instagram.com/markjgsmith',
  }
};

module.exports = profile;