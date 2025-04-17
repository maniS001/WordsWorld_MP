tsParticles.load('tsparticle', {
  particles: {
    move: {
      enable: true,
      speed: 0.2 // Lower the base speed here
    },
    links: {
      enable: false
    },
    number: {
      value: 50 // Lower the number of particles here
    },
    size: {
      random: true, // Enable random size
      value:2 // Range of particle sizes
    },
    // move: {
    //   speed: {
    //     random: true, // Enable random speed
    //     min: 0.5, // Minimum speed
    //     max: 3 // Maximum speed
    //   }
    // }
  }
})
