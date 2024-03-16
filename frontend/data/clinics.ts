export const clinics = [
  {
    name: "Magic Smile turkey",
    priceRange: "$$",
    site: "https://www.magicsmileturkey",
    location: "Turkey, Antalya",
    address:
      "Güzeloba Mahallesi, Barınaklar Bulvarı No:131/1 Muratpaşa, 07230, Antalya, Turkey",
    rating: 4.5,
    reviewAmount: 991,
    description:
      "Our clinic is based in the centre of Antalya and is considered one of the best private dental clinics in Turkey. It is modern in design and has a calm and comfortable feeling as soon as you walk through the door.",
    phone: "+90 541 256 12 54",
    ammenities: [
      { title: "3 Day Treatments", icon: "clock" },
      { title: "Free Hotel", icon: "hotel" },
      { title: "Comfortable Clinic", icon: "comfortable" },
      { title: "Modern Equipment", icon: "equipment" },
      { title: "Convenient Location", icon: "location" },
      { title: "Friendly Staff", icon: "staff" },
    ],
    email: "hello@magicsmileturkey.com",
    photos: [
      "https://ef33ea9c.rocketcdn.me/wp-content/uploads/2022/02/magic-smile-dentist-555x740.jpg.webp",
      "https://ef33ea9c.rocketcdn.me/wp-content/uploads/2022/02/magic-smile-turkey-dental-clinic-555x740.jpg.webp",
      "https://ef33ea9c.rocketcdn.me/wp-content/uploads/2022/02/turkey-dentist-clinic-555x740.jpg.webp,https://ef33ea9c.rocketcdn.me/wp-content/uploads/2022/02/dentist-recommended-turkey-555x740.jpg.webp",
      "https://ef33ea9c.rocketcdn.me/wp-content/uploads/2022/02/dental-satisfaction-guarantee-warranty-turkey-555x740.jpg.webp",
      "https://ef33ea9c.rocketcdn.me/wp-content/uploads/2022/02/magic-smile-happy-patients-555x740.jpg.webp",
    ], //<- get here
    hotel: {
      name: "Azuu Hotel",
      distance: "5 minutes",
      ammenities: [
        "Fast Wifi",
        "Restaurant & Pub",
        "7/24 Reception",
        "Special Services",
      ],
      photos: "https://www.magicsmileturkey.com/hotels/", //<- get from here
    },
    finance: {
      name: "FinanceMyBeauty",
      min: "£1,000",
      max: "£50,000",
      year: "7 years",
      ammenities: [
        "Fast Approval",
        "Low Interest Rates",
        "Won't affect credit score",
        "No hidden fees",
      ],
    },
    treatments: {
      paidServices: {
        "DENTAL IMPLANTS": {
          "Dental Implant + Abutment": {
            price_gbp: 425,
            price_eur: 500,
            type: "Osstem Implant",
          },
          "Sinus Lifting": {
            price_gbp: 250,
            price_eur: 300,
            description: "Per Sinus Pocket",
          },
          "Bone Grafting (CC)": {
            price_gbp: 125,
            price_eur: 150,
          },
          Membrane: {
            price_gbp: 125,
            price_eur: 150,
          },
        },
        "ALL ON FOUR & ALL ON SIX TREATMENTS": {
          "All On Four": {
            "Implant x 4": 1700,
            "Temporary Denture": 200,
            "All On Four Screwed Porcelain Crowns": 2040,
            "Total for Per Jaw": {
              price_gbp: 3940,
              price_eur: 4650,
            },
          },
          "All On Six": {
            "Implant x 6": 2550,
            "Temporary Denture": 200,
            "All On Six Screwed Porcelain Crowns": 2040,
            "Total for Per Jaw": {
              price_gbp: 4790,
              price_eur: 5650,
            },
          },
          "Full Mouth Extraction": {
            price_gbp: 125,
            price_eur: 150,
            description: "Only Valid For Full Mouth Implant Treatment",
          },
        },
        "DENTAL CROWNS & LAMINATE VENEERS": {
          "Metal Fused Porcelain Crown": {
            price_gbp: 125,
            price_eur: 150,
          },
          "Zirconium Porcelain Crown": {
            price_gbp: 170,
            price_eur: 200,
          },
          "DSD System in Computer Designed E-Max Laminate Veneers": {
            price_gbp: 215,
            price_eur: 250,
            description: "Made in Laboratory with Cerec",
          },
          "E-Max Crowns": {
            price_gbp: 215,
            price_eur: 250,
            description: "Made in Laboratory with Cerec",
          },
          "Magic Smile White Cerec Crown": {
            price_gbp: 250,
            price_eur: 300,
            description: "Made in Laboratory with Cerec",
          },
          "Temporary Crown": {
            price_gbp: 35,
            price_eur: 39,
          },
        },
        "ROOT CANAL TREATMENTS": {
          "Root Canal Treatments": {
            price_gbp: 120,
            price_eur: 150,
          },
          "Old Canal Removals": {
            price_gbp: 40,
            price_eur: 50,
          },
        },
        "OTHER DENTAL TREATMENTS": {
          "Permanent Denture": {
            price_gbp: 600,
            price_eur: 720,
          },
          "Temporary Denture": {
            price_gbp: 200,
            price_eur: 250,
          },
          "Partial Denture": {
            price_gbp: 100,
            price_eur: 120,
            description: "up to 4 teeth",
          },
          "Tooth Extraction": {
            price_gbp: 35,
            price_eur: 40,
          },
          "Wisdom Tooth Extraction": {
            price_gbp: 80,
            price_eur: 95,
          },
          Post: {
            price_gbp: 100,
            price_eur: 120,
            description: "Per Tooth",
          },
          "Gum Contouring": {
            price_gbp: 100,
            price_eur: 120,
            description: "Per Tooth",
          },
          "Gum Curretage": {
            price_gbp: 100,
            price_eur: 120,
          },
          "Night Guard": {
            price_gbp: 60,
            price_eur: 70,
          },
          "White Filling / Aesthetic Filling": {
            price_gbp: 60,
            price_eur: 70,
          },
          "Descale & Polish (Full Mouth)": {
            price_gbp: 60,
            price_eur: 70,
          },
        },
      },
    },
  },
  {
    name: "Sevil Smile Studio",
    priceRange: "$$$",
    site: "https://www.sevilsmile.com",
    location: "Turkey, Antalya",
    address: "Fener, Lara Cd. No:339 09270 Antalya, Antalya Province, Turkey",
    rating: 5.0,
    reviewAmount: 241,
    description:
      "We love bringing smiles to people's faces and take great care in understanding every aspect of oral health and treatment options.",
    phone: "+90 533 368 17 57",
    ammenities: [
      { title: "45K+ Happy Pateints", icon: "smile" },
      { title: "Award Winning", icon: "award" },
      { title: "Comfortable Clinic", icon: "comfortable" },
      { title: "Modern Equipment", icon: "equipment" },
      { title: "Convenient Location", icon: "location" },
      { title: "Friendly Staff", icon: "staff" },
    ],
    email: "dentist@sevilsmile.com",
    photos: [
      "https://assets-global.website-files.com/6428110abde7a77e5d82c187/6525228ba4d963c0d77a3c2b_sevil-smile-studio-turkey-p-500.webp",
      "https://assets-global.website-files.com/6428110bbde7a7614082c197/650d7acd698450f9709c50e1_DSCF3748-p-500.webp",
      "https://assets-global.website-files.com/6428110bbde7a7614082c197/650d7af973f01cb784bc18d0_DD7A9040_1-p-500.webp",
      "https://assets-global.website-files.com/6428110bbde7a7614082c197/6428110bbde7a7128682c3e1_pexels-polina-zimmerman-4687290-p-500.jpg",
      "https://assets-global.website-files.com/6428110abde7a77e5d82c187/6526779fc9da43f372f54d75_best-dental-clinic-turkey-p-500.jpg",
    ], //<- get here
    hotel: {},
    finance: {},
    treatments: {
      paidServices: {
        "FIXED IMMEDIATE TEMPORARY DENTURE": 1000.0,
        "DENTAL BRIDGE": 585.0,
        "TEMPORARY PMMA": {
          description: "one year term per tooth",
          price_gbp: 50.0,
        },
        "TEMPORARY FULL CROWN FULL VENEER": 150.0,
        "TEMPORARY ACRYLIC DENTURE": {
          description: "PERJAW",
          price_gbp: 450.0,
        },
        "SOFT LINING TREATMENT": 200.0,
        "SILVER CROWN": {
          description: "Silver price not including",
          price_gbp: 330.0,
        },
        "SEVIL PEARLY WHITE ZIRCONIUM CROWN® FULL VENEER": 195.0,
        "INVISALIGN TREATMENT": 2500.0,
        "RETAINER TREATMENT": 175.0,
        "HOME TEETH WHITENING KIT": {
          description: "INCLUDING GUMSHIELD",
          price_gbp: 300.0,
        },
        "TEETH WHITENING HOME KIT GEL PER TUBE": 80.0,
        "ROOT CANAL TREATMENT": 120.0,
        "INTERNAL BLEACHING": {
          description: "One Single tooth Crown",
          price_gbp: 100.0,
        },
        "DENTAL FIBER POST TREATMENT": 90.0,
        "STRAUMANN IMPLANT SYSTEMS + ABUTMENT": 655.0,
        "FLAPLESS DENTAL IMPLANT SYSTEM ADDITIONAL": 244.0,
        "TREATMENTS UNDER SEDATION": {
          description: "two hours + each hour 200 GBP",
          price_gbp: 1250.0,
        },
        "TREATMENTS UNDER GENERAL ANAESTHESIA": 1250.0,
      },
    },
  },
  {
    name: "Smile Dental Turkey",
    priceRange: "$$",
    site: "https://www.smiledentalturkey.com",
    location: "Turkey, Antalya",
    address: "Fener, Bülent Ecevit Blv. No:85, 07160 Muratpaşa/Antalya, Turkey",
    rating: 5.0,
    reviewAmount: 713,
    description:
      "Your premier destination for top-notch dental care services in the heart of Turkey.",
    phone: "+90 534 790 67 07",
    ammenities: [
      { title: "High Tenure", icon: "clock" },
      { title: "Affordable Price", icon: "price" },
      { title: "Luxorious", icon: "comfortable" },
      { title: "High Quality", icon: "equipment" },
      { title: "Convenient Location", icon: "location" },
      { title: "Latest Tech", icon: "tech" },
    ],
    email: "hello@smiledentalturkey.com",
    photos: [
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.picco.com.tr%2Fwp-content%2Fuploads%2FBB_Lobby_001.jpg&f=1&nofb=1&ipt=9f5e0764af507b0e9a7557f5022fa04f66e269fc1cba2c495617c9a962e9f03e&ipo=images",
      "https://www.picco.com.tr/wp-content/webp-express/webp-images/uploads/BB_Clinic_003-2048x1152.jpg.webp",
      "https://www.picco.com.tr/wp-content/webp-express/webp-images/uploads/BB_FirstRoom_001-2048x1152.jpg.webp",
      "https://www.picco.com.tr/wp-content/webp-express/webp-images/uploads/AA_Gaming_001-2048x1152.jpg.webp",
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdentalexcellenceturkey.com%2Fwp-content%2Fuploads%2F2022%2F03%2Fzirconia-crown-before-after-img-8.png&f=1&nofb=1&ipt=acaec5771f20c66893d4e476794d14ecd71c73b4653b55d0e713390afeb5ca89&ipo=images",
    ], //<- get here
    hotel: {},
    finance: {
      name: "Kandoo",
      min: "£1,000",
      max: "£50,000",
      year: "7 years",
      ammenities: [
        "Quick & Easy",
        "Range of payment periods",
        "Competitive rates",
      ],
    },
    treatments: {
      paidServices: {
        "DENTAL IMPLANTS": {
          "NEODENT (Straumann Group) DENTAL IMPLANT + ABUTMENT": 436,
          "NOBEL BIOCARE DENTAL IMPLANT + ABUTMENT": 597,
          "STRAUMANN DENTAL IMPLANT + ABUTMENT": 702,
        },
        "ALL ON 4 & ALL ON 6 TREATMENTS": {
          "ALL ON 4 NEODENT (Straumann Group) DENTAL IMPLANTS + TEMPORARY DENTURE": 1947,
          "ALL ON 4 NOBEL BIOCARE DENTAL IMPLANTS + TEMPORARY DENTURE": 2713,
          "ALL ON 4 STRAUMANN DENTAL IMPLANTS + TEMPORARY DENTURE": 3135,
          "ALL ON 6 NEODENT (Straumann Group) DENTAL IMPLANTS + TEMPORARY DENTURE": 2612,
          "ALL ON 6 NOBEL BIOCARE DENTAL IMPLANTS + TEMPORARY DENTURE": 3800,
          "ALL ON 6 STRAUMANN DENTAL IMPLANTS + TEMPORARY DENTURE": 4446,
        },
        "ADDITIONAL PROCEDURES": {
          "SINUS LIFTING": 246,
          "BONE GRAFTING": 94,
        },
        "DENTAL CROWN/VENEERS PRICES IN TURKEY": {
          "METAL PORCELAIN CROWNS": 137,
          "ZIRCONIUM PORCELAIN CROWNS/VENEERS": 185,
          "EW NORITAKE SUPER PORCELAIN CROWNS": 228,
          "E.MAX PORCELAIN CROWNS/VENEERS": 236,
          "E.MAX LAMINATE VENEERS": 236,
          "SMILE HIGH TRANSLUCENCY PORCELAIN CROWNS": 232,
          LUMINEER: 236,
        },
        "TEETH WHITENING & CLEANING PRICES": {
          "TEETH CLEANING": 37,
          "DEEP CLEANING (per jaw)": 84,
        },
      },
    },
  },
  {
    name: "DentaKay",
    priceRange: "$$",
    location: "Turkey, Antalya",
    address: "Fener Mah. 47/D, 07160 Muratpaşa/Antalya, Türkiye",
    site: "https://dentakay.com",
    rating: 4.9,
    reviewAmount: 801,
    description:
      "Dentakay is a state-of-the-art dental clinic founded in 2009 and based in Istanbul. Hosting some of Turkey’s biggest dentists, Dentakay has become a hub of excellence",
    phone: "+90 541 600 80 08",
    ammenities: [
      { title: "Free Consultation", icon: "clock" },
      { title: "Treatment Plan", icon: "hotel" },
      { title: "Hollywood Smile", icon: "comfortable" },
      { title: "Modern Equipment", icon: "equipment" },
      { title: "Convenient Location", icon: "location" },
      { title: "VIP Services", icon: "car" },
    ],
    email: "info@dentakay.com",
    photos: [
      "https://dentakay.com/wp-content/uploads/2018/02/Antalya2.jpg",
      "https://dentakay.com/wp-content/uploads/2018/02/Nish2.jpg",
      "https://dentakay.com/wp-content/uploads/2018/02/Nish1.jpg",
      "https://dentakay.com/wp-content/uploads/2018/02/Antalya2.jpg",
      "https://dentakay.com/wp-content/uploads/2018/02/hollywood-smile-3.jpg",
      "https://dentakay.com/wp-content/uploads/2018/02/Antalya1.jpg",
    ], //<- get here
    hotel: {},
    finance: {},
    treatments: {
      paidServices: {
        "DENTAL IMPLANTS": {
          "Dental Implant + Abutment": {
            price_gbp: 425,
            price_eur: 500,
            type: "Osstem Implant",
          },
          "Sinus Lifting": {
            price_gbp: 250,
            price_eur: 300,
            description: "Per Sinus Pocket",
          },
          "Bone Grafting (CC)": {
            price_gbp: 125,
            price_eur: 150,
          },
          Membrane: {
            price_gbp: 125,
            price_eur: 150,
          },
        },
        "ALL ON FOUR & ALL ON SIX TREATMENTS": {
          "All On Four": {
            "Implant x 4": 1700,
            "Temporary Denture": 200,
            "All On Four Screwed Porcelain Crowns": 2040,
            "Total for Per Jaw": {
              price_gbp: 3940,
              price_eur: 4650,
            },
          },
          "All On Six": {
            "Implant x 6": 2550,
            "Temporary Denture": 200,
            "All On Six Screwed Porcelain Crowns": 2040,
            "Total for Per Jaw": {
              price_gbp: 4790,
              price_eur: 5650,
            },
          },
          "Full Mouth Extraction": {
            price_gbp: 125,
            price_eur: 150,
            description: "Only Valid For Full Mouth Implant Treatment",
          },
        },
        "DENTAL CROWNS & LAMINATE VENEERS": {
          "Metal Fused Porcelain Crown": {
            price_gbp: 125,
            price_eur: 150,
          },
          "Zirconium Porcelain Crown": {
            price_gbp: 170,
            price_eur: 200,
          },
          "DSD System in Computer Designed E-Max Laminate Veneers": {
            price_gbp: 215,
            price_eur: 250,
            description: "Made in Laboratory with Cerec",
          },
          "E-Max Crowns": {
            price_gbp: 215,
            price_eur: 250,
            description: "Made in Laboratory with Cerec",
          },
          "Magic Smile White Cerec Crown": {
            price_gbp: 250,
            price_eur: 300,
            description: "Made in Laboratory with Cerec",
          },
          "Temporary Crown": {
            price_gbp: 35,
            price_eur: 39,
          },
        },
        "ROOT CANAL TREATMENTS": {
          "Root Canal Treatments": {
            price_gbp: 120,
            price_eur: 150,
          },
          "Old Canal Removals": {
            price_gbp: 40,
            price_eur: 50,
          },
        },
        "OTHER DENTAL TREATMENTS": {
          "Permanent Denture": {
            price_gbp: 600,
            price_eur: 720,
          },
          "Temporary Denture": {
            price_gbp: 200,
            price_eur: 250,
          },
          "Partial Denture": {
            price_gbp: 100,
            price_eur: 120,
            description: "up to 4 teeth",
          },
          "Tooth Extraction": {
            price_gbp: 35,
            price_eur: 40,
          },
          "Wisdom Tooth Extraction": {
            price_gbp: 80,
            price_eur: 95,
          },
          Post: {
            price_gbp: 100,
            price_eur: 120,
            description: "Per Tooth",
          },
          "Gum Contouring": {
            price_gbp: 100,
            price_eur: 120,
            description: "Per Tooth",
          },
          "Gum Curretage": {
            price_gbp: 100,
            price_eur: 120,
          },
          "Night Guard": {
            price_gbp: 60,
            price_eur: 70,
          },
          "White Filling / Aesthetic Filling": {
            price_gbp: 60,
            price_eur: 70,
          },
          "Descale & Polish (Full Mouth)": {
            price_gbp: 60,
            price_eur: 70,
          },
        },
      },
    },
  },
  {
    name: "DentaKay",
    priceRange: "$$",
    location: "Turkey, Antalya",
    address: "Fener Mah. 47/D, 07160 Muratpaşa/Antalya, Türkiye",
    site: "https://dentakay.com",
    rating: 4.9,
    reviewAmount: 801,
    description:
      "Dentakay is a state-of-the-art dental clinic founded in 2009 and based in Istanbul. Hosting some of Turkey’s biggest dentists, Dentakay has become a hub of excellence",
    phone: "+90 541 600 80 08",
    ammenities: [
      { title: "Free Consultation", icon: "clock" },
      { title: "Treatment Plan", icon: "hotel" },
      { title: "Hollywood Smile", icon: "comfortable" },
      { title: "Modern Equipment", icon: "equipment" },
      { title: "Convenient Location", icon: "location" },
      { title: "VIP Services", icon: "car" },
    ],
    email: "info@dentakay.com",
    photos: ["https://dentakay.com"], //<- get here
    hotel: {},
    finance: {},
    treatments: {
      paidServices: {
        "DENTAL IMPLANTS": {
          "Dental Implant + Abutment": {
            price_gbp: 425,
            price_eur: 500,
            type: "Osstem Implant",
          },
          "Sinus Lifting": {
            price_gbp: 250,
            price_eur: 300,
            description: "Per Sinus Pocket",
          },
          "Bone Grafting (CC)": {
            price_gbp: 125,
            price_eur: 150,
          },
          Membrane: {
            price_gbp: 125,
            price_eur: 150,
          },
        },
        "ALL ON FOUR & ALL ON SIX TREATMENTS": {
          "All On Four": {
            "Implant x 4": 1700,
            "Temporary Denture": 200,
            "All On Four Screwed Porcelain Crowns": 2040,
            "Total for Per Jaw": {
              price_gbp: 3940,
              price_eur: 4650,
            },
          },
          "All On Six": {
            "Implant x 6": 2550,
            "Temporary Denture": 200,
            "All On Six Screwed Porcelain Crowns": 2040,
            "Total for Per Jaw": {
              price_gbp: 4790,
              price_eur: 5650,
            },
          },
          "Full Mouth Extraction": {
            price_gbp: 125,
            price_eur: 150,
            description: "Only Valid For Full Mouth Implant Treatment",
          },
        },
        "DENTAL CROWNS & LAMINATE VENEERS": {
          "Metal Fused Porcelain Crown": {
            price_gbp: 125,
            price_eur: 150,
          },
          "Zirconium Porcelain Crown": {
            price_gbp: 170,
            price_eur: 200,
          },
          "DSD System in Computer Designed E-Max Laminate Veneers": {
            price_gbp: 215,
            price_eur: 250,
            description: "Made in Laboratory with Cerec",
          },
          "E-Max Crowns": {
            price_gbp: 215,
            price_eur: 250,
            description: "Made in Laboratory with Cerec",
          },
          "Magic Smile White Cerec Crown": {
            price_gbp: 250,
            price_eur: 300,
            description: "Made in Laboratory with Cerec",
          },
          "Temporary Crown": {
            price_gbp: 35,
            price_eur: 39,
          },
        },
        "ROOT CANAL TREATMENTS": {
          "Root Canal Treatments": {
            price_gbp: 120,
            price_eur: 150,
          },
          "Old Canal Removals": {
            price_gbp: 40,
            price_eur: 50,
          },
        },
        "OTHER DENTAL TREATMENTS": {
          "Permanent Denture": {
            price_gbp: 600,
            price_eur: 720,
          },
          "Temporary Denture": {
            price_gbp: 200,
            price_eur: 250,
          },
          "Partial Denture": {
            price_gbp: 100,
            price_eur: 120,
            description: "up to 4 teeth",
          },
          "Tooth Extraction": {
            price_gbp: 35,
            price_eur: 40,
          },
          "Wisdom Tooth Extraction": {
            price_gbp: 80,
            price_eur: 95,
          },
          Post: {
            price_gbp: 100,
            price_eur: 120,
            description: "Per Tooth",
          },
          "Gum Contouring": {
            price_gbp: 100,
            price_eur: 120,
            description: "Per Tooth",
          },
          "Gum Curretage": {
            price_gbp: 100,
            price_eur: 120,
          },
          "Night Guard": {
            price_gbp: 60,
            price_eur: 70,
          },
          "White Filling / Aesthetic Filling": {
            price_gbp: 60,
            price_eur: 70,
          },
          "Descale & Polish (Full Mouth)": {
            price_gbp: 60,
            price_eur: 70,
          },
        },
      },
    },
  },
  {
    name: "DentaKay",
    priceRange: "$$",
    location: "Turkey, Antalya",
    address: "Fener Mah. 47/D, 07160 Muratpaşa/Antalya, Türkiye",
    site: "https://dentakay.com",
    rating: 4.9,
    reviewAmount: 801,
    description:
      "Dentakay is a state-of-the-art dental clinic founded in 2009 and based in Istanbul. Hosting some of Turkey’s biggest dentists, Dentakay has become a hub of excellence",
    phone: "+90 541 600 80 08",
    ammenities: [
      { title: "Free Consultation", icon: "clock" },
      { title: "Treatment Plan", icon: "hotel" },
      { title: "Hollywood Smile", icon: "comfortable" },
      { title: "Modern Equipment", icon: "equipment" },
      { title: "Convenient Location", icon: "location" },
      { title: "VIP Services", icon: "car" },
    ],
    email: "info@dentakay.com",
    photos: ["https://dentakay.com"], //<- get here
    hotel: {},
    finance: {},
    treatments: {
      paidServices: {
        "DENTAL IMPLANTS": {
          "Dental Implant + Abutment": {
            price_gbp: 425,
            price_eur: 500,
            type: "Osstem Implant",
          },
          "Sinus Lifting": {
            price_gbp: 250,
            price_eur: 300,
            description: "Per Sinus Pocket",
          },
          "Bone Grafting (CC)": {
            price_gbp: 125,
            price_eur: 150,
          },
          Membrane: {
            price_gbp: 125,
            price_eur: 150,
          },
        },
        "ALL ON FOUR & ALL ON SIX TREATMENTS": {
          "All On Four": {
            "Implant x 4": 1700,
            "Temporary Denture": 200,
            "All On Four Screwed Porcelain Crowns": 2040,
            "Total for Per Jaw": {
              price_gbp: 3940,
              price_eur: 4650,
            },
          },
          "All On Six": {
            "Implant x 6": 2550,
            "Temporary Denture": 200,
            "All On Six Screwed Porcelain Crowns": 2040,
            "Total for Per Jaw": {
              price_gbp: 4790,
              price_eur: 5650,
            },
          },
          "Full Mouth Extraction": {
            price_gbp: 125,
            price_eur: 150,
            description: "Only Valid For Full Mouth Implant Treatment",
          },
        },
        "DENTAL CROWNS & LAMINATE VENEERS": {
          "Metal Fused Porcelain Crown": {
            price_gbp: 125,
            price_eur: 150,
          },
          "Zirconium Porcelain Crown": {
            price_gbp: 170,
            price_eur: 200,
          },
          "DSD System in Computer Designed E-Max Laminate Veneers": {
            price_gbp: 215,
            price_eur: 250,
            description: "Made in Laboratory with Cerec",
          },
          "E-Max Crowns": {
            price_gbp: 215,
            price_eur: 250,
            description: "Made in Laboratory with Cerec",
          },
          "Magic Smile White Cerec Crown": {
            price_gbp: 250,
            price_eur: 300,
            description: "Made in Laboratory with Cerec",
          },
          "Temporary Crown": {
            price_gbp: 35,
            price_eur: 39,
          },
        },
        "ROOT CANAL TREATMENTS": {
          "Root Canal Treatments": {
            price_gbp: 120,
            price_eur: 150,
          },
          "Old Canal Removals": {
            price_gbp: 40,
            price_eur: 50,
          },
        },
        "OTHER DENTAL TREATMENTS": {
          "Permanent Denture": {
            price_gbp: 600,
            price_eur: 720,
          },
          "Temporary Denture": {
            price_gbp: 200,
            price_eur: 250,
          },
          "Partial Denture": {
            price_gbp: 100,
            price_eur: 120,
            description: "up to 4 teeth",
          },
          "Tooth Extraction": {
            price_gbp: 35,
            price_eur: 40,
          },
          "Wisdom Tooth Extraction": {
            price_gbp: 80,
            price_eur: 95,
          },
          Post: {
            price_gbp: 100,
            price_eur: 120,
            description: "Per Tooth",
          },
          "Gum Contouring": {
            price_gbp: 100,
            price_eur: 120,
            description: "Per Tooth",
          },
          "Gum Curretage": {
            price_gbp: 100,
            price_eur: 120,
          },
          "Night Guard": {
            price_gbp: 60,
            price_eur: 70,
          },
          "White Filling / Aesthetic Filling": {
            price_gbp: 60,
            price_eur: 70,
          },
          "Descale & Polish (Full Mouth)": {
            price_gbp: 60,
            price_eur: 70,
          },
        },
      },
    },
  },
  {
    name: "DentaKay",
    priceRange: "$$",
    location: "Turkey, Antalya",
    address: "Fener Mah. 47/D, 07160 Muratpaşa/Antalya, Türkiye",
    site: "https://dentakay.com",
    rating: 4.9,
    reviewAmount: 801,
    description:
      "Dentakay is a state-of-the-art dental clinic founded in 2009 and based in Istanbul. Hosting some of Turkey’s biggest dentists, Dentakay has become a hub of excellence",
    phone: "+90 541 600 80 08",
    ammenities: [
      { title: "Free Consultation", icon: "clock" },
      { title: "Treatment Plan", icon: "hotel" },
      { title: "Hollywood Smile", icon: "comfortable" },
      { title: "Modern Equipment", icon: "equipment" },
      { title: "Convenient Location", icon: "location" },
      { title: "VIP Services", icon: "car" },
    ],
    email: "info@dentakay.com",
    photos: ["https://dentakay.com"], //<- get here
    hotel: {},
    finance: {},
    treatments: {
      paidServices: {
        "DENTAL IMPLANTS": {
          "Dental Implant + Abutment": {
            price_gbp: 425,
            price_eur: 500,
            type: "Osstem Implant",
          },
          "Sinus Lifting": {
            price_gbp: 250,
            price_eur: 300,
            description: "Per Sinus Pocket",
          },
          "Bone Grafting (CC)": {
            price_gbp: 125,
            price_eur: 150,
          },
          Membrane: {
            price_gbp: 125,
            price_eur: 150,
          },
        },
        "ALL ON FOUR & ALL ON SIX TREATMENTS": {
          "All On Four": {
            "Implant x 4": 1700,
            "Temporary Denture": 200,
            "All On Four Screwed Porcelain Crowns": 2040,
            "Total for Per Jaw": {
              price_gbp: 3940,
              price_eur: 4650,
            },
          },
          "All On Six": {
            "Implant x 6": 2550,
            "Temporary Denture": 200,
            "All On Six Screwed Porcelain Crowns": 2040,
            "Total for Per Jaw": {
              price_gbp: 4790,
              price_eur: 5650,
            },
          },
          "Full Mouth Extraction": {
            price_gbp: 125,
            price_eur: 150,
            description: "Only Valid For Full Mouth Implant Treatment",
          },
        },
        "DENTAL CROWNS & LAMINATE VENEERS": {
          "Metal Fused Porcelain Crown": {
            price_gbp: 125,
            price_eur: 150,
          },
          "Zirconium Porcelain Crown": {
            price_gbp: 170,
            price_eur: 200,
          },
          "DSD System in Computer Designed E-Max Laminate Veneers": {
            price_gbp: 215,
            price_eur: 250,
            description: "Made in Laboratory with Cerec",
          },
          "E-Max Crowns": {
            price_gbp: 215,
            price_eur: 250,
            description: "Made in Laboratory with Cerec",
          },
          "Magic Smile White Cerec Crown": {
            price_gbp: 250,
            price_eur: 300,
            description: "Made in Laboratory with Cerec",
          },
          "Temporary Crown": {
            price_gbp: 35,
            price_eur: 39,
          },
        },
        "ROOT CANAL TREATMENTS": {
          "Root Canal Treatments": {
            price_gbp: 120,
            price_eur: 150,
          },
          "Old Canal Removals": {
            price_gbp: 40,
            price_eur: 50,
          },
        },
        "OTHER DENTAL TREATMENTS": {
          "Permanent Denture": {
            price_gbp: 600,
            price_eur: 720,
          },
          "Temporary Denture": {
            price_gbp: 200,
            price_eur: 250,
          },
          "Partial Denture": {
            price_gbp: 100,
            price_eur: 120,
            description: "up to 4 teeth",
          },
          "Tooth Extraction": {
            price_gbp: 35,
            price_eur: 40,
          },
          "Wisdom Tooth Extraction": {
            price_gbp: 80,
            price_eur: 95,
          },
          Post: {
            price_gbp: 100,
            price_eur: 120,
            description: "Per Tooth",
          },
          "Gum Contouring": {
            price_gbp: 100,
            price_eur: 120,
            description: "Per Tooth",
          },
          "Gum Curretage": {
            price_gbp: 100,
            price_eur: 120,
          },
          "Night Guard": {
            price_gbp: 60,
            price_eur: 70,
          },
          "White Filling / Aesthetic Filling": {
            price_gbp: 60,
            price_eur: 70,
          },
          "Descale & Polish (Full Mouth)": {
            price_gbp: 60,
            price_eur: 70,
          },
        },
      },
    },
  },
  {
    name: "DentaKay",
    priceRange: "$$",
    location: "Turkey, Antalya",
    address: "Fener Mah. 47/D, 07160 Muratpaşa/Antalya, Türkiye",
    site: "https://dentakay.com",
    rating: 4.9,
    reviewAmount: 801,
    description:
      "Dentakay is a state-of-the-art dental clinic founded in 2009 and based in Istanbul. Hosting some of Turkey’s biggest dentists, Dentakay has become a hub of excellence",
    phone: "+90 541 600 80 08",
    ammenities: [
      { title: "Free Consultation", icon: "clock" },
      { title: "Treatment Plan", icon: "hotel" },
      { title: "Hollywood Smile", icon: "comfortable" },
      { title: "Modern Equipment", icon: "equipment" },
      { title: "Convenient Location", icon: "location" },
      { title: "VIP Services", icon: "car" },
    ],
    email: "info@dentakay.com",
    photos: ["https://dentakay.com"], //<- get here
    hotel: {},
    finance: {},
    treatments: {
      paidServices: {
        "DENTAL IMPLANTS": {
          "Dental Implant + Abutment": {
            price_gbp: 425,
            price_eur: 500,
            type: "Osstem Implant",
          },
          "Sinus Lifting": {
            price_gbp: 250,
            price_eur: 300,
            description: "Per Sinus Pocket",
          },
          "Bone Grafting (CC)": {
            price_gbp: 125,
            price_eur: 150,
          },
          Membrane: {
            price_gbp: 125,
            price_eur: 150,
          },
        },
        "ALL ON FOUR & ALL ON SIX TREATMENTS": {
          "All On Four": {
            "Implant x 4": 1700,
            "Temporary Denture": 200,
            "All On Four Screwed Porcelain Crowns": 2040,
            "Total for Per Jaw": {
              price_gbp: 3940,
              price_eur: 4650,
            },
          },
          "All On Six": {
            "Implant x 6": 2550,
            "Temporary Denture": 200,
            "All On Six Screwed Porcelain Crowns": 2040,
            "Total for Per Jaw": {
              price_gbp: 4790,
              price_eur: 5650,
            },
          },
          "Full Mouth Extraction": {
            price_gbp: 125,
            price_eur: 150,
            description: "Only Valid For Full Mouth Implant Treatment",
          },
        },
        "DENTAL CROWNS & LAMINATE VENEERS": {
          "Metal Fused Porcelain Crown": {
            price_gbp: 125,
            price_eur: 150,
          },
          "Zirconium Porcelain Crown": {
            price_gbp: 170,
            price_eur: 200,
          },
          "DSD System in Computer Designed E-Max Laminate Veneers": {
            price_gbp: 215,
            price_eur: 250,
            description: "Made in Laboratory with Cerec",
          },
          "E-Max Crowns": {
            price_gbp: 215,
            price_eur: 250,
            description: "Made in Laboratory with Cerec",
          },
          "Magic Smile White Cerec Crown": {
            price_gbp: 250,
            price_eur: 300,
            description: "Made in Laboratory with Cerec",
          },
          "Temporary Crown": {
            price_gbp: 35,
            price_eur: 39,
          },
        },
        "ROOT CANAL TREATMENTS": {
          "Root Canal Treatments": {
            price_gbp: 120,
            price_eur: 150,
          },
          "Old Canal Removals": {
            price_gbp: 40,
            price_eur: 50,
          },
        },
        "OTHER DENTAL TREATMENTS": {
          "Permanent Denture": {
            price_gbp: 600,
            price_eur: 720,
          },
          "Temporary Denture": {
            price_gbp: 200,
            price_eur: 250,
          },
          "Partial Denture": {
            price_gbp: 100,
            price_eur: 120,
            description: "up to 4 teeth",
          },
          "Tooth Extraction": {
            price_gbp: 35,
            price_eur: 40,
          },
          "Wisdom Tooth Extraction": {
            price_gbp: 80,
            price_eur: 95,
          },
          Post: {
            price_gbp: 100,
            price_eur: 120,
            description: "Per Tooth",
          },
          "Gum Contouring": {
            price_gbp: 100,
            price_eur: 120,
            description: "Per Tooth",
          },
          "Gum Curretage": {
            price_gbp: 100,
            price_eur: 120,
          },
          "Night Guard": {
            price_gbp: 60,
            price_eur: 70,
          },
          "White Filling / Aesthetic Filling": {
            price_gbp: 60,
            price_eur: 70,
          },
          "Descale & Polish (Full Mouth)": {
            price_gbp: 60,
            price_eur: 70,
          },
        },
      },
    },
  },
  {
    name: "DentaKay",
    priceRange: "$$",
    location: "Turkey, Antalya",
    address: "Fener Mah. 47/D, 07160 Muratpaşa/Antalya, Türkiye",
    site: "https://dentakay.com",
    rating: 4.9,
    reviewAmount: 801,
    description:
      "Dentakay is a state-of-the-art dental clinic founded in 2009 and based in Istanbul. Hosting some of Turkey’s biggest dentists, Dentakay has become a hub of excellence",
    phone: "+90 541 600 80 08",
    ammenities: [
      { title: "Free Consultation", icon: "clock" },
      { title: "Treatment Plan", icon: "hotel" },
      { title: "Hollywood Smile", icon: "comfortable" },
      { title: "Modern Equipment", icon: "equipment" },
      { title: "Convenient Location", icon: "location" },
      { title: "VIP Services", icon: "car" },
    ],
    email: "info@dentakay.com",
    photos: ["https://dentakay.com"], //<- get here
    hotel: {},
    finance: {},
    treatments: {
      paidServices: {
        "DENTAL IMPLANTS": {
          "Dental Implant + Abutment": {
            price_gbp: 425,
            price_eur: 500,
            type: "Osstem Implant",
          },
          "Sinus Lifting": {
            price_gbp: 250,
            price_eur: 300,
            description: "Per Sinus Pocket",
          },
          "Bone Grafting (CC)": {
            price_gbp: 125,
            price_eur: 150,
          },
          Membrane: {
            price_gbp: 125,
            price_eur: 150,
          },
        },
        "ALL ON FOUR & ALL ON SIX TREATMENTS": {
          "All On Four": {
            "Implant x 4": 1700,
            "Temporary Denture": 200,
            "All On Four Screwed Porcelain Crowns": 2040,
            "Total for Per Jaw": {
              price_gbp: 3940,
              price_eur: 4650,
            },
          },
          "All On Six": {
            "Implant x 6": 2550,
            "Temporary Denture": 200,
            "All On Six Screwed Porcelain Crowns": 2040,
            "Total for Per Jaw": {
              price_gbp: 4790,
              price_eur: 5650,
            },
          },
          "Full Mouth Extraction": {
            price_gbp: 125,
            price_eur: 150,
            description: "Only Valid For Full Mouth Implant Treatment",
          },
        },
        "DENTAL CROWNS & LAMINATE VENEERS": {
          "Metal Fused Porcelain Crown": {
            price_gbp: 125,
            price_eur: 150,
          },
          "Zirconium Porcelain Crown": {
            price_gbp: 170,
            price_eur: 200,
          },
          "DSD System in Computer Designed E-Max Laminate Veneers": {
            price_gbp: 215,
            price_eur: 250,
            description: "Made in Laboratory with Cerec",
          },
          "E-Max Crowns": {
            price_gbp: 215,
            price_eur: 250,
            description: "Made in Laboratory with Cerec",
          },
          "Magic Smile White Cerec Crown": {
            price_gbp: 250,
            price_eur: 300,
            description: "Made in Laboratory with Cerec",
          },
          "Temporary Crown": {
            price_gbp: 35,
            price_eur: 39,
          },
        },
        "ROOT CANAL TREATMENTS": {
          "Root Canal Treatments": {
            price_gbp: 120,
            price_eur: 150,
          },
          "Old Canal Removals": {
            price_gbp: 40,
            price_eur: 50,
          },
        },
        "OTHER DENTAL TREATMENTS": {
          "Permanent Denture": {
            price_gbp: 600,
            price_eur: 720,
          },
          "Temporary Denture": {
            price_gbp: 200,
            price_eur: 250,
          },
          "Partial Denture": {
            price_gbp: 100,
            price_eur: 120,
            description: "up to 4 teeth",
          },
          "Tooth Extraction": {
            price_gbp: 35,
            price_eur: 40,
          },
          "Wisdom Tooth Extraction": {
            price_gbp: 80,
            price_eur: 95,
          },
          Post: {
            price_gbp: 100,
            price_eur: 120,
            description: "Per Tooth",
          },
          "Gum Contouring": {
            price_gbp: 100,
            price_eur: 120,
            description: "Per Tooth",
          },
          "Gum Curretage": {
            price_gbp: 100,
            price_eur: 120,
          },
          "Night Guard": {
            price_gbp: 60,
            price_eur: 70,
          },
          "White Filling / Aesthetic Filling": {
            price_gbp: 60,
            price_eur: 70,
          },
          "Descale & Polish (Full Mouth)": {
            price_gbp: 60,
            price_eur: 70,
          },
        },
      },
    },
  },
];
