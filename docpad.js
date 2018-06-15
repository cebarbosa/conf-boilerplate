module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "SPAnet Workshop on Clusters of Galaxies and the Large-Scale Structure of the Universe",
      description: "Joining astronomers in the State of Sao Paulo",
      date: "March 22, 2018",
      // If your event is free, just comment this line
      price: "Registration open until March 15",
      venue: "Instituto de Astronomia, Geofísica e Ciências Atmosféricas",
      address: "Rua do Matão, 1226",
      city: "São Paulo",
      state: "São Paulo", 
      email: "spanet.gc2018@gmail.com"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "Register here",
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
       "participants",
      "sponsors",
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "About",
      location: "Location",
      schedule: "Schedule",
        participants: "Participants",
      sponsors: "Support",
    },
//////////////////////////////////////////////////////////////////
    // The entire schedule
//    schedule: [
//      {
//        name: "Check-in / Breakfast",
//        time: "9h00"
//      },
//      {
//        name: "TBD",
//        company: "Institute",
//        link: {
//          href: "",
//          text: "@linus"
//        },
//        presentation: {
//          title: "TDB",
//          description: "TBD",
//          time: "10h00"
//        }
//      },
//      {
//        name: "Lunch",
//        time: "12h00"
//      },
//      {
//        name: "Coffee-break",
//        time: "15h00"
//      },
//    ],
/////////////////////////////////////////////////////////////////////
	schedule: [

	{
	name : "Registration",
	time: "9h00"
	},

{
	name: "Laerte Sodre",
	company: "IAG/USP",
	link: {href: "", text: "" },
	presentation: {
	title: "Laerte Sodre",
	description: "Introduction ",
	time: "9h30"
	}
	},

{
	name: "Paramita Barai",
	company: "IAG/USP",
	link: {href: "", text: "" },
	presentation: {
	title: "Paramita Barai",
	description: "Intermediate-Mass Black Hole Feedback in Dwarf Galaxiesh a View from Cosmological Simulations",
	time: "9h40"
	}
	},

{
	name: "Carlos Eduardo Barbosa",
	company: "IAG/USP",
	link: {href: "", text: "" },
	presentation: {
	title: "Carlos Eduardo Barbosa",
	description: "MUSE kinematics of the cD galaxy NGC 3311 in the Hydra I cluster",
	time: "10h00"
	}
	},

{
	name: "Laerte Sodré",
	company: "IAG/USP",
	link: {href: "", text: "" },
	presentation: {
	title: "Laerte Sodré",
	description: "The filamentary structure of the central galaxy of RXC J1504-0428",
	time: "10h20"
	}
	},

	{
	name : "Coffee-break",
	time: "10h40 "
	},

{
	name: "Rogerio Rosenfeld",
	company: "IFT-UNESP & LIneA",
	link: {href: "", text: "" },
	presentation: {
	title: "Rogerio Rosenfeld",
	description: "Baryon Acoustic Oscillation in the Dark Energy Survey",
	time: "11h00"
	}
	},

{
	name: "Hugo Camacho",
	company: "IFUSP",
	link: {href: "", text: "" },
	presentation: {
	title: "Hugo Camacho",
	description: "Measurement of the Baryon Acoustic Oscillation scale at z=1 with Dark Energy Survey Year 1 data",
	time: "11h20"
	}
	},

{
	name: "Rafael Ruggiero",
	company: "IAG/USP",
	link: {href: "", text: "" },
	presentation: {
	title: "Rafael Ruggiero",
	description: "Clumps, contamination and luminosity changesh aftermaths of the intracluster--interstellar interaction",
	time: "11h40"
	}
	},

	{
	name : "Poster Session",
	time: "12h00"
	},

	{
	name : "Lunch",
	time: "12h30"
	},

{
	name: "Hugo Vicente Capelato",
	company: "UNICSUL",
	link: {href: "", text: "" },
	presentation: {
	title: "Hugo Vicente Capelato",
	description: "The origin of metals found in the X-ray gas of the Fornax cluster",
	time: "14h00"
	}
	},

{
	name: "Eduardo Serra Cypriano",
	company: "IAG/USP",
	link: {href: "", text: "" },
	presentation: {
	title: "Eduardo Serra Cypriano",
	description: "Dark Matter properties in Galaxy Clusters through Gravitational Lensing",
	time: "14h20 "
	}
	},

{
	name: "Reinaldo Ramos de Carvalho",
	company: "INPE",
	link: {href: "", text: "" },
	presentation: {
	title: "Reinaldo Ramos de Carvalho",
	description: "How Does the Gaussianity of the Velocity Distribution of Groups and Clusters Relate to the Galaxian Properties?",
	time: "14h40"
	}
	},

	{
	name : "Coffee-break",
	time: "15h00"
	},

{
	name: "Alberto Molino",
	company: "IAG/USP",
	link: {href: "", text: "" },
	presentation: {
	title: "Alberto Molino",
	description: "Accurate Photometric Redshifts in Clusters of Galaxies",
	time: "15h20"
	}
	},

{
	name: "Antonio D. Montero Dorta",
	company: "IFUSP",
	link: {href: "", text: "" },
	presentation: {
	title: "Antonio D. Montero Dorta",
	description: "The halo-galaxy connection in the Large-Scale Structure of the Universe",
	time: "15h40"
	}
	},

	{
	name : "Open discussion",
	time: "16h00 "
	},

	],
///////////////////////////////////////////////////////////////


    // List of Sponsors
    sponsors: [
      {
        name: "FAPESP",
        logo: "themes/yellow-swan/img/fapesp.png",
        url: "http://www.fapesp.br"
      },
        
      {
        name: "IAG-USP",
        logo: "themes/yellow-swan/img/iagcompasso_H.png",
        url: "http://www.iag.usp.br"
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
