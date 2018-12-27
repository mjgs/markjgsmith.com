const services = [
  {
    name: 'consultancy',
    packages: {
      basic: {
        description: '30 mins',
        amount: 30
      },
      standard: {
        description: '60 mins',
        amount: 50,
      },
      premium: {
        description: '90 mins',
        amount: 70
      }
    }
  },
  {
    name: 'infrastructure',
    packages: {
      basic: {
        description: '1 server',
        amount: 50
      },
      standard: {
        description: '1 load balancer, 2 servers',
        amount: 200,
      },
      premium: {
        description: '1 load balancer, 2 servers, 1 datastore',
        amount: 500
      }
    }
  },
  {
    name: 'maintenance',
    packages: {
      basic: {
        description: '1 d/w',
        amount: 400
      },
      standard: {
        description: '2 d/w',
        amount: 730,
      },
      premium: {
        description: '3 d/w',
        amount: 960
      }
    }
  },
  {
    name: 'development',
    packages: {
      basic: {
        description: '1 d/w',
        amount: 400
      },
      standard: {
        description: '2 d/w',
        amount: 730,
      },
      premium: {
        description: '3 d/w',
        amount: 960
      }
    }
  },
  {
    name: 'writing',
    packages: {
      basic: {
        description: '1 article',
        amount: 200
      },
      standard: {
        description: '2 articles',
        amount: 375,
      },
      premium: {
        description: '3 articles',
        amount: 550
      }
    }
  }
];

const profile = {
  name: 'Mark',
  venture: 'Subtle Software',
  email: {
    sender: 'mark@subtle.software',
    receiver: 'mark@subtle.software'
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

module.exports = {
  pricing: {
    services: services
  },
  profile: profile
}
