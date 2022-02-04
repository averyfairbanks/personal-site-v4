const content = {
  titles: {
    welcome: () => "WELCOME",
    about: () => "ABOUT",
    work: () => "WORK",
    contact: () => "CONTACT"
  },
  bodies: {
    about: () => 
      "Hailing from New England, Avery is a big stinky hippy who writes code to keep their fridge stocked (but who also actually enjoys it like some sort of freak.",
    work: () => [
      "job one", "job two", "job three"
    ]
  }
}

export default content;