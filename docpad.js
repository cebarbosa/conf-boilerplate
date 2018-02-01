module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "SPAnet Workshop on Clusters of Galaxies",
      description: "Joining astronomers in the State of Sao Paulo",
      date: "March 22, 2018",
      // If your event is free, just comment this line
      // price: " ",
      venue: "IAG- USP",
      address: " Rua do Matão, 1226",
      city: "São Paulo",
      state: "São Paulo", 
      email: "spanet.gc2018@gmail.com"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "Register now!",
        link: "https://goo.gl/forms/DsSQOLWySjxCHl302"
    },

    // "Fork me on GitHub", if you don't want this, just remove the forkButton property
    //forkButton: {
    //    repository: "https://github.com/braziljs/conf-boilerplate"
    //},

    // Site info
    site: {
      theme: "yellow-swan",
      url: "http://www.astro.iag.usp.br/~spanet_gc2018",
      email: "spanet.gc2018@gmail.com"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      'schedule',
      "sponsors",
      'funding'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "About",
      location: "Location",
      schedule: "Schedule",
      sponsors: "Funding",
      contact: "Contact",
    },

    // The entire schedule
    schedule: [
      {
        name: "Check-in / Breakfast",
        time: "9h00"
      },
      {
        name: "Reinaldo de Carvalho",
        company: "INPE",
        link: {
          href: "http://twitter.com/linus",
          text: "@linus"
        },
        presentation: {
          title: "Reinaldo de Carvalho",
          description: "Status of Extragalactic Astronomy in the State of Sao Paulo.",
          time: "10h00"
        }
      },
      {
        name: "Lunch",
        time: "12h00"
      },
      {
        name: "Coffee-break",
        time: "15h00"
      },
    ],

    // List of Sponsors
    sponsors: [
      {
        name: "FAPESP",
        logo: "themes/yellow-swan/img/fapesp.png",
        url: "http://www.fapesp.br"
      }
    ],

    // List of Partners
    partners: [
      {
        name: "BrazilJS",
        logo: "themes/yellow-swan/img/partner.png",
        url: "http://braziljs.org"
      }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    },

    // Site Path
    getUrl: function() {
    	return this.site.url;
    }
  }
};